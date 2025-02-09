'use server';

import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import type { Guest } from '@/app/_types/guest';
import type { User } from 'next-auth';

type UserWithGuestId = User & { guest_id: string };

export async function updateProfile(formData: FormData): Promise<void> {
  const session = await auth();
  if (!session?.user) {
    throw new Error('Unauthorized');
  }
  const [nationality, country_flag] = formData.get('nationality')?.toString().split('%') ?? [];
  const national_id = formData.get('national_id')?.toString();
  if (national_id && !/^\d{6}$/.test(national_id)) {
    throw new Error('National ID must be 6 digits');
  }
  const guest: Partial<Guest> = { nationality, country_flag, national_id };

  const { error } = await supabase
    .from('guests')
    .update(guest)
    .eq('id', (session.user as UserWithGuestId).guest_id ?? session.user.id)

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }
}

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}