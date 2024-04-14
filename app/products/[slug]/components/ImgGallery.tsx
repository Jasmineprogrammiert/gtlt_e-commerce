'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/lib/sanity'

interface imgGallery {
  images: any;
}

export default function ImgGallery({ images }: imgGallery) {
  const [bigImg, setBigImg] = useState(images[0]);

  const handleSmallImgClick = (image: any) => {
    setBigImg(image)
  }

  return (
    <>
    <div> 
      <Image
        src={urlFor(bigImg).url()}
        alt="Product Image"
        width={200}
        height={200}
        className="w-full object-cover object-center"
      />
      <div className="flex flex-row space-x-2 mt-4 xl:mt-5 overflow-x-auto w-full">
        {images.map((image: any, i: any) => (
          <Image
            key={i}
            src={urlFor(image).url()}
            alt="Product Images"
            width={200}
            height={200}
            className="w-20 xl:w-24 object-cover object-center cursor-pointer"
            onClick={() => handleSmallImgClick(image)}
          />
        ))}
      </div>
    </div>
    </>
  )
}