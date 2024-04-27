import { useState, useEffect } from 'react'
import { testimonials } from '../Data/TestimonialData'
// styles
import { Neuton } from 'next/font/google'
import { La_Belle_Aurore } from 'next/font/google'
import { motion } from 'framer-motion'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const neuton = Neuton({ subsets: ['latin'], display: 'swap', variable: '--font-neuton', weight: '300' });
const laBelleAurore = La_Belle_Aurore({ subsets: ['latin'], display: 'swap', weight: '400' });

export default function TestimonialCarousel() {
  const [currIndex, setcurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center">
      <IconButton
        onClick={() =>
          setcurrIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length)
        }
        aria-label="Previous"
        style={{ position: 'absolute', left: 20 }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <div className="flex flex-col justify-between items-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}
          className={`text-xl mb-4 lg:text-2xl lg:mb-8 text-center tracking-wide leading-relaxed ${neuton.className}`}
        >
          {`"${testimonials[currIndex].testimonial}"`}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}
          className={`text-xl lg:text-2xl text-center tracking-widest ${laBelleAurore.className}`}
        >
          {testimonials[currIndex].name}
        </motion.p>
      </div>
      <IconButton
        onClick={() =>
          setcurrIndex(prevIndex => (prevIndex + 1) % testimonials.length)
        }
        aria-label="Next"
        style={{ position: 'absolute', right: 20 }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  )
}