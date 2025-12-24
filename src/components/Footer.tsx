"use client";

import { profileData } from '@/components/data/mock-data';
import Link from 'next/link';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const { contact } = profileData;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-t from-slate-950 to-slate-900 border-t border-cyan-900/50 mt-20">
      <div className="container mx-auto px-4 py-16">
        
        {/* Título com animação suave ao entrar na seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-50 mb-6">
            Vamos Conversar!
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Tenho experiência em resolver desafios complexos e criar soluções performáticas. 
            Se você tem um projeto em mente, entre em contato.
          </p>
        </motion.div>

        {/* Contato Principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
        >
          <Link
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-all duration-300"
          >
            <div className="p-3 bg-cyan-500/10 rounded-full group-hover:bg-cyan-500/20 transition">
              <Mail size={24} className="text-cyan-400" />
            </div>
            <span className="text-lg font-medium">{contact.email}</span>
          </Link>

          {contact.phone && (
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Phone size={24} className="text-cyan-400" />
              </div>
              <span className="text-lg font-medium">{contact.phone}</span>
            </div>
          )}
        </motion.div>

        {/* Links Sociais com hover premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center gap-10 mb-16"
        >
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link 
              href={contact.linkedin} 
              target="_blank" 
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Linkedin size={36} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
            <Link 
              href={contact.github} 
              target="_blank" 
              aria-label="GitHub"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Github size={36} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Linha separadora sutil */}
        <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-cyan-800 to-transparent mb-8" />

        {/* Copyright com estilo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-center text-sm text-slate-500"
        >
          © {currentYear} Richard Itsou Lima. Todos os direitos reservados.
          <br className="sm:hidden" />
          <span className="text-cyan-500/70"> Feito com ❤️ e Next.js</span>
        </motion.p>
      </div>
    </footer>
  );
}