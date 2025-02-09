'use server';

import { signIn, signOut } from './auth';

export async function updateProfile() {
  console.log("UpdateProfile");
}

export async function signInAction() {
  await signIn('google', {redirectTo: '/account'})
}

export async function signOutAction() {
  await signOut({redirectTo: '/'})
}