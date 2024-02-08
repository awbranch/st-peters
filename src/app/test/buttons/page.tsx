import type { Color } from '@/types/Color';
import { LinkButton } from '@/components/Button';
import { twJoin } from 'tailwind-merge';
import React from 'react';
import { ButtonVariant } from '@/types/ButtonVariant';
import Section from '@/components/Section';
import { ButtonSize } from '@/types/ButtonSize';
import { ButtonIcon } from '@/types/ButtonIcon';

const variants: ButtonVariant[] = ['solid', 'outline'];
const icons: ButtonIcon[] = ['none', 'down', 'right', 'left'];
const colors: Color[] = ['white', 'gray', 'green', 'blue', 'pink', 'black'];
const sizes: ButtonSize[] = ['small', 'medium', 'large'];

export default function TextExample() {
  return (
    <Section>
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
              <h2
                className={twJoin(
                  'text-1xl',
                  color === 'white' ? 'text-white' : 'text-black',
                )}
              >
                {color}
              </h2>
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
    </Section>
  );
}
