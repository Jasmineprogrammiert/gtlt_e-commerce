'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
// components
import { SelectedSnapDisplay, useSelectedSnapDisplay } from '../components/Count'
import { DotButton, useDotButton } from '../components/Dot'
import HeroCarousel1 from './HeroCarousel1'
import HeroCarousel2 from './HeroCarousel2'
import HeroCarousel3 from './HeroCarousel3'
import HeroCarousel4 from './HeroCarousel4'

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <>
    <div className="overflow-hidden h-screen w-full bg-gray-100 hero" ref={emblaRef}>
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
          <HeroCarousel4 />
        </div>
      </div>
    </div>

    <div className="px-20 flex justify-start -translate-y-28 lg:-translate-y-14">
      <SelectedSnapDisplay
        selectedSnap={selectedSnap}
        snapCount={snapCount}
      />
      <div className="carousel-dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"carousel-dot".concat(
              index === selectedIndex ? " carousel-dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
    </>
  )
}
