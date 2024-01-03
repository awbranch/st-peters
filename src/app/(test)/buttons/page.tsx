import Block from '@/components/Block';
import type { Color } from '@/types/Color';
import LinkButton, { Icon, Size } from '@/components/LinkButton';
import { twJoin } from 'tailwind-merge';
import Link from 'next/link';
import React from 'react';
import { ButtonVariant } from '@/types/ButtonVariant';

const variants: ButtonVariant[] = ['solid', 'outline'];
const icons: Icon[] = ['none', 'down', 'right', 'left'];
const colors: Color[] = ['white', 'gray', 'green', 'blue', 'pink', 'black'];
const sizes: Size[] = ['small', 'medium', 'large'];

export default function TextExample() {
  return (
    <Block>
      <span className={'p-3'}>
        <Link
          className={twJoin(
            'text-base font-medium leading-6 rounded-md px-3 py-2 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-white bg-sunset hover:bg-sunset-light focus-visible:outline-sunset',
          )}
          href={'#'}
        >
          large button
        </Link>
        <LinkButton href={'#'} color={'pink'} variant={'solid'} size={'large'}>
          large button
        </LinkButton>
      </span>

      {variants.map((variant) => (
        <div className={'my-10'} key={variant}>
          <h1 className={'text-3xl'}>{variant}</h1>
          {colors.map((color) => (
            <div
              className={twJoin(
                'p-3',
                color === 'white' ? 'bg-gray-600' : 'bg-white',
              )}
              key={color}
            >
              {sizes.map((size) => (
                <div className="m-2" key={size}>
                  {icons.map((icon) => (
                    <div className="inline-block m-2" key={icon}>
                      <LinkButton
                        href={'#'}
                        icon={icon}
                        color={color}
                        variant={variant}
                        size={size}
                      >
                        {size} button
                      </LinkButton>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </Block>
  );
}
