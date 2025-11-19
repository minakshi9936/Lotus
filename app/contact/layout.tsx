import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Lotus Hotel & Banquet Hall | Get in Touch Lucknow',
  description: 'Contact Lotus Hotel & Banquet Hall in Lucknow. Find our location, phone, email, and reach out for reservations, events, or inquiries. We are here to help you 24/7.',
  keywords: ['contact lotus hotel', 'hotel contact lucknow', 'customer support', 'reservations', 'event inquiry'],
  openGraph: {
    title: 'Contact Lotus Hotel & Banquet Hall | Get in Touch Lucknow',
    description: 'Contact us for reservations, event bookings, or inquiries. Available 24/7 to assist you.',
    url: '/contact',
    type: 'website',
    images: [
      {
        url: 'https://lotus-hotel-stay.netlify.app/lotuslogo.png',
        width: 1200,
        height: 630,
        alt: 'Lotus Hotel - Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Lotus Hotel & Banquet Hall | Get in Touch Lucknow',
    description: 'Reach out to us for reservations, event bookings, and inquiries. Available 24/7.',
    images: ['https://lotus-hotel-stay.netlify.app/lotuslogo.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
