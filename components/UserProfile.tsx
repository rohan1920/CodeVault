"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { User, Mail, Edit2, Save, X, LogOut } from "lucide-react";

export default function UserProfile() {
  const { currentUser, logout, updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(currentUser?.displayName || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setLoading(true);
    setError("");
    try {
      await updateUserProfile({ displayName });
      setIsEditing(false);
    } catch (err: any) {
      setError(err.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err: any) {
      setError(err.message || "Failed to logout");
    }
  };

  if (!currentUser) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-sm rounded-xl border border-zinc-800/60 p-6"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
          {currentUser.photoURL ? (
            <Image src={currentUser.photoURL} alt="Profile" width={64} height={64} className="w-16 h-16 rounded-full" />
          ) : (
            <User className="w-8 h-8 text-white" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-mono font-bold text-text-primary mb-1">
            {currentUser.displayName || "User"}
          </h3>
          <p className="text-sm text-text-muted flex items-center gap-2">
            <Mail className="w-4 h-4" />
            {currentUser.email}
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Display Name
          </label>
          {isEditing ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="flex-1 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-text-primary focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                placeholder="Enter your name"
              />
              <button
                onClick={handleSave}
                disabled={loading}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-lg transition-all disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setDisplayName(currentUser?.displayName || "");
                }}
                className="px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 text-text-primary rounded-lg hover:bg-zinc-800/70 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
              <span className="text-text-primary">{displayName || "Not set"}</span>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 hover:bg-zinc-700/50 rounded-lg transition-colors"
              >
                <Edit2 className="w-4 h-4 text-text-muted" />
              </button>
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-3 bg-zinc-800/50 border border-zinc-700/50 hover:border-red-500/50 text-red-400 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 hover:bg-zinc-800/70"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </motion.div>
  );
}
