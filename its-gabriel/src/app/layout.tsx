import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import { SiteConstants } from '@/data/SiteConstants';
import Header from '@/components/Header';
import Container from '@/components/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SiteConstants.title,
  description: SiteConstants.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <Container>
          <div className="flex h-screen flex-col justify-between font-sans">
            <Header />
            <main className="mb-auto">{children}</main>
          </div>
        </Container>
        <Analytics />
      </body>
    </html>
  );
}
