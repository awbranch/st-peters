import React from 'react';
import Block from '@/components/Block';
import SimpleText from '@/components/SimpleText';
import { FaFilePdf, FaFileZipper } from 'react-icons/fa6';
import { fileAttributes, urlForFile } from '@/sanity/sanity-utils';
import { PortableTextBlock } from 'sanity';
import { Document } from '@/types/Document';
import RichText from '@/components/RichText';

interface Props {
  title: string;
  text: PortableTextBlock[];
  documents: Document[];
}

export default function DocumentsBlock({ title, text, documents }: Props) {
  return (
    <Block color="white">
      <div>
        <h1 className="text-xl mb-3">{title}</h1>
        <RichText document={text} />
      </div>

      <ul className="mt-4">
        {documents.map((d, i) => (
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
