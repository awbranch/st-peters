import React, { ReactNode } from 'react';
import { FaFilePdf, FaFileZipper } from 'react-icons/fa6';
import { fileAttributes, urlForFile } from '@/sanity/sanity-utils';
import { DocumentsBlock as Props } from '@/types/DocumentsBlock';
import TextSplit from '@/components/TextSplit';
import { File } from 'sanity';

export default function DocumentsBlock({ id, documents }: Props) {
  return (
    <ul id={id?.current} role="list" className="divide-y divide-gray-100">
      {documents.map((d, i) => (
        <li key={urlForFile(d.file)} className="py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className={'flex-none'}>
              <FileLink file={d.file}>
                {fileAttributes(d.file).format === 'pdf' ? (
                  <FaFilePdf className={'h-10 w-10'} />
                ) : (
                  <FaFileZipper className={'h-10 w-10'} />
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
              <TextSplit
                className={'space-y-2'}
                text={d.description}
                render={(p) => (
                  <p className={'text-sm leading-5 text-gray-500'}>{p}</p>
                )}
              />
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
