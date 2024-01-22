import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { titleCase } from 'text-case';

type Props = {
  path: string[];
};

export default function BreadCrumbs({ path }: Props) {
  let routes = convertToRoutes(path);

  return (
    <nav className="mt-6 ml-2" aria-label="Breadcrumb">
      <ol role="list" className="flex gap-4">
        {routes.map((r, i) => (
          <li key={r.path}>
            <div className="flex gap-4">
              {i > 0 && (
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              )}
              <Link
                href={r.path}
                className="text-sm font-medium text-gray-400 hover:text-gray-500"
                aria-current={r.current ? 'page' : undefined}
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

function convertToRoutes(paths: string[]) {
  let routes: { name: string; path: string; current: boolean }[] = [];
  let currentPath = '';
  paths.forEach((p, i) => {
    currentPath += `/${p}`;
    routes.push({
      name: titleCase(p.replace(/-/g, ' ')),
      path: currentPath,
      current: i === paths.length - 1,
    });
  });

  return routes;
}
