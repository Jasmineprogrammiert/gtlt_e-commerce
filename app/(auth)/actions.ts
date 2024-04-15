'use server'

import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data);
  if (error) redirect('/error');

  revalidatePath('/', 'layout');
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

  revalidatePath('/', 'layout');
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

export async function resetpassword(formData: FormData) {
  const password = formData.get('password') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.updateUser({ password });

  if (error) return redirect('/reset-password?message=An error occurred. Please try again.');

  return redirect('/password-recovery?message=Cheers! Your password has been reset successfully.');
}