'use client'

import TestimonialCarousel from './TestimonialCarousel'

export default function Testimonial() {
  return (
    <>
    <div className="overflow-hidden w-full bg-gray-100 hero testimonial">
      <div className="flex h-full">
        <div className="hero-slide">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
    </>
  )
}
