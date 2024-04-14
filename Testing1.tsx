'use client'

import { useState } from 'react'

export default function QtySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleQtySelector = (e: { target: { value: string; }; }) => {
    let value = parseInt(e.target.value);
    if (value > 50) value = 50;
    setQuantity(value);
  }

  return (
    <>
    <div className="flex items-center mb-5">
      <label htmlFor="quantity" className="mr-2">
        Quantity:
      </label>
      <input
        type="number"
        value={quantity}
        onChange={handleQtySelector}
        className="w-14 p-2 border border-gray-300 rounded"
        max={50}
      />
    </div>
    </>
  )
}