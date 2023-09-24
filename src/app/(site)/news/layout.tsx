import Header from '@/components/Header';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header color={'white'} currentMenu={'news'} />
      {children}
    </>
  );
}
