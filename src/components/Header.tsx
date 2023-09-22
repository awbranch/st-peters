import { getSettings } from '@/sanity/sanity-utils';
import NotificationBar from '@/components/NotificationBar';
import React from 'react';
import NavBar from '@/components/NavBar';

export default async function Header() {
  const settings = await getSettings();

  return (
    <header>
      {settings.showNotification && (
        <NotificationBar message={settings.notificationMessage} />
      )}
      <NavBar />
    </header>
  );
}
