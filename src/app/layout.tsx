import './globals.css';

import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { twJoin } from 'tailwind-merge';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { GoogleTagManager } from '@next/third-parties/google';
import { getSettings } from '@/utils/sanity';

const montserrat = Montserrat({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--body-font',
  fallback: ['Helvetica', 'sans-serif'],
});

if (!process.env.BRANCH_STUDIO_BASE_URL) {
  throw Error('BRANCH_STUDIO_BASE_URL has not been set');
}

if (!process.env.BRANCH_STUDIO_VISIBILITY) {
  throw Error('BRANCH_STUDIO_VISIBILITY has not been set');
}

export async function generateMetadata(): Promise<Metadata> {
  let meta: Metadata = {};

  if (process.env.BRANCH_STUDIO_BASE_URL) {
    meta.metadataBase = new URL(process.env.BRANCH_STUDIO_BASE_URL);
  }

  const settings = await getSettings();
  if (settings) {
    if (settings.title) {
      meta.title = settings.title;
    }
    if (settings.description) {
      meta.description = settings.description;
    }
  }

  if (process.env.BRANCH_STUDIO_VISIBILITY !== 'public') {
    meta.robots = 'noindex';
  }

  return meta;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twJoin(montserrat.className, 'text-black text-base')}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-MD6DRC8S" />
    </html>
  );
}
