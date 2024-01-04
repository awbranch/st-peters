import React from 'react';
import { getHeader } from '@/sanity/sanity-utils';
import NotificationBar from '@/components/NotificationBar';
import NavBar from '@/components/NavBar';

export default async function Header() {
  const props = await getHeader();

  return (
    <header>
      {props.showNotification && (
        <NotificationBar
          message={props.notificationMessage}
          background={props.notificationBackground?.label}
        />
      )}
      <NavBar
        logo={props.logo}
        wideLogo={props.wideLogo}
        menuItems={props.menuItems}
        actionButtons={props.actionButtons}
      />
    </header>
  );
}
