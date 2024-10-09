import React, { ReactNode } from 'react';

import { fileAttributes, urlForFile } from '@/utils/sanity';
import { DocumentList as Props } from '@/types/DocumentList';
import { File } from 'sanity';
import { FilePdfIcon, FileZipIcon } from '@/components/Icon';

export default function DocumentList({ items }: Props) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {items.map((d) => (
        <li key={d._key} className="py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className={'flex-none'}>
              <FileLink file={d.file}>
                {fileAttributes(d.file).format === 'pdf' ? (
                  <FilePdfIcon className={'h-10 w-10 fill-current'} />
                ) : (
                  <FileZipIcon className={'h-10 w-10  fill-current'} />
                )}
              </FileLink>
            </div>

            <div className="min-w-0 flex-auto">
              <FileLink file={d.file}>
                <p
                  className={'text-base font-semibold leading-6 text-gray-900'}
                >
                  {d.name}
                </p>
              </FileLink>
              <p className={'text-sm leading-5 text-gray-500'}>
                {d.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

type FileLinkProps = {
  file: File;
  children: ReactNode;
};
function FileLink({ file, children }: FileLinkProps) {
  return (
    <a
      href={urlForFile(file)}
      {...(fileAttributes(file).format === 'pdf'
        ? { target: '_blank', rel: 'noreferrer noopener' }
        : {})}
    >
      {children}
    </a>
  );
}
