'use client';
import React from 'react';

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type UsersCountProps = {
  users: User[];
};

export default function UsersCount({ users }: UsersCountProps) {
  return <div>UsersCount {users.length}</div>;
}
