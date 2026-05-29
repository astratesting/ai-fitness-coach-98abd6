import os
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="AI Fitness Coach API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage (replace with PostgreSQL in production)
users_db = {}

class OnboardingData(BaseModel):
    age: int
    weight: float
    height: float
    activityLevel: str
    goal: str
    dietaryPreference: str

class MealLog(BaseModel):
    meal: str
    calories: int
    protein: float
    carbs: float
    fat: float

class ExerciseLog(BaseModel):
    exercise: str
    sets: int
    reps: int
    weight: Optional[float] = None

def generate_workout_plan(goal: str, activity_level: str) -> dict:
    plans = {
        "weight_loss": {
            "focus": "Fat burning and cardio",
            "exercises": [
                {"name": "Jumping Jacks", "sets": 3, "reps": 30},
                {"name": "Bodyweight Squats", "sets": 3, "reps": 15},
                {"name": "Push-ups", "sets": 3, "reps": 12},
                {"name": "Mountain Climbers", "sets": 3, "reps": 20},
                {"name": "Plank", "sets": 3, "reps": 30},
            ],
            "cardio_minutes": 30,
        },
        "muscle_gain": {
            "focus": "Strength and hypertrophy",
            "exercises": [
                {"name": "Barbell Squats", "sets": 4, "reps": 8},
                {"name": "Bench Press", "sets": 4, "reps": 8},
                {"name": "Deadlifts", "sets": 4, "reps": 6},
                {"name": "Pull-ups", "sets": 3, "reps": 8},
                {"name": "Overhead Press", "sets": 3, "reps": 10},
            ],
            "cardio_minutes": 10,
        },
        "general_fitness": {
            "focus": "Balanced full-body workout",
            "exercises": [
                {"name": "Dumbbell Rows", "sets": 3, "reps": 12},
                {"name": "Goblet Squats", "sets": 3, "reps": 12},
                {"name": "Dumbbell Bench Press", "sets": 3, "reps": 12},
                {"name": "Lunges", "sets": 3, "reps": 10},
                {"name": "Bicycle Crunches", "sets": 3, "reps": 15},
            ],
            "cardio_minutes": 20,
        },
        "endurance": {
            "focus": "Cardiovascular endurance",
            "exercises": [
                {"name": "Running", "sets": 1, "reps": 1},
                {"name": "Burpees", "sets": 3, "reps": 15},
                {"name": "Jump Rope", "sets": 3, "reps": 50},
                {"name": "High Knees", "sets": 3, "reps": 30},
                {"name": "Box Jumps", "sets": 3, "reps": 10},
            ],
            "cardio_minutes": 40,
        },
    }
    return plans.get(goal, plans["general_fitness"])

def generate_nutrition_plan(goal: str, weight: float, dietary_preference: str) -> dict:
    bmr = 10 * weight + 6.25 * 175 - 5 * 30 + 5  # rough estimate
    if goal == "weight_loss":
        calories = int(bmr - 500)
    elif goal == "muscle_gain":
        calories = int(bmr + 300)
    else:
        calories = int(bmr)
    
    protein_ratio = 0.3 if dietary_preference == "high_protein" else 0.2
    carb_ratio = 0.3 if dietary_preference == "low_carb" else 0.5
    fat_ratio = 1 - protein_ratio - carb_ratio
    
    return {
        "calories": calories,
        "protein": int(calories * protein_ratio / 4),
        "carbs": int(calories * carb_ratio / 4),
        "fat": int(calories * fat_ratio / 9),
        "dietary_preference": dietary_preference,
        "meal_suggestions": [
            "Breakfast: Oatmeal with berries and protein shake",
            "Lunch: Grilled chicken salad with quinoa",
            "Dinner: Salmon with roasted vegetables and sweet potato",
            "Snack: Greek yogurt with nuts",
        ],
    }

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}

@app.post("/api/user/{user_id}/onboarding")
async def save_onboarding(user_id: str, data: OnboardingData):
    workout_plan = generate_workout_plan(data.goal, data.activityLevel)
    nutrition_plan = generate_nutrition_plan(data.goal, data.weight, data.dietaryPreference)
    
    users_db[user_id] = {
        "profile": data.model_dump(),
        "workoutPlan": workout_plan,
        "nutritionPlan": nutrition_plan,
        "mealLogs": [],
        "exerciseLogs": [],
    }
    return {"message": "Onboarding complete", "workoutPlan": workout_plan, "nutritionPlan": nutrition_plan}

@app.get("/api/user/{user_id}/plans")
async def get_plans(user_id: str):
    user = users_db.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found. Complete onboarding first.")
    return {
        "workoutPlan": user["workoutPlan"],
        "nutritionPlan": user["nutritionPlan"],
    }

@app.post("/api/user/{user_id}/meals")
async def log_meal(user_id: str, meal: MealLog):
    user = users_db.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user["mealLogs"].append(meal.model_dump())
    return {"message": "Meal logged", "total_meals": len(user["mealLogs"])}

@app.get("/api/user/{user_id}/meals")
async def get_meals(user_id: str):
    user = users_db.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"meals": user["mealLogs"]}

@app.post("/api/user/{user_id}/exercises")
async def log_exercise(user_id: str, exercise: ExerciseLog):
    user = users_db.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user["exerciseLogs"].append(exercise.model_dump())
    return {"message": "Exercise logged", "total_exercises": len(user["exerciseLogs"])}

@app.get("/api/user/{user_id}/exercises")
async def get_exercises(user_id: str):
    user = users_db.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"exercises": user["exerciseLogs"]}

@app.get("/api/user/{user_id}/progress")
async def get_progress(user_id: str):
    user = users_db.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    total_calories = sum(m["calories"] for m in user["mealLogs"])
    total_protein = sum(m["protein"] for m in user["mealLogs"])
    total_exercises = len(user["exerciseLogs"])
    return {
        "total_calories_logged": total_calories,
        "total_protein_logged": total_protein,
        "total_exercises_logged": total_exercises,
        "goal": user["profile"]["goal"],
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
