import React from 'react';
import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header currentMenu={'support-us'} />
      {children}
    </>
  );
}
