'use client';

import { useEffect } from 'react';
import Button from '@/components/Button';
import { Para } from '@/components/Typography';
import Section from '@/components/Section';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main>
      <Section className={'text-center'}>
        <h1 className="text-xl mb-4">Something went wrong!</h1>
        <Button
          color={'black'}
          variant={'solid'}
          size={'small'}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try Again
        </Button>

        <div className={'mt-4 text-left'}>
          <Para>{error.stack}</Para>
        </div>
      </Section>
    </main>
  );
}
