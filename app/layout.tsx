import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luxury Hotel Rooms & Suites | Lotus Hotel Bookings',
  description: 'Book elegant luxury rooms and suites at Lotus Hotel. Experience premium amenities, world-class hospitality, and unforgettable stays at competitive rates.',
  keywords: ['hotel', 'luxury hotel', 'rooms', 'suites', 'book hotel', 'lotus hotel', 'hospitality', 'vacation', 'travel', 'resort', 'hotels in lucknow'],
  icons: {
    icon: [
      { url: '/lotuslogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/lotuslogo.png', sizes: '64x64', type: 'image/png' },
      { url: '/lotuslogo.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: '/lotuslogo.png',
  },
  openGraph: {
    title: 'Luxury Hotel Rooms & Suites | Lotus Hotel Bookings',
    description: 'Book elegant luxury rooms and suites at Lotus Hotel. Experience premium amenities, world-class hospitality, and unforgettable stays at competitive rates.',
    url: 'https://lotushotel.com',
    siteName: 'Lotus Hotel',
    images: [
      {
        url: '/lotuslogo.png',
        width: 1200,
        height: 630,
        alt: 'Lotus Hotel',
      },
    ],
    type: 'website',
  },
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
