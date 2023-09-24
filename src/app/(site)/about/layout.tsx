import React from 'react';
import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header color={'white'} currentMenu={'about'} />
      {children}
    </>
  );
}
