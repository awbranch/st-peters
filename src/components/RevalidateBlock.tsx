'use client';

import React from 'react';
import Block from '@/components/Block';

export default async function RevalidateBlock() {
  const handleClick = async () => {
    console.log('Clicked');
    fetch('/api/revalidate')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Block bg="black" center>
      <h2 className="text-xl uppercase mb-1">Revalidate</h2>
      <div className="mt-4">
        <button onClick={handleClick}>Revalidate</button>
      </div>
    </Block>
  );
}
