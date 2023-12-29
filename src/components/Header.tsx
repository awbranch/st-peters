import React from 'react';
import { getHeader } from '@/sanity/sanity-utils';
import NotificationBar from '@/components/NotificationBar';
import NavBar from '@/components/NavBar';

export default async function Header() {
  const props = await getHeader();

  return (
    <header>
      {props.showNotification && (
        <NotificationBar message={props.notificationMessage} />
      )}
      <NavBar />
    </header>
  );
}
