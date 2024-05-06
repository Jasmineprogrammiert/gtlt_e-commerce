'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Logo from '../../../../../public/assets/logo.png'

export default function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent, email: string) => {
    e.preventDefault();

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if(error) setError(error.message);
  }

  return (
    <>
    <div className="overflow-hidden h-[90vh] w-full bg-gray-50 flex">
      <div className="md:w-1/2 max-md:hidden">
        <Image 
          src="https://images.unsplash.com/photo-1600009723611-7473882201fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGUlMjBjb21tZXJjZXxlbnwwfDF8MHx8fDI%3D"
          alt="Login Image" 
          className="h-full w-full object-cover object-center"
          width={200}
          height={200}
        />
      </div>
      <div className="px-5 py-8 md:p-20 md:w-1/2 flex flex-col items-center justify-center">
        <div className="flex space-x-2 mb-3 md:mb-10">
          <div className="w-10">
            <Image 
              src={Logo} 
              alt="Login Image" 
              className="object-cover object-center"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-3xl tracking-wide">GUTolution</h1>
        </div>   
        <form className="mt-8 max-md:ml-[20%] max-md:w-full w-4/5 relative" onSubmit={e => handleSubmit(e, email)}>
          <h2 className="text-xl mb-2">Send one-time login request</h2>
          <p className="text-sm mb-6 text-gray-600">Please check your inbox to login. If you haven{`'`}t received the email withint a few minutes, please check your spam folder.</p>
          {/* <h2 className="text-xl mb-2">Send password reset request</h2> */}
          {/* <p className="text-sm mb-6 text-gray-600">Please check your inbox to reset your password. If you haven{`'`}t received the email withint a few minutes, please check your spam folder.</p> */}
          <input 
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4" 
            type="email" 
            placeholder="Email Address" 
            required 
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <button 
            className="w-1/3 bg-cyan-600 text-white rounded-md py-2 mt-10 mb-4"
            type="submit" 
          >
            Send
          </button>
        </form>   
        {error && (
          <div>{error}</div>
        )} 
      </div>
    </div>
    </>
  )
}