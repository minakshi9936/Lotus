import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LuxeHotel - Experience Luxury Beyond Expectations',
  description: 'Discover world-class hospitality at LuxeHotel. Book elegant rooms, suites, and enjoy premium amenities for an unforgettable stay.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
