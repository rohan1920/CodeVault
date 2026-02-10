import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// Validate Firebase configuration
const requiredEnvVars = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
];

const missingVars = requiredEnvVars.filter(
  (varName) => !process.env[varName] || process.env[varName]?.includes("your-")
);

if (missingVars.length > 0 && typeof window !== "undefined") {
  console.error(
    "⚠️ Firebase Configuration Error: Missing or invalid environment variables:",
    missingVars.join(", ")
  );
  console.error(
    "Please set up your Firebase config in .env.local file. See .env.local.example for reference."
  );
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

// Validate config before initialization
const isConfigValid = Object.values(firebaseConfig).every(
  (value) => value && value.length > 0 && !value.includes("your-")
);

// Initialize Firebase
let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

try {
  if (getApps().length === 0) {
    if (!isConfigValid) {
      const errorMsg =
        "Firebase configuration is incomplete. Please check your .env.local file.";
      console.error("❌", errorMsg);
      if (typeof window !== "undefined") {
        // In browser, we'll handle gracefully
        console.error("Missing variables:", missingVars);
      }
      // IMPORTANT: Never throw here. This module is evaluated in SSR bundles too,
      // and throwing will crash the whole app with a 500.
      // We simply skip initialization; consumers must guard against undefined auth/db.
    } else {
      app = initializeApp(firebaseConfig);
    }
  } else {
    app = getApps()[0];
  }

  if (app) {
    // Initialize services only if app is initialized
    auth = getAuth(app);
    db = getFirestore(app);

    // Log for debugging in development
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      console.log("✅ Firebase initialized successfully");
      console.log("🔧 Auth Domain:", firebaseConfig.authDomain);
      console.log("🔧 Current Host:", window.location.hostname);
    }
  }
} catch (error: any) {
  const errorMessage =
    error.code === "auth/invalid-api-key" || error.message?.includes("API key")
      ? "Invalid Firebase API key. Please check your Firebase configuration in .env.local"
      : error.message || "Failed to initialize Firebase";

  console.error("❌ Firebase Initialization Error:", errorMessage);
  
  if (typeof window !== "undefined") {
    console.error("Full error:", error);
  }
  // Never throw here; avoid SSR 500. Auth UI will surface actionable errors instead.
}

// Export with type safety - AuthContext will check if these are undefined
export { auth, db };
export default app;
