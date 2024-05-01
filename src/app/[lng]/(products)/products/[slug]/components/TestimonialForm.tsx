'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { addTestimonial } from '../../action'

export default function TestimonialForm() {
  const [testimonial, setTestimonial] = useState('');
  const { pending } = useFormStatus()

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
    {/* <div className="px-10 py-16 md:p-20 p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-wrap mb-6">
          <div className="w-full">
            <label htmlFor="testimonial" className="block text-gray-700 text-sm font-bold mb-2">
              Your Testimonial
            </label>
            <textarea
              className="w-full h-32 px-3 py-2 text-base placeholder-gray-500 border rounded-lg focus:outline-none focus:shadow-outline"
              id="testimonial"
              placeholder="Share your experience..."
              value={testimonial}
              onChange={e => setTestimonial(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Testimonial
          </button>
        </div>
      </form>
    </div> */}
    <form action={addTestimonial} className="w-1/2">
      <label>
        <span>Title:</span>
        <input name="title" type="text" required />
      </label>
      <label>
        <span>Body:</span>
        <textarea name="body" required />
      </label>
      <label>
        <span>Priority:</span>
        <select name="priority">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>

      <button disabled={pending} className="btn-primary">
        <span>{pending ? "Submitting..." : "Submit"}</span>
      </button>
    </form>
    </>
  )
}
