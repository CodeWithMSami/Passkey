import { Suspense } from "react";
import AuthToast from "./AuthToast";

export default function AuthToastWrapper() {
  return (
    <Suspense fallback={null}>
      <AuthToast />
    </Suspense>
  );
}