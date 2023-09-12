'use client';

import React from 'react';
import Block from '@/components/Block';

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
    <Block color="pink" center>
      <div className="mt-4">
        <button className="border-2 p-2" onClick={handleClick}>
          Revalidate
        </button>
      </div>
    </Block>
  );
}
