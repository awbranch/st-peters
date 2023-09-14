import React from 'react';
import Block from '@/components/Block';
import SimpleText from '@/components/SimpleText';
import { Documents } from '@/types/Documents';
import { FaFilePdf, FaFileZipper } from 'react-icons/fa6';
import { fileAttributes, urlForFile } from '@/sanity/sanity-utils';

interface Props {
  documents: Documents;
}

export default function DocumentsBlock({ documents }: Props) {
  return (
    <Block color="white">
      <div>
        <h1 className="text-xl mb-3">{documents.title}</h1>
        {documents.description && <SimpleText text={documents.description} />}
      </div>

      <ul className="mt-4">
        {documents.documents.map((d, i) => (
          <li key={i}>
            <div className="flex flex-row gap-2 mb-3">
              <div>
                <div className="text-blue h-6 w-6">
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
                  <h2 className="text-lg text-blue">{d.name}</h2>
                </a>
                <SimpleText text={d.description} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Block>
  );
}
