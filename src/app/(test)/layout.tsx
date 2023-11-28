import './globals.css';

import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { twJoin } from 'tailwind-merge';

const montserrat = Montserrat({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "St. Peter's Kitchen",
  description: "St. Peter's Kitchen serves lunch weekdays in Rochester, NY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twJoin(montserrat.className, 'text-neutral-950 text-base')}
      >
        {children}
      </body>
    </html>
  );
}
