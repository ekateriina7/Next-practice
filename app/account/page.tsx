import React from 'react'
import { auth } from '../_lib/auth'

export const metadata = {
  title: 'Guest area'
}

export default async function Page() {
  const session = await auth();
  console.log(session, 'here')
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {session?.user?.name?.split(' ').at(0)}!
      </h2>
  )
}
