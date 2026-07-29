"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function AuthToastContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const error = searchParams.get("error");
    const success = searchParams.get("success");

    if (error) toast.error(error);
    if (success) toast.success(success);

    if (error || success) {
      const timer = setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, router, pathname]);

  return null;
}