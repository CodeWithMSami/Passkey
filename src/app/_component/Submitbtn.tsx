'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 rounded-xl bg-primary text-secondary font-semibold"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}