'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
// assets
import heroImg1 from '../../../../public/assets/heroImg-1.jpg'
import heroImg2 from '../../../../public/assets/heroImg-2.jpg'
import heroImg3 from '../../../../public/assets/heroImg-3.jpg'
// components
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './components/Count'
import { DotButton, useDotButton } from './components/Dot'
import Hero3 from './Hero3'

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 10000 })]);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <>
    <div className="overflow-hidden h-screen w-full relative" ref={emblaRef}>
      <div className="flex h-full">
        <div className="hero-slide">
          <Image 
            src={heroImg1}
            alt="Sliding img 1"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="hero-slide">
          <Image 
            src={heroImg2}
            alt="Sliding img 2"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="hero-slide">
          <Image 
            src={heroImg3}
            alt="Sliding img 3"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="hero-slide">
          <Hero3 />
        </div>
      </div>
    </div>

    <div className="flex justify-center hero-btn">
      <SelectedSnapDisplay
        selectedSnap={selectedSnap}
        snapCount={snapCount}
      />
      <div className="embla_dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla_dot".concat(
              index === selectedIndex ? " embla_dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
    </>
  )
}
