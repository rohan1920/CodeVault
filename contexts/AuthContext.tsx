"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (email: string, password: string, displayName?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  updateUserProfile: (data: { displayName?: string; photoURL?: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string, displayName?: string) {
    if (!auth) {
      throw new Error(
        "Firebase Authentication is not initialized. Please check your .env.local file."
      );
    }
    if (!db) {
      throw new Error("Firebase Firestore is not initialized. Please check your Firebase configuration.");
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile with display name
    if (displayName) {
      await updateProfile(userCredential.user, { displayName });
    }

    // Create user document in Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      uid: userCredential.user.uid, // Include uid in document data
      email: userCredential.user.email || "",
      displayName: displayName || userCredential.user.displayName || userCredential.user.email?.split("@")[0] || "",
      photoURL: userCredential.user.photoURL || "",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }

  async function login(email: string, password: string) {
    if (!auth) {
      throw new Error(
        "Firebase Authentication is not initialized. Please check your .env.local file."
      );
    }
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    if (!auth) {
      throw new Error(
        "Firebase Authentication is not initialized. Please check your .env.local file."
      );
    }
    await signOut(auth);
  }

  async function resetPassword(email: string) {
    if (!auth) {
      throw new Error(
        "Firebase Authentication is not initialized. Please check your .env.local file."
      );
    }
    await sendPasswordResetEmail(auth, email);
  }

  async function signInWithGoogle() {
    try {
      // Validate Firebase is initialized
      if (!auth) {
        throw new Error(
          "Firebase Authentication is not initialized. Please check your .env.local file and ensure all Firebase environment variables (especially NEXT_PUBLIC_FIREBASE_API_KEY) are set correctly."
        );
      }
      
      if (!db) {
        throw new Error(
          "Firebase Firestore is not initialized. Please check your Firebase configuration."
        );
      }

      const provider = new GoogleAuthProvider();
      
      // Add additional scopes if needed
      provider.addScope("profile");
      provider.addScope("email");
      
      // Set custom parameters
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      
      // Create or update user document in Firestore
      const userDocRef = doc(db, "users", result.user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        // New user - create document with all required fields
        await setDoc(userDocRef, {
          uid: result.user.uid, // Include uid in document data
          email: result.user.email || "",
          displayName: result.user.displayName || result.user.email?.split("@")[0] || "",
          photoURL: result.user.photoURL || "",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      } else {
        // Existing user - update last login time
        await setDoc(
          userDocRef,
          {
            updatedAt: serverTimestamp(),
            // Update display name and photo if they changed
            displayName: result.user.displayName || userDoc.data()?.displayName || "",
            photoURL: result.user.photoURL || userDoc.data()?.photoURL || "",
          },
          { merge: true }
        );
      }
    } catch (error: any) {
      // Handle specific Firebase errors
      let errorMessage = "Google sign-in failed. Please try again.";

      if (error.code === "auth/invalid-api-key") {
        errorMessage =
          "Invalid Firebase API key. Please check your Firebase configuration. Make sure your .env.local file has the correct NEXT_PUBLIC_FIREBASE_API_KEY.";
      } else if (error.code === "auth/unauthorized-domain") {
        errorMessage =
          "This domain is not authorized for Firebase Authentication. Please add your domain (localhost or production) to Firebase Console > Authentication > Settings > Authorized domains.";
      } else if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "Sign-in popup was closed. Please try again.";
      } else if (error.code === "auth/popup-blocked") {
        errorMessage =
          "Popup was blocked by your browser. Please allow popups for this site and try again.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Network error. Please check your internet connection and try again.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      console.error("Google Sign-In Error:", error);
      throw new Error(errorMessage);
    }
  }

  async function updateUserProfile(data: { displayName?: string; photoURL?: string }) {
    if (!currentUser) throw new Error("No user logged in");
    if (!db) {
      throw new Error("Firebase Firestore is not initialized. Please check your Firebase configuration.");
    }
    
    await updateProfile(currentUser, data);
    
    // Update Firestore
    await setDoc(
      doc(db, "users", currentUser.uid),
      {
        ...data,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  }

  useEffect(() => {
    // Check if auth is initialized before setting up listener
    if (!auth) {
      console.error(
        "⚠️ Firebase Auth is not initialized. Please check your .env.local file and ensure all Firebase environment variables are set correctly."
      );
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    signInWithGoogle,
    updateUserProfile,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
