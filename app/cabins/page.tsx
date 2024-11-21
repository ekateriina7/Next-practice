import React from 'react'
import UsersCount from '../components/UsersCount';

export default async function page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json()
  console.log(data)
  return (
    <div>cabins
      <UsersCount users={data}/>
    </div>
  )
}
