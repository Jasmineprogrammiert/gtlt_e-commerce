'use client'

import TestimonialCarousel from './TestimonialCarousel'

export default function Testimonial() {
  return (
    <>
    <div className="overflow-hidden w-full bg-amber-50 testimonial">
      <div className="flex h-full">
        <div className="hero-slide">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
    </>
  )
}