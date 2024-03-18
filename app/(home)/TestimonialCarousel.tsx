import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { testimonials } from './Testimonials'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

export default function TestimonialCarousel() {
  const [currIndex, setcurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center">
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
          className="text-2xl font-medium mb-12"
        >
          {`"${testimonials[currIndex].testimonial}"`}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}
          className="text-xl font-normal"
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
    </section>
  );
};