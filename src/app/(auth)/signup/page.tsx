import Image from 'next/image'
import { signup } from '../actions'
import Logo from '../../../../public/assets/logo.png'

export default function SignUp() {
  return (
    <div className="overflow-hidden h-[90vh] w-full bg-gray-50 flex">
      <div className="w-1/2">
        <Image 
          src="https://images.unsplash.com/photo-1600009723611-7473882201fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGUlMjBjb21tZXJjZXxlbnwwfDF8MHx8fDI%3D" 
          alt="Signup Image" 
          className="h-full w-full object-cover object-center"
          width={200}
          height={200}
        />
      </div>

      <div className="px-20 py-20 w-1/2 flex flex-col items-center justify-center" >
        <div className="flex space-x-2 mb-10">
          <div className="w-10">
            <Image 
              src={Logo} 
              alt="Signup Image" 
              className="object-cover object-center"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-3xl tracking-wide">GUTolution</h1>
        </div>

        <form className="mt-8 w-4/5">
          <h2 className="text-xl mb-8">Sign up for an account</h2>
          <input 
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4" 
            type="text"  
            placeholder="Username" 
            required
          />
          <input 
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4" 
            name="email"
            type="email"   
            placeholder="Email Address" 
            required
          />
          <input 
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-16" 
            type="password"
            name="password"
            placeholder="Password" 
            required
          />
          <button 
            className="w-1/3 bg-cyan-600 text-white rounded-md py-2"
            formAction={signup} 
            type="submit" 
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}