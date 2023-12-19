import React from 'react';
import { ButtonTileGridConfig } from '@/types/ButtonTileGridConfig';
import { ButtonTile } from '@/components/ButtonTile';

export default async function ButtonTileGrid({
  buttons,
}: ButtonTileGridConfig) {
  return (
    <div className={'text-center'}>
      <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-4">
        {buttons.map((button, i) => (
          <ButtonTile key={i} {...button} />
        ))}
      </div>
    </div>
  );
}
