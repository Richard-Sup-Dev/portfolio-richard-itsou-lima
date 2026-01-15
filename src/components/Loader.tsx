"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="w-20 h-20 rounded-full border-8 border-cyan-400 border-t-transparent animate-spin shadow-xl"
      />
      <span className="absolute bottom-12 text-cyan-400 font-bold text-xl animate-pulse">Carregando...</span>
    </div>
  );
}
