"use client";

import { motion } from "framer-motion";
import RepoCard from "@/components/RepoCard";

const repositories = [
  {
    name: "my-awesome-app",
    description: "Main application repository with all core features",
    language: "TypeScript",
    lastBackup: "2 hours ago",
    status: "protected" as const,
  },
  {
    name: "portfolio-site",
    description: "Personal portfolio website built with Next.js",
    language: "JavaScript",
    lastBackup: "5 hours ago",
    status: "protected" as const,
  },
  {
    name: "api-server",
    description: "RESTful API server with Express and MongoDB",
    language: "Node.js",
    lastBackup: "1 day ago",
    status: "protected" as const,
  },
  {
    name: "mobile-app",
    description: "React Native mobile application",
    language: "React Native",
    lastBackup: "3 days ago",
    status: "unprotected" as const,
  },
  {
    name: "docs-site",
    description: "Documentation site using Docusaurus",
    language: "Markdown",
    lastBackup: "1 week ago",
    status: "unprotected" as const,
  },
];

export default function RepositoriesPage() {
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
            Repositories
          </h1>
          <p className="text-text-secondary font-sans">Manage and protect your GitHub repositories</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105">
          Connect Repository
        </button>
      </motion.div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repositories.map((repo, index) => (
          <RepoCard key={repo.name} repo={repo} index={index} />
        ))}
      </div>
    </div>
  );
}
