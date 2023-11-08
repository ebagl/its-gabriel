import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import { Manrope } from 'next/font/google';


import { SiteConstants } from '@/data/SiteConstants';
import Header from '@/components/Header';
import Container from '@/components/Container';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  metadataBase: new URL(SiteConstants.siteUrl),
  title: SiteConstants.title,
  description: SiteConstants.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} scroll-smooth`}
    >
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <Container>
          <div className="flex h-screen flex-col justify-between font-sans">
            <Header />
            <main className="mb-auto h-full w-full">{children}</main>
          </div>
        </Container>
        <Analytics />
      </body>
    </html>
  );
}
