'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/lib/sanity'

interface imgGallery {
  images: any;
}

export default function ImageGallery({ images }: imgGallery) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image)
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, i: any) => (
          <div key={i} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt="Product images"
              width={200}
              height={200}
              className="h-20 w-20 object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg h-2/5 aspect-square">
        <Image
          src={urlFor(bigImage).url()}
          alt="Product images"
          width={200}
          height={200}
          className="h-full w-full object-cover object-center"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  )
}