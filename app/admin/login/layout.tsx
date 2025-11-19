import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login | Lotus Hotel & Banquet Hall',
  description: 'Login to admin dashboard for Lotus Hotel & Banquet Hall management system.',
  robots: 'noindex, nofollow',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
