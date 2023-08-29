import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import classNames from 'classnames';
import './globals.css';

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
    <html lang="en">
      <body
        className={classNames(montserrat.className, 'text-black text-base')}
      >
        {children}
      </body>
    </html>
  );
}
