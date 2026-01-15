"use client";

import { mockSkills } from '@/components/data/mock-data';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export default function Skills() {
  const categories = ["Frontend", "Backend", "DevOps"];
  return (
    <section id="skills" className="container mx-auto px-2 sm:px-4 py-16 sm:py-20 bg-[radial-gradient(ellipse_at_bottom_right,var(--cyan-glow-soft),transparent_70%)] rounded-3xl shadow-2xl" aria-labelledby="skills-title">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="skills-title"
        className="text-4xl md:text-5xl font-extrabold text-center text-cyan-400 mb-12 sm:mb-16 flex items-center justify-center gap-4 tracking-tight drop-shadow-glow neon-text"
      >
        <span className="text-5xl">🛠️</span> Habilidades Técnicas
      </motion.h2>
      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 mt-8">{cat}</h3>
            <motion.div
              className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {mockSkills.filter(s => s.category === cat).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className="group relative bg-slate-800/60 rounded-2xl p-3 sm:p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-cyan-800/40 focus-within:ring-2 focus-within:ring-cyan-400"
                  tabIndex={0}
                  aria-label={`Skill: ${skill.name}`}
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  {/* Glow/blur reduzido para sobriedade */}
                  <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 scale-0 opacity-0 group-hover:scale-105 group-hover:opacity-80 transition-all duration-400 pointer-events-none" />
                  {/* Conteúdo principal */}
                  <div className="relative z-10 w-20 h-20 mb-4" aria-hidden="true">
                    <Image
                      src={skill.icon}
                      alt={`Ícone da skill ${skill.name}`}
                      fill
                      sizes="80px"
                      className="object-contain drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-cyan-400/90"
                      priority={index < 8} // Só as primeiras 8 imagens carregam com priority
                    />
                  </div>
                  <p className="relative z-10 text-base font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors duration-300 neon-text">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}