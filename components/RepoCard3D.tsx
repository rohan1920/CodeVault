"use client";

import { motion } from "framer-motion";
import { GitBranch, Shield, Star, Clock, Download, CheckCircle2 } from "lucide-react";

interface RepoCard3DProps {
  name: string;
  language: string;
  langColor: string;
  stars: number;
  lastBackup: string;
  isProtected: boolean;
  delay?: number;
}

export default function RepoCard3D({ 
  name, 
  language, 
  langColor,
  stars, 
  lastBackup, 
  isProtected,
  delay = 0 
}: RepoCard3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative transform-3d"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        whileHover={{ y: -8, rotateY: 3, scale: 1.02 }}
        className="relative bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-xl rounded-xl border border-zinc-800/50 p-5 hover:border-primary/50 transition-all shadow-2xl overflow-hidden group"
        style={{
          boxShadow: `
            0 0 0 1px rgba(59, 130, 246, 0.15),
            0 10px 40px rgba(0, 0, 0, 0.6),
            0 0 80px rgba(59, 130, 246, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Animated Glow Effect */}
        <motion.div 
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${langColor} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity`}
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Static glow on hover */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${langColor} opacity-0 group-hover:opacity-25 blur-3xl transition-opacity duration-300`} />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/20 flex-shrink-0">
                <GitBranch className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-base font-bold text-text-primary truncate">{name}</h4>
                  {isProtected && (
                    <span className="px-2 py-1 bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-lg text-xs font-semibold text-secondary flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Protected
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <span className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${langColor} shadow-lg`} />
                    {language}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {stars}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-zinc-800/50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Clock className="w-4 h-4" />
              <span>{lastBackup}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <button className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-xs font-semibold text-white hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-1">
                <Download className="w-3 h-3" />
                Restore
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
