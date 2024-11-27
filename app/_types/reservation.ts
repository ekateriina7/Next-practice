export interface Reservation {
  id: string;
  start_date: string;
  end_date: string;
  num_nights: number;
  total_price: number;
  num_guests: number;
  created_at: string;
  cabins: {
    name: string;
    image: string;
  };
}

export interface ReservationCardProps {
  booking: Reservation;
}
