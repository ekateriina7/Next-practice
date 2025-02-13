"use client";
import React, { ReactNode, } from "react";
import { Guest } from "../_types/guest";
import { updateProfile } from "../_lib/actions";
import { useFormStatus } from 'react-dom';
import SubmitButton from './SubmitButton';
import Image from 'next/image';

type UpdateProfileFormProps = {
  guest: Guest;
  children?: ReactNode;
};

export default function UpdateProfileForm({ children, guest }: UpdateProfileFormProps) {
  const { full_name, email, national_id, country_flag } = guest;

  return (
    <form action={updateProfile} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
      <div className="space-y-2">
        <label>Full name</label>
        <input
          name="fullName"
          defaultValue={full_name}
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm 
            disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          name="email"
          defaultValue={email}
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {country_flag && (
            <Image
              src={country_flag}
              alt="Country flag"
              width={40}
              height={40}
              className="rounded-sm"
            />
          )}
        </div>{children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={national_id}
          name="national_id"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton>Update profile</SubmitButton>
      </div>
    </form>
  );
}
