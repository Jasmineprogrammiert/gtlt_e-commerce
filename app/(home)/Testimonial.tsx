'use client'

import TestimonialCarousel from './TestimonialCarousel'

export default function Testimonial() {
  return (
    <>
    <section className="overflow-hidden w-full testimonial">
      <div className="flex h-full">
        <div className="hero-slide">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
    </>
  )
}