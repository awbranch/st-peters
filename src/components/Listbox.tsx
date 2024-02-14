import { Listbox as ListboxHUI } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { CheckIcon } from '@heroicons/react/16/solid';
import { twJoin, twMerge } from 'tailwind-merge';
import { Image } from '@/types/Image';
import ResponsiveImage from '@/components/ResponsiveImage';
import React from 'react';

export type ListboxItem = {
  id: string;
  name: string;
  image?: Image;
};

type Props = {
  name?: string;
  className?: string;
  items: ListboxItem[];
  unselectedId: string;
  selectedId: string;
  setSelectedId: (id: string) => void;
};

export default function Listbox({
  name,
  className,
  items,
  unselectedId,
  selectedId,
  setSelectedId,
}: Props) {
  const handleChange = (id: string) => {
    setSelectedId(id);
  };

  const selectedItem = items.find((s) => s.id === selectedId) || items[0];
  const anyImages = items.find((i) => !!i.image);

  return (
    <ListboxHUI name={name} value={selectedItem?.id} onChange={handleChange}>
      <div className={twMerge('relative', className)}>
        <ListboxHUI.Button
          className={twJoin(
            'relative w-full rounded-md border-0 pl-3.5 py-2 pr-12 text-sm leading-6 bg-white text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 cursor-default ',
            selectedItem.id === unselectedId
              ? 'text-gray-400 font-regular italic'
              : 'text-gray-800 font-medium',
          )}
        >
          <span className="block truncate">{selectedItem.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxHUI.Button>
        <ListboxHUI.Options className="absolute z-10 mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {items.map((item, idx) => (
            <ListboxHUI.Option
              key={idx}
              value={item.id}
              className={({ active }) =>
                twJoin(
                  'relative cursor-default select-none py-2 pl-3 pr-9',
                  active ? 'bg-gray-200 text-black' : 'text-gray-900',
                )
              }
            >
              {({ active, selected }) => (
                <>
                  <div className="flex items-center">
                    {item.image && (
                      <span
                        className={
                          'absolute inset-y-0 left-0 flex items-center pl-4'
                        }
                      >
                        <ResponsiveImage
                          image={item.image}
                          sizes={`24px`}
                          className="h-6 w-6 aspect-square flex-shrink-0"
                        />
                      </span>
                    )}
                    <span
                      className={twJoin(
                        'truncate',
                        anyImages ? 'ml-10' : 'ml-3',
                        selected && item.id !== unselectedId && 'font-semibold',
                        item.id === unselectedId &&
                          'text-gray-400 font-regular italic',
                      )}
                    >
                      {item.name}
                    </span>
                  </div>

                  {selected && item.id !== unselectedId && (
                    <span
                      className={twJoin(
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                        active ? 'text-sunset' : 'text-gray-900',
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </ListboxHUI.Option>
          ))}
        </ListboxHUI.Options>
      </div>
    </ListboxHUI>
  );
}
