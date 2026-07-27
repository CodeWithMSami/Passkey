"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

function AuthToastContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const error = searchParams.get("error");
    const success = searchParams.get("success");

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
    }

    if (error || success) {
      const timer = setTimeout(() => {
        router.replace(window.location.pathname);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  return null;
}

export default AuthToastContent;