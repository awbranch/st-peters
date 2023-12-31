import React from 'react';
import SimpleText from '@/components/SimpleText';
import { FaFilePdf, FaFileZipper } from 'react-icons/fa6';
import { fileAttributes, urlForFile } from '@/sanity/sanity-utils';
import { DocumentsBlock as Props } from '@/types/DocumentsBlock';

export default function DocumentsBlock({ id, documents }: Props) {
  return (
    <div id={id?.current}>
      <ul className="mt-4">
        {documents.map((d, i) => (
          <li key={i}>
            <div className="flex flex-row gap-2 mb-3">
              <div>
                <div className="text-ocean h-4 w-4 md:h-6 md:w-6">
                  {fileAttributes(d.file).format === 'pdf' ? (
                    <FaFilePdf size="100%" />
                  ) : (
                    <FaFileZipper size="100%" />
                  )}
                </div>
              </div>

              <div className="w-full">
                <a
                  href={urlForFile(d.file)}
                  {...(fileAttributes(d.file).format === 'pdf'
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                >
                  <h2 className="text-lg text-ocean">{d.name}</h2>
                </a>
                <SimpleText text={d.description} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
