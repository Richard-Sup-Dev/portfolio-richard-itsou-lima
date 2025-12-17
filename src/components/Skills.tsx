"use client";

import { mockSkills } from '@/components/data/mock-data';
import Image from 'next/image';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-slate-50 mb-16 flex items-center justify-center gap-4"
      >
        <span className="text-5xl">🛠️</span> Habilidades Técnicas
      </motion.h2>

      <motion.div 
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {mockSkills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 hover:-translate-y-4"
            whileHover={{ scale: 1.15 }}
          >
            <div className="w-20 h-20 mb-4 relative">
              <Image
                src={skill.icon}
                alt={`${skill.name} logo`}
                fill
                className="object-contain drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-cyan-400/90"
                priority
              />
            </div>
            <p className="text-base font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors duration-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}