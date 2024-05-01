'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
// TESTING
// import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

export async function addTestimonial(formData) {
  const testimonial = Object.fromEntries(formData);
  const supabase = createClient();
  // const supabase = createServerActionClient({ cookies });
  const { data: { session }} = await supabase.auth.getSession();

  const { error } = await supabase.from('testimonial')
    .insert({
      ...testimonial,
      user_email: session.user.email
    })

  if (error) {
    throw new Error('Could not add the new testimonial.')
  }
  revalidatePath('/products');
  redirect('/products');
}

export async function deleteTestimonial(id) {
  const supabase = createClient()
  // const supabase = createServerActionClient({ cookies });

  const { error } = await supabase.from('testimonial')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error('Could not delete the new testimonial.')
  }
  revalidatePath('/products');
  redirect('/products');
}