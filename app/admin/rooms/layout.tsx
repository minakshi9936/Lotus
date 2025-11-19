import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Rooms | Admin Panel - Lotus Hotel & Banquet Hall',
  description: 'Manage and configure hotel rooms in the admin panel of Lotus Hotel & Banquet Hall.',
  robots: 'noindex, nofollow',
};

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
