'use client'

import { useState } from 'react'
import Image from 'next/image'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PublicIcon from '@mui/icons-material/Public'

export default function HealthScores() {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  const [isCollapsed5, setIsCollapsed5] = useState(true);
  const [isCollapsed6, setIsCollapsed6] = useState(true);

  const toggleCollapse1 = () => {
      setIsCollapsed1(!isCollapsed1);
  };

  const toggleCollapse2 = () => {
      setIsCollapsed2(!isCollapsed2);
  };

  const toggleCollapse3 = () => {
      setIsCollapsed3(!isCollapsed3);
  };

  const toggleCollapse4 = () => {
      setIsCollapsed4(!isCollapsed4);
  };

  const toggleCollapse5 = () => {
      setIsCollapsed5(!isCollapsed5);
  };

  const toggleCollapse6 = () => {
      setIsCollapsed6(!isCollapsed6);
  };

  return (
    <>
    <div className="p-20 rounded-lg shadow-lg">
      <div className="relative flex">
        <Image
            src="https://images.unsplash.com/photo-1597839219216-a773cb2473e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHwy"
            alt="Background Image"
            width={200}
            height={200}
            className="object-cover object-center w-full rounded-t-lg hs-bgImg"
        />
        <div className="absolute top-4 left-4 p-20 w-3/5">
            <h2 className="text-3xl font-medium tracking-wide text-white mb-5">
              20+ Gut Health Scores
            </h2>
            <p className="text-lg text-white">
              Your comprehensive Gut Health analysis evaluates over 20 key factors to give you a comprehensive overview of your gut health. It covers various functions, including digestion, gut lining strength, and microbial diversity, and forms the basis for your personalized recommendations to help you support your gut{`'`}s needs.
            </p>
        </div>
        <div className="absolute bottom-2 right-4 p-20 w-2/5">
          <Image
              src="https://images.unsplash.com/photo-1614587113639-67c78332bb39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRhcmslMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"
              alt="Bottom Right Image"
              width={200}
              height={200}
              className="object-cover object-center w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-4 p-16 bg-gray-900 text-slate-50">
        <div className="hs-collapsible">
          <div>
            <button onClick={toggleCollapse1}>
              <PublicIcon className="mb-0.5" /> Inflammatory Activity
            </button>
            <span onClick={toggleCollapse1} className="cursor-pointer">{isCollapsed1 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
          </div>
          {isCollapsed1 ? null : <div>
            We assess the activities that can contribute to or reflect an immune response in your gut environment caused by harmful things your microbes produce or that your microbes perceive as threatening.
          </div>}
        </div>
        <div className="hs-collapsible">
          <div>
            <button onClick={toggleCollapse2}>
              <PublicIcon className="mb-0.5" /> Gut Lining Health
            </button>
            <span onClick={toggleCollapse2} className="cursor-pointer">{isCollapsed2 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
          </div>
          {isCollapsed2 ? null : <div>
            We assess the activities that can contribute to or reflect an immune response in your gut environment caused by harmful things your microbes produce or that your microbes perceive as threatening.
          </div>}
        </div>
        <div className="hs-collapsible">
          <div>
            <button onClick={toggleCollapse3}>
              <PublicIcon className="mb-0.5" /> Metabolic Fitness
            </button>
            <span onClick={toggleCollapse3} className="cursor-pointer">{isCollapsed3 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
          </div>
          {isCollapsed3 ? null : <div>
            We assess the activities that can contribute to or reflect an immune response in your gut environment caused by harmful things your microbes produce or that your microbes perceive as threatening.
          </div>}
        </div>
        <div className="hs-collapsible">
          <div>
            <button onClick={toggleCollapse4}>
              <PublicIcon className="mb-0.5" /> Protein Fermentation
            </button>
            <span onClick={toggleCollapse4} className="cursor-pointer">{isCollapsed4 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
          </div>
          {isCollapsed4 ? null : <div>
            We assess the activities that can contribute to or reflect an immune response in your gut environment caused by harmful things your microbes produce or that your microbes perceive as threatening.
          </div>}
        </div>
        <div className="hs-collapsible">
          <div>
            <button onClick={toggleCollapse5}>
              <PublicIcon className="mb-0.5" /> Digestive Efficiency 
            </button>
            <span onClick={toggleCollapse5} className="cursor-pointer">{isCollapsed5 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
          </div>
          {isCollapsed5 ? null : <div>
            We assess the activities that can contribute to or reflect an immune response in your gut environment caused by harmful things your microbes produce or that your microbes perceive as threatening.
          </div>}
        </div>
        <div className="hs-collapsible">
          <div>
            <button onClick={toggleCollapse6}>
              <PublicIcon className="mb-0.5" /> Gas Production 
            </button>
            <span onClick={toggleCollapse6} className="cursor-pointer">{isCollapsed6 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
          </div>
          {isCollapsed6 ? null : <div>
            We assess the activities that can contribute to or reflect an immune response in your gut environment caused by harmful things your microbes produce or that your microbes perceive as threatening.
          </div>}
        </div>
      </div>
    </div>
    </>
  )
}