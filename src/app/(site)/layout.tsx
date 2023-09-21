import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import cn from 'classnames';
import NavBar from '@/components/NavBar';
import { getSettings } from '@/sanity/sanity-utils';
import NotificationBar from '@/components/NotificationBar';

const montserrat = Montserrat({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "St. Peter's Kitchen",
  description: "St. Peter's Kitchen serves lunch weekdays in Rochester, NY",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(montserrat.className, 'text-black text-base')}>
        {settings.showNotification && (
          <NotificationBar message={settings.notificationMessage} />
        )}

        <NavBar />
        {children}
      </body>
    </html>
  );
}
