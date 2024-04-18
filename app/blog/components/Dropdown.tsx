'use client'

import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function Dropdown () {
  const [selectedOption, setSelectedOption] = useState('Category');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  }

  return (
    <>
    <div className="relative w-[50%] text-gray-700 flex items-center text-lg">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="w-full appearance-none border-b border-gray-400 px-4 py-3 bg-transparent leading-tight cursor-pointer focus:outline-none"
      >
        <option disabled value="Category">Category</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <KeyboardArrowDownIcon className="absolute right-0 mr-3" />
    </div>
    </>
  )
}