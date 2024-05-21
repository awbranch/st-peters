'use client';
import React, { useEffect, useRef } from 'react';

type Props = {
  attributes: Record<string, string>;
};

export default function ScriptClient({ attributes }: Props) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const script = document.createElement('script');
      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });

      divRef.current.innerHTML = '';
      divRef.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={divRef}>
      <div className="mx-auto text-center text-lg font-semibold text-gray-600">
        Loading...
      </div>
    </div>
  );
}
