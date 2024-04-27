'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
// components
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './components/Count'
import { DotButton, useDotButton } from './components/Dot'
import HeroCarousel1 from './components/HeroCarousel1'
import HeroCarousel2 from './components/HeroCarousel2'
import HeroCarousel3 from './components/HeroCarousel3'
import HeroCarousel4 from './components/HeroCarousel4'

type PageProps = { lng: string };
export default function Hero({ lng }: PageProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 8000 })]);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <>
    <section className="overflow-hidden h-screen lg:h-[90vh] w-full bg-gray-50" ref={emblaRef}>
      <div className="flex h-full">
        <div className="hero-slide">
          <HeroCarousel1 lng={lng} />
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
    </section>
    <div className="px-10 flex justify-start -translate-y-12 lg:px-20 lg:-translate-y-14">
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
              index === selectedIndex ? " carousel-dot-selected" : ""
            )}
          />
        ))}
      </div>
    </div>
    </>
  )
}