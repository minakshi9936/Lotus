import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Hotel Services | Lotus Hotel & Banquet Hall Lucknow',
  description: 'Explore our comprehensive services including room service, fine dining, spa, swimming pool, conference rooms, and airport transfer. Experience luxury hospitality at Lotus Hotel.',
  keywords: ['hotel services', 'room service', 'spa and wellness', 'fine dining', 'conference rooms', 'airport transfer'],
  openGraph: {
    title: 'Premium Hotel Services | Lotus Hotel & Banquet Hall Lucknow',
    description: 'Explore our comprehensive services including room service, fine dining, spa, swimming pool, conference rooms, and airport transfer.',
    url: '/service',
    type: 'website',
    images: [
      {
        url: 'https://lotus-hotel-stay.netlify.app/lotus-logo.ico',
        width: 1200,
        height: 630,
        alt: 'Lotus Hotel - Premium Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Hotel Services | Lotus Hotel & Banquet Hall Lucknow',
    description: 'Experience our comprehensive premium hotel services and amenities.',
    images: ['https://lotus-hotel-stay.netlify.app/lotus-logo.ico'],
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
