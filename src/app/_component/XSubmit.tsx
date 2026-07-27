"use client";

import { useRouter } from "next/navigation";

export default function CloseModal() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="text-primary/70 hover:text-primary transition-all duration-300 cursor-pointer text-xl"
    >
      ✕
    </button>
  );
}