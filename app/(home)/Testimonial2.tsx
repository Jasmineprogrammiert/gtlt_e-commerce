'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { testimonials } from './Testimonial2Data'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


export default function Testimonial2() {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    const totalSlides = testimonials.length;
    if (currIndex + 3 < totalSlides) {
      setCurrIndex(currIndex + 3);
    } else {
      setCurrIndex(0); 
    }
  };
  
  const prevSlide = () => {
    const totalSlides = testimonials.length;
    if (currIndex - 3 >= 0) {
      setCurrIndex(currIndex - 3);
    } else {
      setCurrIndex(totalSlides - (totalSlides % 3)); // Loop to the last group of slides
    }
  };
  
  return (
    <section className="px-20 py-20 relative">
      <h2 className="home-h2">What our customers say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {testimonials.slice(currIndex, currIndex + 3).map((t, i) => (
          <div key={i} className="bg-slate-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <p className="mb-4">{t.rating}</p>
            <p className="h-64 overflow-y-auto">{`"${t.testimonial}"`}</p>
            <p className="mt-8 mb-4 text-gray-800">{t.keywords}</p>
            <Image
              src={t.profilePic}
              alt="User profile image"
              className="w-20 h-20 rounded-full object-cover"
              priority
              width={800}
              height={800}
            />
            <p className="text-lg font-medium my-1">{t.name}</p>
            <p className="text-gray-700">{t.position}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:justify-end">
        <button onClick={prevSlide} className="bg-slate-100 text-gray-700 px-4 py-2 rounded-full mr-4">
          <ArrowBackIcon />
        </button>
        <button onClick={nextSlide} className="bg-slate-100 text-gray-700 px-4 py-2 rounded-full">
          <ArrowForwardIcon />
        </button>
      </div>
    </section>
  )
}