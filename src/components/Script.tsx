import { Script as Props } from '@/types/Script';
import { parse } from 'node-html-parser';
import ScriptClient from '@/components/ScriptClient';
import { H1 } from '@/components/Typography';

export default function Script({ code }: Props) {
  const doc = parse(code);
  const scriptElem = doc.querySelector('script');
  if (scriptElem) {
    return (
      <div>
        <ScriptClient attributes={scriptElem.attributes} />
      </div>
    );
  } else
    return (
      <div>
        <H1 className={'mt-0 mb-4'}>Invalid Script Tag</H1>
        <pre>{code}</pre>
      </div>
    );
}
