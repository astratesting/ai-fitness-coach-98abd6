'use client';
import { useState, useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';
import { Dumbbell, Apple, BarChart3, Settings } from 'lucide-react';

interface DashboardClientProps {
  userId: string;
}

export default function DashboardClient({ userId }: DashboardClientProps) {
  const [activeTab, setActiveTab] = useState<'workouts' | 'nutrition' | 'progress'>('workouts');
  const [workoutPlan, setWorkoutPlan] = useState<any>(null);
  const [nutritionPlan, setNutritionPlan] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/${userId}/plans`);
        if (res.ok) {
          const data = await res.json();
          setWorkoutPlan(data.workoutPlan);
          setNutritionPlan(data.nutritionPlan);
        }
      } catch (err) {
        console.error('Failed to fetch plans', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-700">AI Fitness Coach</h1>
          <div className="flex items-center gap-4">
            <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('workouts')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${activeTab === 'workouts' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border'}`}
          >
            <Dumbbell className="w-4 h-4" /> Workouts
          </button>
          <button
            onClick={() => setActiveTab('nutrition')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${activeTab === 'nutrition' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border'}`}
          >
            <Apple className="w-4 h-4" /> Nutrition
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${activeTab === 'progress' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border'}`}
          >
            <BarChart3 className="w-4 h-4" /> Progress
          </button>
        </div>

        {activeTab === 'workouts' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Your Workout Plan</h2>
            {workoutPlan ? (
              <div className="space-y-4">
                {workoutPlan.exercises?.map((ex: any, i: number) => (
                  <div key={i} className="border rounded-lg p-4">
                    <h3 className="font-medium">{ex.name}</h3>
                    <p className="text-sm text-gray-500">{ex.sets} sets x {ex.reps} reps</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Complete your onboarding to get a personalized workout plan.</p>
            )}
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Your Nutrition Plan</h2>
            {nutritionPlan ? (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-primary-700">{nutritionPlan.calories}</p>
                    <p className="text-sm text-gray-500">Calories</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-blue-700">{nutritionPlan.protein}g</p>
                    <p className="text-sm text-gray-500">Protein</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-yellow-700">{nutritionPlan.carbs}g</p>
                    <p className="text-sm text-gray-500">Carbs</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Complete your onboarding to get a personalized nutrition plan.</p>
            )}
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
            <p className="text-gray-500">Progress tracking coming soon. Log your workouts and meals to see insights.</p>
          </div>
        )}
      </div>
    </div>
  );
}