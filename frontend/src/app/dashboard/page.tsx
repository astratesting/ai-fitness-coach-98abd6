import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import DashboardClient from './DashboardClient';

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) redirect('/sign-in');
  return <DashboardClient userId={userId} />;
}