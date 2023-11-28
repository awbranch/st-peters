import React from 'react';
import NarrowContainer from '@/components/NarrowContainer';

export default async function Inventory() {
  return (
    <NarrowContainer>
      <main className={'px-10'}>
        <section id={'headers'} className={'pt-20'}>
          <h1 className="text-5xl sm:text-7xl font-medium tracking-tighter [text-wrap:balance]">
            NOURISHMENT. COMMUNITY. HOPE.
          </h1>
        </section>

        <section id={'buttons'} className={'mt-20'}>
          <div>
            <button
              type="button"
              className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Button text
            </button>
            <button
              type="button"
              className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Button text
            </button>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Button text
            </button>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Button text
            </button>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Button text
            </button>
          </div>
        </section>
      </main>
    </NarrowContainer>
  );
}
