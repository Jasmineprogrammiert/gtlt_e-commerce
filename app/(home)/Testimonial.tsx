'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
// assets
import heroImg1 from '../../public/assets/heroImg-1.jpg'
import heroImg2 from '../../public/assets/heroImg-2.jpg'
import heroImg3 from '../../public/assets/heroImg-3.jpg'
// components
import { SelectedSnapDisplay, useSelectedSnapDisplay } from '../components/Count'
import { DotButton, useDotButton } from '../components/Dot'
import HeroCarousel1 from './HeroCarousel1'
import HeroCarousel2 from './HeroCarousel2'
import HeroCarousel3 from './HeroCarousel3'

export default function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1000000 })]);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <>
    <div className="overflow-hidden h-40 w-full relative" ref={emblaRef}>
      <div className="flex h-full">
        <div className="hero-slide">
          <HeroCarousel1 />
        </div>
        <div className="hero-slide">
          <HeroCarousel2 />
        </div>
        <div className="hero-slide">
          <HeroCarousel3 />
        </div>
        <div className="hero-slide">
          <Image 
            src={heroImg1}
            alt="Sliding img 1"
            quality={100}
            placeholder="blur"
          />
        </div>
        {/* <div className="hero-slide">
          <Image 
            src={heroImg2}
            alt="Sliding img 2"
            quality={100}
            placeholder="blur"
          />
        </div> */}
        {/* <div className="hero-slide">
          <Image 
            src={heroImg3}
            alt="Sliding img 3"
            quality={100}
            placeholder="blur"
          />
        </div> */}
      </div>
    </div>

    <div className="flex justify-center carousel-btn">
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
