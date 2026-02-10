"use client";

import { motion } from "framer-motion";

export default function CodeVisual() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gradient-to-br from-zinc-950 via-black to-zinc-950 rounded-xl border border-zinc-800/50 overflow-hidden shadow-2xl"
      style={{
        boxShadow: `
          0 0 0 1px rgba(59, 130, 246, 0.1),
          0 20px 60px rgba(0, 0, 0, 0.6),
          0 0 80px rgba(59, 130, 246, 0.1)
        `,
      }}
    >
      {/* Terminal Header */}
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 px-5 py-3 border-b border-zinc-800/50 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/90" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/90" />
          <div className="w-3 h-3 rounded-full bg-green-500/90" />
        </div>
        <span className="text-xs text-text-muted font-mono ml-2">codevault-backup.ts</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs text-text-muted">Live</span>
        </div>
      </div>
      
      {/* Code Content */}
      <div className="p-6 font-mono text-xs leading-relaxed bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="space-y-2">
          <div className="flex">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">1</span>
            <span className="text-zinc-300 ml-4">
              <span className="text-purple-400">import</span> <span className="text-blue-400">{`{ backup, encrypt }`}</span> <span className="text-purple-400">from</span> <span className="text-orange-400">&apos;@codevault/sdk&apos;</span>;
            </span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">2</span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">3</span>
            <span className="text-zinc-300 ml-4">
              <span className="text-purple-400">async function</span> <span className="text-yellow-300">createBackup</span>() {`{`}
            </span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">4</span>
            <span className="text-zinc-300 ml-4">
              &nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-blue-400">encrypted</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">encrypt</span>({`{`}
            </span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">5</span>
            <span className="text-zinc-300 ml-4">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">repository</span>: <span className="text-orange-400">&apos;my-awesome-app&apos;</span>,
            </span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">6</span>
            <span className="text-zinc-300 ml-4">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">algorithm</span>: <span className="text-orange-400">&apos;AES-256-GCM&apos;</span>
            </span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">7</span>
            <span className="text-zinc-300 ml-4">
              &nbsp;&nbsp;{`}`});
            </span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">8</span>
            <span className="text-zinc-300 ml-4">
              &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-purple-400">await</span> <span className="text-blue-400">backup</span>.<span className="text-yellow-300">create</span>(encrypted);
            </span>
          </div>
          <div className="flex">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">9</span>
            <span className="text-zinc-300 ml-4">
              {`}`}
            </span>
          </div>
          <div className="flex mt-4 pt-4 border-t border-zinc-800/50">
            <span className="text-zinc-600 w-8 inline-block text-right select-none">10</span>
            <span className="text-green-400 ml-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              ✓ Backup created successfully • Encrypted with AES-256
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
