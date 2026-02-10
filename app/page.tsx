"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Lock, 
  GitBranch, 
  ArrowRight, 
  CheckCircle2,
  Github,
  Clock,
  HardDrive,
  Key,
  Eye,
  Sparkles
} from "lucide-react";
import DeviceMockup from "@/components/DeviceMockup";

export default function Home() {


  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              {/* Logo with dev-style */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <h1 className="text-2xl lg:text-3xl font-mono font-bold tracking-tight relative">
                  <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-violet-300 group-hover:to-indigo-300 transition-all duration-300">
                    {'<CodeVault />'}
                  </span>
                </h1>
              </div>
              {/* Decorative element */}
              <div className="hidden sm:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/auth"
                className="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white rounded-xl transition-all duration-300 flex items-center gap-2.5 text-sm font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 overflow-hidden"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-violet-400/20 to-indigo-400/20 opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-300" />
                {/* Button background pattern */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover/btn:opacity-[0.1] transition-opacity duration-300"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '8px 8px',
                  }}
                />
                <Github className="w-4 h-4 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 font-mono">Start with GitHub</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
      >
        {/* Animated Gradient Background - CodeVault Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d1a] via-[#0f1324] to-[#14182e]" />
        
        {/* Grid Pattern - Visible */}
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
        
        {/* Simplified Glow Layers - Purple/Indigo Theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/18 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-indigo-500/12 rounded-full blur-3xl" />
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono font-semibold text-primary tracking-wide">ENTERPRISE_GRADE</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-mono font-bold tracking-tight mb-6 text-text-primary leading-tight">
                  <span className="font-mono-heading">Secure Backups</span>
                  <br />
                  <span className="font-mono-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {'<GitHub />'}
                  </span>
                  <br />
                  <span className="font-mono-heading">Repositories</span>
                </h1>
                <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl font-sans">
                  Enterprise-grade encryption and automatic syncing to protect your code beyond GitHub. Never lose your work again.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/auth"
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-base font-semibold shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  Login with GitHub
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="px-8 py-4 bg-zinc-900/80 border-2 border-zinc-800 hover:border-primary/50 text-text-primary rounded-xl transition-all duration-200 text-base font-semibold hover:bg-zinc-900">
                  Learn More
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                {[
                  { icon: Shield, text: "End-to-end encrypted", color: "text-cyan-400" },
                  { icon: Lock, text: "SOC 2 compliant", color: "text-purple-400" },
                  { icon: Zap, text: "Automatic backups", color: "text-yellow-400" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Visuals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative"
            >
              {/* Simplified spotlight glow - Purple theme */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 blur-3xl rounded-full transform scale-150" />
              

              {/* Main 3D Device Mockup */}
              <div className="relative z-10">
                <DeviceMockup />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1324]/30 to-transparent" />
        {/* Grid Pattern - Visible */}
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
        <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-mono font-bold mb-6 text-text-primary tracking-tight">
                <span className="font-mono-heading">Why Choose </span>
                <span className="font-mono-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {'<CodeVault />'}
                </span>
                <span className="font-mono-heading">?</span>
              </h2>
              <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto font-sans">
                Enterprise-grade security meets developer-friendly automation
              </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Automatic Backups",
                devTitle: "autoBackup()",
                description: "Every push to GitHub triggers an instant backup. No manual work required. Your code is automatically synced and secured.",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: Shield,
                title: "Secure Storage",
                devTitle: "encrypt()",
                description: "Your code is encrypted and stored securely. Only you have access. Enterprise-grade encryption protects your repositories.",
                gradient: "from-purple-500 to-violet-500",
              },
              {
                icon: GitBranch,
                title: "Version History",
                devTitle: "versionHistory()",
                description: "Track every change with complete version history and easy restore. Never lose a commit or version of your code.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Clock,
                title: "Fast Restore",
                devTitle: "restore()",
                description: "Restore any project in seconds, even if GitHub is down. Quick recovery when you need it most.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Lock,
                title: "Private & Secure",
                devTitle: "secure()",
                description: "Enterprise-grade security with end-to-end encryption. Your code remains completely private and protected.",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: HardDrive,
                title: "Flexible Storage",
                devTitle: "storage()",
                description: "Backup as many repositories as you need with scalable storage. No limits on your projects.",
                gradient: "from-indigo-500 to-purple-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-sm rounded-xl border border-zinc-800/60 p-7 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden cursor-pointer"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 0 0 rgba(139, 92, 246, 0)",
                }}
              >
                {/* Animated gradient glow on hover */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-25 blur-3xl transition-opacity duration-500`} />
                
                {/* Corner accent - Purple theme */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Subtle grid pattern inside card */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />
                
                <div className="relative z-10">
                  {/* Icon with enhanced glow */}
                  <div className="mb-5">
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30 group-hover:scale-110 transition-all duration-300`}>
                      <feature.icon className="w-7 h-7 text-white relative z-10" />
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                    </div>
                  </div>
                  
                  {/* Dev-style title with enhanced styling */}
                  <div className="mb-4">
                    <h3 className="text-lg font-mono font-bold text-text-primary tracking-tight mb-2 leading-tight">
                      <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-violet-300 group-hover:to-indigo-300 transition-all duration-300">
                        {feature.devTitle}
                      </span>
                    </h3>
                    {/* Human-readable title */}
                    <p className="text-sm font-sans font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">{feature.title}</p>
                  </div>
                  
                  {/* Short preview - visible by default */}
                  <p className="text-sm text-text-muted leading-relaxed font-sans group-hover:hidden transition-all line-clamp-2">
                    {feature.description.split('.')[0]}.
                  </p>
                  
                  {/* Full description - shows on hover */}
                  <p className="text-sm text-text-secondary leading-relaxed font-sans hidden group-hover:block transition-all">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-violet-500/12 to-indigo-500/10" />
        {/* Grid Pattern - Visible */}
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
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative p-12 bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-sm rounded-3xl border border-zinc-800/60 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
            style={{
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 0 rgba(139, 92, 246, 0)",
            }}
          >
            {/* Animated gradient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 via-violet-500/25 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 rounded-full" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-violet-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 rounded-full" />
            
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-500/30 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Subtle grid pattern inside */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            />
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-mono font-bold mb-6 text-text-primary tracking-tight">
                <span className="font-mono-heading">Ready to </span>
                <span className="font-mono-heading bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-violet-300 group-hover:to-indigo-300 transition-all duration-300">
                  {'<Protect />'}
                </span>
                <br />
                <span className="font-mono-heading">Your Code?</span>
              </h2>
              <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto font-sans group-hover:text-text-primary transition-colors duration-300">
                Join thousands of developers who trust CodeVault with their code backups.
              </p>
              <Link
                href="/auth"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white rounded-xl transition-all duration-300 text-lg font-bold shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105 relative overflow-hidden group/btn"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-violet-400/20 to-indigo-400/20 opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-300" />
                <Github className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-mono font-semibold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent mb-4 md:mb-0">
              © 2026 by CodeVault
            </div>
            <div className="text-sm text-text-muted">
              All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
