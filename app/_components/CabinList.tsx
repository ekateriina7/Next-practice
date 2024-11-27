import React from 'react';
import { Cabin } from '../_types/cabin';
import CabinCard from './CabinCard';

export default function CabinList({ cabins }: { cabins: Cabin[] }) {
  if (!cabins.length) {
    return <p>No cabins available.</p>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}
