'use client'

import { createContext, ReactNode, useContext, useState } from 'react';

interface ReservationState {
  from: Date | undefined;
  to: Date | undefined;
}

interface ReservationContextProps {
  range: ReservationState;
  setRange: React.Dispatch<React.SetStateAction<ReservationState>>;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);

const initialState: ReservationState = { from: undefined, to: undefined };

interface ReservationProviderProps {
  children: ReactNode;
}

function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState<ReservationState>(initialState);
  const resetRange = () => {
    setRange(initialState);
  };

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
}

export { ReservationProvider, useReservation };