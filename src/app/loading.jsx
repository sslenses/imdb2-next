// src/app/loading.jsx
import Image from 'next/image';
import React from 'react';

export default function Loading() {
  return (
    <div className='flex justify-center mt-16'>
      <Image
        className='h-52'
        src='/spinner.svg'
        alt='loading...'
        width={208} // Lebar 52 * 4 = 208 piksel
        height={208} // Tinggi 52 * 4 = 208 piksel
      />
    </div>
  );
}
