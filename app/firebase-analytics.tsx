"use client";

import { useEffect } from "react";
import { getFirebaseAnalytics } from "@/src/lib/firebase";

export default function FirebaseAnalytics() {
  useEffect(() => {
    void getFirebaseAnalytics().catch((error) => {
      if (process.env.NODE_ENV === "development") {
        console.warn("[firebase] Analytics setup skipped due to runtime error.", error);
      }
    });
  }, []);

  return null;
}
