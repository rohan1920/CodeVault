"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Github, Mail, Lock, ArrowRight, Sparkles, Shield, Zap, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const router = useRouter();
  const { signup, login, resetPassword, signInWithGoogle } = useAuth();

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        if (password.length < 6) {
          throw new Error("Password must be at least 6 characters");
        }
        await signup(email, password, displayName || undefined);
        setSuccess("Account created! Redirecting...");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await signInWithGoogle();
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (err: any) {
      // Show specific error messages
      let errorMessage = err.message || "Google sign-in failed. Please try again.";
      
      // Check for Firebase config errors
      if (
        errorMessage.includes("API key") ||
        errorMessage.includes("Firebase") ||
        errorMessage.includes(".env.local")
      ) {
        errorMessage += " See the browser console for setup instructions.";
      }
      
      setError(errorMessage);
      setLoading(false);
      
      // Log detailed error for debugging
      console.error("Google Auth Error:", err);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await resetPassword(resetEmail);
      setSuccess("Password reset email sent! Check your inbox.");
      setShowResetPassword(false);
      setResetEmail("");
    } catch (err: any) {
      setError(err.message || "Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d1a] via-[#0f1324] to-[#14182e]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Glow Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/18 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-indigo-500/12 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-mono font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              {'<CodeVault />'}
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="w-full max-w-md">
          {/* Auth Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-sm rounded-2xl border border-zinc-800/60 p-8 shadow-2xl overflow-hidden group"
          >
            {/* Card glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 rounded-full" />
            
            {/* Error/Success Messages */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </motion.div>
              )}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-2 text-sm text-green-400"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{success}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Password Reset Modal */}
            <AnimatePresence>
              {showResetPassword && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-zinc-900/95 backdrop-blur-sm rounded-2xl z-50 flex items-center justify-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="w-full max-w-sm"
                  >
                    <h3 className="text-xl font-mono font-bold text-text-primary mb-2">Reset Password</h3>
                    <p className="text-sm text-text-muted mb-4">Enter your email to receive a password reset link.</p>
                    <form onSubmit={handlePasswordReset} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <input
                            type="email"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full pl-11 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setShowResetPassword(false);
                            setResetEmail("");
                            setError("");
                          }}
                          className="flex-1 py-3 bg-zinc-800/50 border border-zinc-700/50 text-text-primary rounded-xl font-semibold transition-all hover:bg-zinc-800/70"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? "Sending..." : "Send Reset Link"}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 bg-zinc-800/50 p-1 rounded-xl">
              <button
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                  setSuccess("");
                }}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 relative ${
                  isLogin
                    ? "text-white"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {isLogin && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Login</span>
              </button>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                  setSuccess("");
                }}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 relative ${
                  !isLogin
                    ? "text-white"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {!isLogin && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Sign Up</span>
              </button>
            </div>

            {/* Form */}
            <AnimatePresence mode="wait">
              <motion.form
                key={isLogin ? "login" : "signup"}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleEmailAuth}
                className="space-y-6"
              >
                {/* Display Name (Signup only) */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-text-secondary">
                      Password
                    </label>
                    {isLogin && (
                      <button
                        type="button"
                        onClick={() => setShowResetPassword(true)}
                        className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Forgot?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      required
                      minLength={isLogin ? undefined : 6}
                    />
                  </div>
                  {!isLogin && (
                    <p className="mt-1 text-xs text-text-muted">Must be at least 6 characters</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-violet-400/20 to-indigo-400/20 opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-300" />
                  <span className="relative z-10">
                    {loading ? "Processing..." : isLogin ? "Login" : "Create Account"}
                  </span>
                  {!loading && (
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  )}
                </motion.button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zinc-800/60" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-zinc-900/95 text-text-muted">Or continue with</span>
                  </div>
                </div>

                {/* Google OAuth */}
                <motion.button
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full py-3.5 bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-500/50 text-text-primary rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-zinc-800/70 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </motion.button>
              </motion.form>
            </AnimatePresence>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-zinc-800/60">
              <div className="flex items-center justify-center gap-6 text-xs text-text-muted">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-violet-400" />
                  <span>Fast</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Reliable</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-center text-sm text-text-muted"
          >
            By continuing, you agree to CodeVault&apos;s{" "}
            <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Privacy Policy
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
