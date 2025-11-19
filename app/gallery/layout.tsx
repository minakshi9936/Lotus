import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel & Banquet Gallery | Photo Tour of Lotus Hotel Lucknow',
  description: 'Explore the stunning gallery of Lotus Hotel & Banquet Hall. View our luxurious rooms, elegant banquet halls, dining areas, and event spaces in Lucknow.',
  keywords: ['hotel gallery', 'banquet hall photos', 'hotel photos lucknow', 'event space images', 'wedding venue gallery'],
  openGraph: {
    title: 'Hotel & Banquet Gallery | Photo Tour of Lotus Hotel Lucknow',
    description: 'Explore the stunning gallery of Lotus Hotel & Banquet Hall. View our luxurious rooms, elegant banquet halls, and event spaces.',
    url: '/gallery',
    type: 'website',
    images: [
      {
        url: 'https://lotus-hotel-stay.netlify.app/lotuslogo.png',
        width: 1200,
        height: 630,
        alt: 'Lotus Hotel - Photo Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel & Banquet Gallery | Photo Tour of Lotus Hotel Lucknow',
    description: 'Explore the stunning gallery of Lotus Hotel & Banquet Hall with photos of rooms and banquet halls.',
    images: ['https://lotus-hotel-stay.netlify.app/lotuslogo.png'],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
