import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Lotus Hotel & Banquet Hall Management',
  description: 'Admin dashboard for Lotus Hotel & Banquet Hall. Manage bookings, rooms, and events.',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
