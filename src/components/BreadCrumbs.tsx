import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

type Route = {
  name: string;
  path: string;
};

type BreadCrumbsProps = {
  routes: Route[];
};

export default function BreadCrumbs({ routes }: BreadCrumbsProps) {
  return (
    <nav className="mt-6 ml-2" aria-label="Breadcrumb">
      <ol role="list" className="flex gap-4">
        {routes.map((r, i) => (
          <li key={r.path}>
            <div className="flex gap-4 items-center">
              {i > 0 && (
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              )}
              <Link
                href={r.path}
                className="text-sm font-medium text-gray-400 hover:text-gray-500"
                aria-current={i === routes.length - 1 ? 'page' : undefined}
              >
                {r.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
