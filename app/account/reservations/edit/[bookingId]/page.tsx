import { updateReservation } from '@/app/_lib/actions';
import { getBooking, getCabin } from '@/app/_lib/data-service';
import { notFound } from 'next/navigation';
import SubmitButton from '@/app/_components/SubmitButton';

export default async function Page({ params }: { params: { bookingId: string } }) {
  const { bookingId } = params;
  const { num_guests, observations, cabin_id } = await getBooking(bookingId);
  console.log(num_guests, observations, cabin_id, 'num_guests, observations, cabin_id');

  const cabin = await getCabin(cabin_id);
  if (!cabin) notFound();

  const { max_capacity } = cabin;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form action={updateReservation} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <input type="hidden" name="booking_id" value={bookingId} />
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="num_guests"
            defaultValue={num_guests}
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: max_capacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton>Update reservation</SubmitButton>
        </div>
      </form>
    </div>
  );
}
