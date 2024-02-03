import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { twJoin } from 'tailwind-merge';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const montserrat = Montserrat({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--body-font',
  fallback: ['Helvetica', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BRANCH_STUDIO_BASE_URL),
  title: "St. Peter's Kitchen",
  description: "St. Peter's Kitchen serves lunch weekdays in Rochester, NY",
  ...(process.env.BRANCH_STUDIO_VISIBILITY !== 'public'
    ? { robots: 'noindex' }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={twJoin(montserrat.className, 'text-black text-base')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
