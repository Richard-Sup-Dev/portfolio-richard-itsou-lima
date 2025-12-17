"use client";

import { profileData } from '@/components/data/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { name, role, summary, contact } = profileData;

  // Variants para animações de fade up
  const fadeUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // Container com stagger nos filhos
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
        
        {/* Lado Esquerdo: Texto e Botões */}
        <motion.div 
          className="md:w-3/5 text-center md:text-left space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            animate="animate"
          >
            
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-50"
            >
              Olá, eu sou{" "}
              <motion.span 
                className="text-cyan-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
              >
                {name}
              </motion.span>.
            </motion.h1>

            <motion.h2 
              variants={fadeUp}
              className="text-2xl md:text-3xl font-semibold text-slate-300 mt-4"
            >
              {role}
            </motion.h2>

            <motion.p 
              variants={fadeUp}
              className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 mt-6 leading-relaxed"
            >
              {summary}
            </motion.p>

            {/* Botões de Ação */}
            <motion.div 
              variants={fadeUp}
              className="flex flex-wrap gap-4 justify-center md:justify-start pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(6, 182, 212, 0.8)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="#contact"
                  className="px-6 py-3 bg-cyan-500 text-slate-900 font-bold rounded-lg shadow-lg hover:bg-cyan-400 transition-all duration-300"
                  style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }}
                >
                  Fale Comigo
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href={contact.github} 
                  target="_blank"
                  className="px-6 py-3 border border-slate-500 text-slate-50 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Ver GitHub
                </Link>
              </motion.div>
            </motion.div>

            {/* Ícones Sociais */}
            <motion.div 
              variants={fadeUp}
              className="flex gap-6 justify-center md:justify-start pt-8"
            >
              <motion.div whileHover={{ scale: 1.3, rotate: 8 }} whileTap={{ scale: 0.9 }}>
                <Link href={`mailto:${contact.email}`} aria-label="Email" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Mail size={28} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.3, rotate: -8 }} whileTap={{ scale: 0.9 }}>
                <Link href={contact.linkedin} target="_blank" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Linkedin size={28} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.3, rotate: 8 }} whileTap={{ scale: 0.9 }}>
                <Link href={contact.github} target="_blank" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Github size={28} />
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Lado Direito: Sua Foto Real */}
        <motion.div 
          className="md:w-2/5 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ 
            delay: 0.4,
            duration: 1.2,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 shadow-2xl overflow-hidden relative group">
            <Image
              src="/Richard.jpg"  // Sua foto na pasta public
              alt="Richard Itsou Lima"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
            {/* Glow no hover */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-cyan-300 transition-all duration-700 opacity-70 pointer-events-none"></div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}