'use client'

import Image from 'next/image'
import { useState } from 'react'
// assets
import black1 from '../../public/assets/black-1.jpg'
import white1 from '../../public/assets/white-1.jpg'
// styles
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

export default function Products() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <div className="px-20 py-8 bg-lime-50">
      <div className="flex mb-16">
        <div className="w-1/2 flex items-center">
          <h2 className="text-4xl font-bold">Health Solutions</h2>
        </div>
        <div className="w-1/2">
          <p className="text-lg">
            In order to personalize your nutrition recommendations and health products, you{`'`}ll start with one of our Intelligence tests. Based on millions of data points analyzed from your gene expressions, your action plan will focus on the root causes of microbial imbalance and inflammation.
          </p>
        </div>
      </div>

      <div className="relative w-full p-10 group rounded products-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? white1 : black1}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded transition-opacity duration-300"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        <Image
          src={isHovered ? white1 : black1}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        <div className="absolute inset-16 flex items-center text-white">
          <div className="flex flex-col justify-between">
            <div className="mb-44 xl:mb-60">
              <span className="bg-theme-color rounded-full py-1 px-2">
                Most Popular
              </span>
              <h3 className="text-5xl font-medium tracking-wide mt-2 mb-9">
                Full Body Health Solutions
              </h3>
              <a href="#" className="inline-block transition-transform transform hover:translate-x-2">
                Get started -&gt;
              </a>
            </div>

            <div className="text-sm flex flex-col items-start">
              <p className="mb-1">Where we focus</p>
              <div className="flex flex-col items-start">
                <span className="mb-1.5"><HealthAndSafetyIcon /> Gut Microbiome</span>
                <span className="mb-1.5"><MedicationLiquidIcon /> Oral Microbiome</span>
                <span className="mb-1.5"><FitnessCenterIcon /> Cellular Function</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}