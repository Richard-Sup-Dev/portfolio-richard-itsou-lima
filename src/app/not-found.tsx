"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-6xl font-extrabold text-cyan-400 mb-6 neon-text drop-shadow-glow"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-xl text-slate-300 mb-8"
      >
        Página não encontrada.<br />
        O conteúdo que você procura não existe ou foi movido.
      </motion.p>
      <Link href="/" className="px-8 py-4 bg-cyan-500/20 text-cyan-300 font-bold rounded-xl hover:bg-cyan-400/30 transition-all duration-300 shadow-md">
        Voltar para o início
      </Link>
    </div>
  );
}
