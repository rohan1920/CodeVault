"use client";

import { motion } from "framer-motion";
import { FolderGit2, GitBranch, Shield, Clock } from "lucide-react";

interface Repo {
  name: string;
  description: string;
  language: string;
  lastBackup: string;
  status: "protected" | "unprotected";
}

interface RepoCardProps {
  repo: Repo;
  index: number;
}

export default function RepoCard({ repo, index }: RepoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-sm rounded-xl border border-zinc-800/60 p-6 hover:border-purple-500/30 transition-all duration-300 group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
              <FolderGit2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-text-primary mb-1">{repo.name}</h3>
              <p className="text-sm text-text-muted font-sans">{repo.description}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
            repo.status === "protected"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
          }`}>
            {repo.status === "protected" ? "Protected" : "Unprotected"}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-text-muted">
          <div className="flex items-center gap-1.5">
            <GitBranch className="w-4 h-4" />
            <span>{repo.language}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{repo.lastBackup}</span>
          </div>
        </div>

        <button className="mt-4 w-full py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.02]">
          {repo.status === "protected" ? "Manage Backup" : "Protect Repository"}
        </button>
      </div>
    </motion.div>
  );
}
