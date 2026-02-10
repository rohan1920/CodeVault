"use client";

import { motion } from "framer-motion";
import BackupTable from "@/components/BackupTable";

const allBackups = [
  { id: "1", repository: "my-awesome-app", version: "v1.2.3", date: "2 hours ago", size: "45 MB", status: "success" as const },
  { id: "2", repository: "portfolio-site", version: "v2.0.1", date: "5 hours ago", size: "12 MB", status: "success" as const },
  { id: "3", repository: "api-server", version: "v1.5.0", date: "1 day ago", size: "89 MB", status: "success" as const },
  { id: "4", repository: "mobile-app", version: "v0.9.2", date: "2 days ago", size: "234 MB", status: "pending" as const },
  { id: "5", repository: "docs-site", version: "v1.0.0", date: "3 days ago", size: "8 MB", status: "success" as const },
  { id: "6", repository: "my-awesome-app", version: "v1.2.2", date: "1 week ago", size: "44 MB", status: "success" as const },
  { id: "7", repository: "portfolio-site", version: "v2.0.0", date: "1 week ago", size: "11 MB", status: "success" as const },
  { id: "8", repository: "api-server", version: "v1.4.9", date: "2 weeks ago", size: "87 MB", status: "success" as const },
];

export default function BackupsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-mono font-bold text-text-primary mb-2">
            Backups
          </h1>
          <p className="text-text-secondary font-sans">View and manage all your code backups</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105">
          Create Backup
        </button>
      </motion.div>

      {/* Backups Table */}
      <BackupTable backups={allBackups} />
    </div>
  );
}
