"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import BackupTable from "@/components/BackupTable";
import { FolderGit2, HardDrive, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: FolderGit2, label: "Total Repositories", value: "24", gradient: "from-purple-500 to-violet-500" },
  { icon: HardDrive, label: "Total Backups", value: "156", gradient: "from-violet-500 to-indigo-500" },
  { icon: Shield, label: "Protected Repos", value: "18", gradient: "from-indigo-500 to-purple-500" },
  { icon: TrendingUp, label: "Storage Used", value: "2.4 GB", gradient: "from-purple-500 to-indigo-500" },
];

const recentBackups = [
  { id: "1", repository: "my-awesome-app", version: "v1.2.3", date: "2 hours ago", size: "45 MB", status: "success" as const },
  { id: "2", repository: "portfolio-site", version: "v2.0.1", date: "5 hours ago", size: "12 MB", status: "success" as const },
  { id: "3", repository: "api-server", version: "v1.5.0", date: "1 day ago", size: "89 MB", status: "success" as const },
  { id: "4", repository: "mobile-app", version: "v0.9.2", date: "2 days ago", size: "234 MB", status: "pending" as const },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-mono font-bold text-text-primary mb-2">
          Dashboard <span className="text-text-muted">Overview</span>
        </h1>
        <p className="text-text-secondary font-sans">Welcome back! Here&apos;s what&apos;s happening with your backups.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} />
        ))}
      </div>

      {/* Recent Backups */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h2 className="text-xl font-mono font-bold text-text-primary mb-4">Recent Backups</h2>
        <BackupTable backups={recentBackups} />
      </motion.div>
    </div>
  );
}
