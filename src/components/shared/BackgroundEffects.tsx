"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Moving light */}
      <motion.div
        animate={{
          x: ["-30%", "130%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 h-full w-[500px] rotate-12 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent blur-3xl"
      />

      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
      />
    </div>
  );
}