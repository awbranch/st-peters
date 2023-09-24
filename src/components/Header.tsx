import React from 'react';
import { getSettings } from '@/sanity/sanity-utils';
import NotificationBar from '@/components/NotificationBar';
import NavBar, { NavBarProps } from '@/components/NavBar';

type Props = NavBarProps;

export default async function Header(props: Props) {
  const settings = await getSettings();

  return (
    <header>
      {settings.showNotification && (
        <NotificationBar message={settings.notificationMessage} />
      )}
      <NavBar {...props} />
    </header>
  );
}
