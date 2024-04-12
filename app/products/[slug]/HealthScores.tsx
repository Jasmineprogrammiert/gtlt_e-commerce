'use client'

import { useState } from 'react'
import Image from 'next/image'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

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
    <div className="px-20 py-20 rounded-lg shadow-lg">
      <div className="relative">
        <Image
            src="https://images.unsplash.com/photo-1597839219216-a773cb2473e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHwy"
            alt="Background Image"
            width={200}
            height={200}
            className="object-cover object-center w-full rounded-t-lg hs-bgImg"
        />
        <div className="absolute top-4 left-4 p-10">
            <h1 className="text-2xl font-bold text-white">Your Text</h1>
        </div>
        <div className="absolute bottom-3 right-4 p-10">
          <Image
              src="https://images.unsplash.com/photo-1614587113639-67c78332bb39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRhcmslMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"
              alt="Bottom Right Image"
              width={200}
              height={200}
              className="object-cover object-center w-full h-full"
          />
        </div>
      </div>


      <div className="grid grid-cols-2 gap-10 p-10 bg-gray-900 text-slate-50">
        <div className="p-4">
          <div className="flex justify-between items-center">
              <button onClick={toggleCollapse1} className="w-full text-left font-semibold">Collapsible 1</button>
              <span onClick={toggleCollapse1} className="cursor-pointer">{isCollapsed1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</span>
          </div>
          {isCollapsed1 ? null : <div>Collapsible 1 Content</div>}
        </div>


        {/* <div className="p-4">
            <button onClick={toggleCollapse1} className="w-full text-left font-semibold">Collapsible 1</button>
            {isCollapsed1 ? null : <div>Collapsible 1 Content</div>}
        </div> */}
        <div className="p-4">
            <button onClick={toggleCollapse2} className="w-full text-left font-semibold">Collapsible 2</button>
            {isCollapsed2 ? null : <div>Collapsible 2 Content</div>}
        </div>
        <div className="p-4">
            <button onClick={toggleCollapse3} className="w-full text-left font-semibold">Collapsible 3</button>
            {isCollapsed3 ? null : <div>Collapsible 3 Content</div>}
        </div>
        <div className="p-4">
            <button onClick={toggleCollapse4} className="w-full text-left font-semibold">Collapsible 4</button>
            {isCollapsed4 ? null : <div>Collapsible 4 Content</div>}
        </div>
        <div className="p-4">
            <button onClick={toggleCollapse5} className="w-full text-left font-semibold">Collapsible 5</button>
            {isCollapsed5 ? null : <div>Collapsible 5 Content</div>}
        </div>
        <div className="p-4">
            <button onClick={toggleCollapse6} className="w-full text-left font-semibold">Collapsible 6</button>
            {isCollapsed6 ? null : <div>Collapsible 6 Content</div>}
        </div>
      </div>



    </div>
    </>
  )
}
