"use client";

import { mockProjects } from '@/components/data/mock-data';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

// Variants para o container (stagger nos filhos)
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Um card aparece 0.3s depois do outro
      delayChildren: 0.2
    }
  }
};

// Variant para cada card individual
const cardVariant = {
  hidden: { 
    opacity: 0, 
    y: 80 // Começa 80px mais abaixo
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      {/* Título com animação */}
      <motion.h2 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center text-slate-50 mb-16 flex items-center justify-center gap-4"
      >
        <span className="text-5xl">🚀</span> Meus Projetos
      </motion.h2>
      
      {/* Grid com animação staggered */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {mockProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}