"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  gradient: string;
  index: number;
}

export default function StatCard({ icon: Icon, label, value, gradient, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-sm rounded-xl border border-zinc-800/60 p-6 hover:border-purple-500/30 transition-all duration-300 group overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <p className="text-2xl font-mono font-bold text-text-primary mb-1">{value}</p>
        <p className="text-sm text-text-muted font-sans">{label}</p>
      </div>
    </motion.div>
  );
}
