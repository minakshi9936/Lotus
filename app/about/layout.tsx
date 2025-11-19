import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Lotus Hotel & Banquet Hall | 15+ Years of Excellence',
  description: 'Learn about Lotus Hotel & Banquet Hall in Lucknow. With 15+ years of experience, we provide luxury hospitality, world-class services, and unforgettable guest experiences.',
  keywords: ['about lotus hotel', 'lotus hotel history', 'hotel excellence', 'luxury hospitality lucknow', 'hotel services'],
  openGraph: {
    title: 'About Lotus Hotel & Banquet Hall | 15+ Years of Excellence',
    description: 'Learn about Lotus Hotel & Banquet Hall in Lucknow. With 15+ years of experience, we provide luxury hospitality, world-class services, and unforgettable guest experiences.',
    url: '/about',
    type: 'website',
    images: [
      {
        url: 'https://lotus-hotel-stay.netlify.app/lotus-logo.ico',
        width: 1200,
        height: 630,
        alt: 'Lotus Hotel - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Lotus Hotel & Banquet Hall | 15+ Years of Excellence',
    description: 'Learn about our 15+ years of excellence in luxury hospitality.',
    images: ['https://lotus-hotel-stay.netlify.app/lotus-logo.ico'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
