'use client';

import { useFormStatus } from 'react-dom';
import MiniSpinner from './MiniSpinner';

interface SubmitButtonProps {
  children: React.ReactNode;
}

function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-accent-500 px-8 h-[56px] text-primary-800 font-semibold 
        hover:bg-accent-600 transition-all disabled:cursor-not-allowed 
        disabled:bg-gray-500 disabled:text-gray-300 w-[200px] 
        flex justify-center items-center gap-2"
    >
      {pending ? (
        <div className="h-5 flex items-center">
          <MiniSpinner />
        </div>
      ) : children}
    </button>
  );
}

export default SubmitButton; 