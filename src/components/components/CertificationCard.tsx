"use client";
import Image from "next/image";
import { Certification } from "../data/types";

interface CertificationCardProps {
  certification: Certification;
}

import { motion } from "framer-motion";

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.04, boxShadow: "0 0 32px 0 #00f2ff55" }}
      className="bg-gradient-to-br from-cyan-900/60 via-slate-900/80 to-cyan-800/40 rounded-2xl shadow-xl overflow-hidden border border-cyan-700/30 backdrop-blur-xl glassmorphism transition-all duration-300 group"
      tabIndex={0}
      aria-label={`Certificação: ${certification.title}`}
    >
      <div className="relative w-full flex justify-center items-center bg-slate-900/60" style={{ aspectRatio: '4/3', minHeight: '192px', maxHeight: '220px' }}>
        <Image
          src={certification.image || "/certificates/placeholder.png"}
          alt={`Certificado: ${certification.title} emitido por ${certification.issuer}`}
          fill
          className="object-contain max-h-52 w-auto group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-300 mb-2 neon-text">
          {certification.title}
        </h3>
        <p className="text-sm text-cyan-100/80 mb-1">
          {certification.issuer}
        </p>
        <p className="text-sm text-cyan-200/60 mb-4">
          {certification.date}
        </p>
        {certification.description && (
          <p className="text-cyan-100/80 mb-4">
            {certification.description}
          </p>
        )}
        {certification.link && (
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 font-medium underline underline-offset-4"
          >
            Ver certificado →
          </a>
        )}
      </div>
    </motion.div>
  );
}