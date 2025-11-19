import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Banquet Hall Packages | Wedding & Event Packages Lucknow',
  description: 'Book premium banquet hall packages for weddings, corporate events, birthdays, and celebrations. Affordable pricing with complete event management at Lotus Hotel & Banquet Hall.',
  keywords: ['banquet packages', 'wedding packages', 'event packages', 'corporate event', 'banquet hall lucknow', 'wedding venue lucknow'],
  openGraph: {
    title: 'Banquet Hall Packages | Wedding & Event Packages Lucknow',
    description: 'Book premium banquet hall packages for weddings, corporate events, and celebrations with complete event management.',
    url: '/packages',
    type: 'website',
    images: [
      {
        url: '/banquet.jpg',
        width: 1200,
        height: 630,
        alt: 'Lotus Hotel - Banquet Hall Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banquet Hall Packages | Wedding & Event Packages Lucknow',
    description: 'Book premium banquet hall packages for your special events and celebrations.',
    images: ['/banquet.jpg'],
  },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
