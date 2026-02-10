"use client";

import { motion } from "framer-motion";
import { User, Shield, Bell, CreditCard } from "lucide-react";

const settingsSections = [
  {
    icon: User,
    title: "Profile Settings",
    description: "Update your personal information and preferences",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Manage your security settings and encryption keys",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Configure backup and alert notifications",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: CreditCard,
    title: "Billing",
    description: "Manage your subscription and payment methods",
    gradient: "from-purple-500 to-indigo-500",
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-mono font-bold text-text-primary mb-2">
          Settings
        </h1>
        <p className="text-text-secondary font-sans">Manage your account settings and preferences</p>
      </motion.div>

      {/* Settings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-sm rounded-xl border border-zinc-800/60 p-6 hover:border-purple-500/30 transition-all duration-300 group overflow-hidden cursor-pointer"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-300`} />
            <div className="relative z-10">
              <div className={`w-12 h-12 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-mono font-bold text-text-primary mb-2">{section.title}</h3>
              <p className="text-sm text-text-muted font-sans">{section.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
