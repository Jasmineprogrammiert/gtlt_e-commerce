'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = createClient();
  const data = { // Need to validate the inputs. Same for login and password recovery
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data);
  if (error) redirect('/error');
  redirect('/');
}

export async function login(formData: FormData) {
  const supabase = createClient();
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) redirect('/error');
  redirect('/');
}

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();

  return redirect("/login");
}

export async function passwordrecovery(formData: FormData) {
  const origin = headers().get('origin');
  const email = formData.get('email') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/reset-password`,
  })

  if (error) return redirect('/password-recovery?message=An error occurred. Please try again.');
  return redirect('/password-recovery?message=Please check your inbox to reset your password.');
}