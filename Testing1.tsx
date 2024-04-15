import Image from 'next/image'
import Link from 'next/link'
import { resetpassword } from '../actions'
import Logo from '../../../public/assets/logo.png'

import { headers } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function PasswordRecovery({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect('/');
  }

  const confirmReset = async (formData: FormData) => {
    'use server';
  
    const origin = headers().get('origin');
    const email = formData.get('email') as string;
    const supabase = createClient();
  
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/reset-password`,
    });
  
    if (error) {
      return redirect('/password-recovery?message=Could not authenticate user');
    }
  
    return redirect(
      '/password-recovery?message=Password Reset link has been sent to your email address'
    )
  }

  return (
    <>
    <div className="overflow-hidden h-[90vh] w-full bg-gray-50 flex">
      <div className="w-1/2">
        <Image 
          src="https://images.unsplash.com/photo-1600009723611-7473882201fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGUlMjBjb21tZXJjZXxlbnwwfDF8MHx8fDI%3D" 
          alt="Login Image" 
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
              alt="Login Image" 
              className="object-cover object-center"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-3xl tracking-wide">GUTolution</h1>
        </div>

        <form className="mt-8 w-4/5 relative">
          <h2 className="text-xl mb-8">Send password reset request</h2>
          <input 
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4" 
            name="email"
            type="email" 
            placeholder="Email Address" 
            required 
          />
          <button 
            className="w-1/3 bg-cyan-600 text-white rounded-md py-2 mt-10 mb-4"
            // formAction={confirmReset} 
            formAction={resetpassword} 
            type="submit" 
          >
            Send
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>      
      </div>
    </div>
    </>
  )
}
