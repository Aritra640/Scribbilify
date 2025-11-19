"use client";

import { motion } from "framer-motion";
import { Feather, PenTool, Sparkles, Folder, Wand2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e0f] text-white overflow-hidden">
      {/* --- Background Glow --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[400px] w-[400px] bg-purple-600/40 blur-[180px] rounded-full"></div>
        <div className="absolute top-20 right-0 h-[350px] w-[350px] bg-blue-500/40 blur-[170px] rounded-full"></div>
      </div>

      {/* --- HERO --- */}
      <section className="relative z-10 pt-36 pb-28 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl font-bold tracking-tight bg-gradient-to-br from-purple-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg"
        >
          Scribbilify
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-xl max-w-3xl mx-auto mt-6 text-gray-300 leading-relaxed"
        >
          A beautiful, fluid writing space for creators.  
          Let ideas flow with an editor that *feels alive* — powered by AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/editor"
            className="px-8 py-3 rounded-full bg-white/90 text-black font-semibold text-lg flex items-center gap-2 hover:bg-white transition shadow-lg"
          >
            Start Writing <Feather size={20} />
          </Link>
        </motion.div>

        {/* Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-20 flex flex-wrap justify-center gap-6"
        >
          <div className="w-[260px] h-[160px] bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-6 flex flex-col items-start">
            <PenTool className="text-purple-300 h-9 w-9 mb-3" />
            <p className="text-lg font-semibold">Smooth Writing</p>
            <p className="text-gray-400 text-sm mt-1">A fluid, responsive editor that feels natural.</p>
          </div>

          <div className="w-[260px] h-[160px] bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-6 flex flex-col items-start">
            <Wand2 className="text-blue-300 h-9 w-9 mb-3" />
            <p className="text-lg font-semibold">AI Magic</p>
            <p className="text-gray-400 text-sm mt-1">Expand, rewrite, summarize — instantly.</p>
          </div>

          <div className="w-[260px] h-[160px] bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-6 flex flex-col items-start">
            <Folder className="text-amber-300 h-9 w-9 mb-3" />
            <p className="text-lg font-semibold">Organized Flow</p>
            <p className="text-gray-400 text-sm mt-1">Folders, drafts, and powerful categorization.</p>
          </div>
        </motion.div>
      </section>

      {/* --- SECOND SECTION --- */}
      <section className="relative z-10 pb-32 px-6">
        <h2 className="text-4xl text-center font-bold mb-16">
          Create. Organize. Transform.
        </h2>

        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-gradient-to-br from-purple-600/20 to-blue-500/20 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-lg"
          >
            <Sparkles className="h-12 w-12 mb-4 text-purple-300" />
            <h3 className="text-xl font-semibold">Smart Formatting</h3>
            <p className="text-gray-400 mt-3">
              Beautiful markdown-like formatting without thinking.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-gradient-to-br from-blue-600/20 to-purple-500/20 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-lg"
          >
            <Feather className="h-12 w-12 mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold">Natural Writing</h3>
            <p className="text-gray-400 mt-3">
              A canvas that encourages creativity, not menus.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-gradient-to-br from-pink-600/20 to-indigo-500/20 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-lg"
          >
            <PenTool className="h-12 w-12 mb-4 text-pink-300" />
            <h3 className="text-xl font-semibold">Clean Organization</h3>
            <p className="text-gray-400 mt-3">
              Keep drafts, notes, and ideas structured without friction.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 text-center py-10 text-gray-500">
        © {new Date().getFullYear()} Scribbilify — Write Wonderfully.
      </footer>
    </main>
  );
}


