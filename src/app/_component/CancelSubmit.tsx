"use client";

import { useRouter } from "next/navigation";

export default function CancelButton() {

  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex-1 py-3 rounded-xl border-4 hover:text-primary hover:border-primary text-primary/70 border-primary/70 cursor-pointer transition-all duration-300"
    >
      Cancel
    </button>
  );
}