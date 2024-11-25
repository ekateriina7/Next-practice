import { getCabins } from '../_lib/data-service';
import CabinCard from './CabinCard';
import { Cabin } from '../_types/cabin';

export default async function CabinList() {
  const cabins: Cabin[] = await getCabins();

  if (!cabins.length) return <p>No cabins available.</p>;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}