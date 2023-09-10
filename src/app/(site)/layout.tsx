import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import cn from 'classnames';
import NavBar from '@/components/NavBar';

const montserrat = Montserrat({
  weight: ['400', '700', '800'],
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
      <body className={cn(montserrat.className, 'text-black text-base')}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
