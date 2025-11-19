import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Rooms & Suites | Lotus Hotel in Lucknow',
  description: 'Discover luxurious and comfortable rooms at Lotus Hotel & Banquet Hall in Lucknow. Premium suites with modern amenities, perfect for a relaxing stay.',
  keywords: ['hotel rooms lucknow', 'luxury rooms', 'premium suites', 'comfortable accommodation', 'room booking'],
  openGraph: {
    title: 'Luxury Rooms & Suites | Lotus Hotel in Lucknow',
    description: 'Discover luxurious and comfortable rooms at Lotus Hotel & Banquet Hall in Lucknow. Premium suites with modern amenities.',
    url: '/room',
    type: 'website',
    images: [
      {
        url: '/lotuslogo.png',
        width: 1200,
        height: 630,
        alt: 'Lotus Hotel - Luxury Rooms & Suites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Rooms & Suites | Lotus Hotel in Lucknow',
    description: 'Discover luxurious and comfortable rooms with modern amenities.',
    images: ['/lotuslogo.png'],
  },
};

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
