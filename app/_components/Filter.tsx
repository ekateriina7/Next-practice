'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { FC } from 'react';

type ButtonProps = {
  filter: string;
  onClick: () => void;
  children: React.ReactNode;
};

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  const activeFilter = searchParams.get('capacity') ?? 'all';
  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    router.replace(`${path}?${params.toString()}`, { scroll: false });
  };

  const Button: FC<ButtonProps> = ({ filter, onClick, children }) => {
    const isActive = activeFilter === filter;
    return (
      <button
        onClick={onClick}
        className={`px-5 py-2 hover:bg-primary-700 ${
          isActive ? 'bg-primary-800 text-white' : ''
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="border border-primary-800 flex">
      <Button filter="all" onClick={() => handleFilter('all')}>
        All cabins
      </Button>
      <Button filter="small" onClick={() => handleFilter('small')}>
        Up to 2 guests
      </Button>
      <Button filter="large" onClick={() => handleFilter('large')}>
        More than 2 guests
      </Button>
    </div>
  );
}
