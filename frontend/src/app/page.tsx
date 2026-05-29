import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-5xl font-bold text-primary-700 mb-4">AI Fitness Coach</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        Personalized workouts and nutrition plans powered by AI, tailored to your biometrics.
      </p>
      <div className="flex gap-4">
        <Link href="/sign-up" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
          Get Started
        </Link>
        <Link href="/sign-in" className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
          Sign In
        </Link>
      </div>
    </div>
  );
}