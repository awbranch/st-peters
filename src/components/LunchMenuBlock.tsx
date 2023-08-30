import React from 'react';
import Block from '@/components/Block';
import Card from '@/components/Card';
import Para from '@/components/Para';
import Image from 'next/image';
import { getLunchMenus } from '@/sanity/sanity-utils';

export default async function LunchMenuBlock() {
  const lunchMenus = await getLunchMenus();
  console.log(
    '>>> LunchMenuBlock queried lunch menus: ' + new Date().getTime(),
  );

  return (
    <Block bg="blue" center>
      <h2 className="text-xl uppercase mb-1">What’s for Lunch?</h2>
      <p>Monday through Friday - Noon to 2:00 PM</p>
      <p>681 Brown St. Rochester, NY</p>
      <div className="mt-4 md:mt-8 flex flex-row justify-between">
        {lunchMenus.map((m) => (
          <Card key={m._id} className="text-black w-[300px]">
            <h3 className="text-lg mb-1">{m.day}</h3>
            <Para>{m.date}</Para>
            <Image
              src="/heart-pink.svg"
              className="mx-auto mb-3"
              height={40}
              width={40}
              alt="pink heart"
            />
            {m.items.map((mi, i) => (
              <Para key={i}>{mi}</Para>
            ))}
          </Card>
        ))}
      </div>
    </Block>
  );
}
