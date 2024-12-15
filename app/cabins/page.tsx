import React, { Suspense } from 'react';
import CabinList from '../_components/CabinList';
import Filter from '../_components/Filter';
import ReservationReminder from '../_components/ReservationReminder';
import Spinner from '../_components/Spinner';
import { getCabins } from '../_lib/data-service';
import { Cabin } from '../_types/cabin';

//export const revalidate = 3600;

export const metadata = {
  title: 'Cabins',
};

type SearchParams = Record<string, string | undefined>;


export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const cabins = await getCabins();
  const filter = searchParams?.capacity ?? 'all';
  let displayedCabins: Cabin[] = [];
  if (filter === 'all') {
    displayedCabins = cabins
  }
  if (filter === 'small') {
    displayedCabins = cabins.filter(cabin=>cabin.max_capacity<=2)
  }
  if (filter === 'large') {
    displayedCabins = cabins.filter(cabin=>cabin.max_capacity>2)
  }

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">Our Luxury Cabins</h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending your days exploring the dark forests around, or just relaxing in your private hot tub under the stars. Enjoy nature&apos;s beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise.
      </p>
      <div className='flex justify-end mb-8'>
        <Filter />
      </div>
      <Suspense key={filter} fallback={<Spinner />}>
        <CabinList cabins={displayedCabins} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
