'use client';

import React from 'react';
import Section from '@/components/Section';

export default function RevalidateBlock() {
  const handleClick = async () => {
    console.log('Clicked');
    fetch('/api/revalidate')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Section palette={'highlight'}>
      <div className="mt-4 text-center">
        <button className="border-2 p-2" onClick={handleClick}>
          Revalidate
        </button>
      </div>
    </Section>
  );
}
