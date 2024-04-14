'use client'

import TestimonialCarousel from './components/TestimonialCarousel'

export default function Testimonial() {
  return (
    <>
    <section className="overflow-hidden w-full h-[32vh]">
      <div className="flex h-full">
        <div className="hero-slide">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
    </>
  )
}