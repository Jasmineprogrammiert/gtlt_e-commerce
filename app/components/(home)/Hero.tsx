'use client'

import { useCallback } from 'react'
import Image from 'next/image'
// styles
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { MoveLeft } from 'lucide-react'
import { MoveRight } from 'lucide-react'
// assets
import heroImg1 from '../../../public/assets/heroImg-1.jpg'
import heroImg2 from '../../../public/assets/heroImg-2.jpg'
import heroImg3 from '../../../public/assets/heroImg-3.jpg'

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 10000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
    <div className="overflow-hidden h-screen w-full relative" ref={emblaRef}>
      <div className="flex h-full">
        <div className="hero-img">
          <Image 
            src={heroImg1}
            alt="Sliding img 1"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="hero-img">
          <Image 
            src={heroImg2}
            alt="Sliding img 2"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="hero-img">
          <Image 
            src={heroImg3}
            alt="Sliding img 3"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
    </div>

    <div className="flex justify-center items-end">
      <button className="" onClick={scrollPrev}>
        <MoveLeft />
      </button>
      <button className="" onClick={scrollNext}>
        <MoveRight />
      </button>
    </div>
    </>
  )
}
