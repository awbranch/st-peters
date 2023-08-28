import React from 'react';
import Block from '@/components/Block';
import Card from '@/components/Card';
import Para from '@/components/Para';
import Image from 'next/image';

const lunchMenu = [
  {
    day: 'Friday',
    date: 'Today',
    items: ['Cheeseburger', 'French Fries', 'Green Salad', 'Apple Pie'],
  },
  {
    day: 'Monday',
    date: 'August 15',
    items: ['BBQ Pulled Pork', 'Baked Beans', 'Green Salad', 'Peach Cobbler'],
  },
  {
    day: 'Tuesday',
    date: 'August 16',
    items: [
      'Chicken Tenders',
      'Macaroni and Cheese',
      'Garden Salad with Ranch Dressing',
      'Apple Crumble',
    ],
  },
];

export default function LunchMenu() {
  return (
    <Block bg="blue" center>
      <h2 className="text-xl uppercase mb-1">What’s for Lunch?</h2>
      <p>Monday through Friday - Noon to 2:00 PM</p>
      <p>681 Brown St. Rochester, NY</p>
      <div className="mt-4 md:mt-8 flex flex-row justify-between">
        {lunchMenu.map((m, i) => (
          <Card key={i} className="text-black w-[300px]">
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
