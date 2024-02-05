import React from 'react';
import { ComponentSetReference as Props } from '@/types/ComponentSetReference';
import { getComponentSet } from '@/utils/sanity-utils';
import ComponentList from '@/components/ComponentList';

export default async function ComponentSetReference({ componentSet }: Props) {
  const set = componentSet?._ref
    ? await getComponentSet(componentSet?._ref)
    : null;

  if (!set) {
    return (
      <div className={'text-5xl text-red-700'}>
        Unknown Component Set {componentSet._key}
      </div>
    );
  } else if (!set.components?.length) {
    return (
      <div className={'text-5xl text-red-700'}>
        Component Set {set.name} contains no components
      </div>
    );
  } else {
    return <ComponentList components={set.components} />;
  }
}
