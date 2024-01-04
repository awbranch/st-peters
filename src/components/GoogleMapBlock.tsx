import React from 'react';
import { GoogleMapBlock as Props } from '@/types/GoogleMapBlock';

export default function GoogleMapBlock({ id, embedURL }: Props) {
  return (
    <div id={id?.current}>
      <iframe
        className="mt-3"
        id="google-map"
        src={embedURL}
        width="100%"
        height="680"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
