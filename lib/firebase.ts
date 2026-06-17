import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
const requiredFirebaseEnvVars = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
] as const;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
function hasValidFirebaseWebApiKey(apiKey: string | undefined): boolean {
  return typeof apiKey === "string" && /^AIza[A-Za-z0-9_-]{35}$/.test(apiKey);
}
if (process.env.NODE_ENV === "development") {
  const missingFirebaseEnvVars = requiredFirebaseEnvVars.filter(
    (key) => !process.env[key],
  );

  if (missingFirebaseEnvVars.length > 0) {
    console.warn(
      `[firebase] Missing required environment variables: ${missingFirebaseEnvVars.join(", ")}`,
    );
  }
}

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") {
    return null;
  }
  if (!hasValidFirebaseWebApiKey(firebaseConfig.apiKey)) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[firebase] Skipping analytics: NEXT_PUBLIC_FIREBASE_API_KEY does not appear to be a valid Firebase Web API key.",
      );
    }
    return null;
  }

  const supported = await isSupported();
  if (!supported) {
    return null;
  }

  try {
    return getAnalytics(app);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[firebase] Analytics initialization failed.", error);
    }
    return null;
  }
}
