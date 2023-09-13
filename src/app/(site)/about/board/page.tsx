import React from 'react';
import Block from '@/components/Block';
import { FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';

export default async function Staff() {
  return (
    <main>
      <Block color={'white'}>
        <div className="inline-flex gap-1 items-center">
          <FaArrowLeft className="inline-block" />
          <Link
            href={'/about#team'}
            className={
              'text-base font-bold hover:underline hover:underline-offset-4'
            }
          >
            ABOUT
          </Link>
        </div>
        <h1 className="text-xl uppercase mb-4">Our Board</h1>
      </Block>
    </main>
  );
}
