import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'https://lotus-hotel-stay.netlify.app/';
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: 'Lotus Hotel & Banquet Hall in Lucknow | Luxury Rooms & Event Spaces',
  description: 'Lotus Hotel & Banquet Hall in Lucknow offers luxury rooms, premium suites, and elegant banquet facilities. Perfect for weddings, corporate events, and conferences. Book your perfect stay or event today.',
  keywords: ['lotus hotel lucknow', 'luxury hotel lucknow', 'hotel rooms lucknow', 'banquet hall lucknow', 'wedding venue lucknow', 'event spaces lucknow', 'luxury suites', 'conference room lucknow', 'corporate events', 'wedding halls lucknow', 'hospitality lucknow'],
  icons: {
    icon: [
      { url: '/lotuslogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/lotuslogo.png', sizes: '64x64', type: 'image/png' },
      { url: '/lotuslogo.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: '/lotus-logo.ico',
  },
  openGraph: {
    title: 'Lotus Hotel & Banquet Hall in Lucknow | Luxury Rooms & Event Spaces',
    description: 'Lotus Hotel & Banquet Hall in Lucknow offers luxury rooms, premium suites, and elegant banquet facilities. Perfect for weddings, corporate events, and conferences. Book your perfect stay or event today.',
    url: '/',
    siteName: 'Lotus Hotel & Banquet Hall Lucknow',
    type: 'website',
    images: [
      {
        url: 'https://lotus-hotel-stay.netlify.app/lotus-logo.ico',
        width: 1200,
        height: 630,
        alt: 'Lotus Hotel & Banquet Hall Lucknow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lotus Hotel & Banquet Hall in Lucknow | Luxury Rooms & Event Spaces',
    description: 'Lotus Hotel & Banquet Hall in Lucknow offers luxury rooms, premium suites, and elegant banquet facilities.',
    images: ['https://lotus-hotel-stay.netlify.app/lotus-logo.ico'],
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
