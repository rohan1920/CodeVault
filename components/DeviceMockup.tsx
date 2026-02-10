"use client";

import { motion } from "framer-motion";
import { FolderGit2, HardDrive, Shield, TrendingUp, GitBranch, CheckCircle2, Clock, Download } from "lucide-react";

export default function DeviceMockup() {
  return (
    <div className="relative w-full max-w-4xl mx-auto perspective-1000">
      {/* 3D Device Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {/* Device Screen with Glow */}
        <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-2xl border-2 border-zinc-800/50 shadow-2xl overflow-hidden"
          style={{
            boxShadow: `
              0 0 0 1px rgba(59, 130, 246, 0.1),
              0 20px 60px rgba(0, 0, 0, 0.8),
              0 0 100px rgba(59, 130, 246, 0.1),
              inset 0 0 60px rgba(59, 130, 246, 0.05)
            `,
          }}
        >
          {/* Screen Header */}
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border-b border-zinc-800/50 px-6 py-4 flex items-center justify-between backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-bold text-sm">CV</span>
              </div>
              <div>
                <span className="text-sm font-mono font-semibold text-text-primary block tracking-wide">CodeVault</span>
                <span className="text-xs font-mono text-text-muted">Dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-lg shadow-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-lg shadow-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-lg shadow-green-500/50" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="p-6 space-y-6 bg-gradient-to-b from-zinc-950 to-black min-h-[600px]">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: FolderGit2, label: "Repos", value: "24", change: "+3", color: "from-blue-500 to-blue-600" },
                { icon: HardDrive, label: "Backups", value: "18", change: "+2", color: "from-purple-500 to-purple-600" },
                { icon: Shield, label: "Protected", value: "18", color: "from-cyan-500 to-cyan-600" },
                { icon: TrendingUp, label: "Storage", value: "2.4 GB", color: "from-indigo-500 to-indigo-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-xl border border-zinc-800/50 p-4 backdrop-blur-sm hover:border-primary/30 transition-all group overflow-hidden"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl`} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-secondary">{stat.change}</span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-text-muted font-sans">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Repository Cards */}
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-mono font-bold text-text-primary tracking-tight">Repositories</h3>
                <span className="text-sm text-text-muted font-sans">View all →</span>
              </div>
              
              {[
                { 
                  name: "my-awesome-app", 
                  lang: "TypeScript", 
                  langColor: "bg-blue-500",
                  status: "protected",
                  lastBackup: "2h ago",
                  stars: 142,
                  commits: "1.2k"
                },
                { 
                  name: "portfolio-website", 
                  lang: "React", 
                  langColor: "bg-cyan-500",
                  status: "protected",
                  lastBackup: "5h ago",
                  stars: 89,
                  commits: "856"
                },
                { 
                  name: "api-server", 
                  lang: "Node.js", 
                  langColor: "bg-green-500",
                  status: "syncing",
                  lastBackup: "1d ago",
                  stars: 67,
                  commits: "432"
                },
              ].map((repo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-xl border border-zinc-800/50 p-5 hover:border-primary/30 transition-all group overflow-hidden"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-primary/20">
                          <GitBranch className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-base font-mono font-bold text-text-primary tracking-tight">{repo.name}</h4>
                            {repo.status === "protected" ? (
                              <span className="px-2 py-1 bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-md text-xs font-medium text-secondary">
                                <Shield className="w-3 h-3 inline mr-1" />
                                Protected
                              </span>
                            ) : (
                              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 border border-yellow-500/30 rounded-md text-xs font-medium text-yellow-400">
                                Syncing...
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-text-muted font-sans">
                            <span className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${repo.langColor}`} />
                              {repo.lang}
                            </span>
                            <span>⭐ {repo.stars}</span>
                            <span>📝 {repo.commits}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                      <div className="flex items-center gap-2 text-xs text-text-muted font-sans">
                        <Clock className="w-4 h-4" />
                        <span>Last backup: {repo.lastBackup}</span>
                      </div>
                      <button className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-xs font-medium text-white hover:shadow-lg hover:shadow-primary/30 transition-all">
                        <Download className="w-3 h-3 inline mr-1" />
                        Restore
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Simplified Shadow Effect */}
        <div className="absolute -inset-2 bg-primary/10 rounded-2xl blur-xl opacity-30 -z-10" />
      </motion.div>
    </div>
  );
}
