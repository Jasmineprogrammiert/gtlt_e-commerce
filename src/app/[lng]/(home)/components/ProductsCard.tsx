'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// styles
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

export default function ProductsCard({ p }: { p: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-[73vh] lg:h-[78vh] xl:h-[80vh] p-10 group rounded mb-10 lg:mb-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? p.imgAft : p.imgOrg}
        alt="Background Image"
        fill
        priority
        className="object-cover object-center rounded transition-opacity duration-300"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      <Image
        src={isHovered ? p.imgAft : p.imgOrg}
        alt="Background Image"
        fill
        priority
        className="object-cover object-center rounded transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      <div className="absolute inset-8 lg:inset-16 flex items-center text-white group-hover:text-slate-950">
        <div className="flex flex-col justify-between">
          {/* ----- Upper Text Group ----- */}
          <div className="mb-40 lg:mb-44 xl:mb-60">
            {p.label && (
              <span className="bg-theme-color group-hover:bg-theme-color-darker rounded-full py-1.5 px-2.5 bg-cyan-900 group-hover:bg-cyan-400">
                {p.label}
              </span>
            )}
            <h3 className="text-3xl lg:text-5xl font-medium tracking-wide mt-4 mb-9">
              {p.title}
            </h3>
            <Link href={p.link} className="inline-block transition-transform transform hover:translate-x-2">
              Get started -&gt;
            </Link>
          </div>
          {/* ----- Bottom Text Group ----- */}
          <div className="text-sm flex flex-col items-start">
            <p className="mb-1">Where we focus</p>
            <div className="flex flex-col items-start">
              {p.focus1 && (  
                <span className="mb-1.5">
                  <HealthAndSafetyIcon /> {p.focus1}
                </span>
              )}
              {p.focus2 && ( 
                <span className="mb-1.5">
                  <MedicationLiquidIcon /> {p.focus2}
                </span>
              )}
              {p.focus3 && ( 
                <span className="mb-1.5">
                  <FitnessCenterIcon /> {p.focus3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}