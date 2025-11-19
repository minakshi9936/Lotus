import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Admin Panel - Lotus Hotel & Banquet Hall',
  description: 'Admin dashboard for managing hotel bookings, rooms, and events at Lotus Hotel & Banquet Hall.',
  robots: 'noindex, nofollow',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
