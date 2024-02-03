import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';

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
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="h-3 w-3 flex-shrink-0 text-gray-400"
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
