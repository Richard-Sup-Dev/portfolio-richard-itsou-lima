"use client";

import { profileData } from '@/components/data/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Particles from './Particles';

export default function Hero() {
  const { name, role, summary, contact } = profileData;

  // Efeito de digitação no cargo
  const [displayedRole, setDisplayedRole] = useState("");
  const fullRole = role;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullRole.length) {
        setDisplayedRole(fullRole.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [fullRole]);

  // Parallax com o mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 bg-[radial-gradient(ellipse_at_top_left,var(--cyan-glow-soft),transparent_70%)]">
      {/* Partículas animadas de fundo */}
      <Particles count={12} />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Lado esquerdo: texto de apresentação */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left space-y-8"
        >
          {/* Título, subtítulo, descrição e botões */}
          <div>
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight neon-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-slate-200">Olá, eu sou</span>
              <br />
              <motion.span
                className="bg-linear-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent inline-block neon-text"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
                style={{
                  textShadow: `
                    0 0 20px rgba(6, 182, 212, 0.8),
                    0 0 40px rgba(6, 182, 212, 0.5),
                    0 0 60px rgba(6, 182, 212, 0.3)
                  `,
                }}
              >
                {name}.
              </motion.span>
            </motion.h1>

            <motion.h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 mt-4 md:mt-6 h-10 md:h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="relative">
                {displayedRole}
                <span className="animate-ping absolute inline-block w-1 h-full bg-cyan-400 right-0 -mr-1" />
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="text-base xs:text-lg md:text-xl text-slate-300 max-w-xs xs:max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            {summary}
          </motion.p>

          {/* Botões de contato e redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col xs:flex-row gap-4 xs:gap-6 justify-center md:justify-start pt-4 md:pt-6 w-full max-w-xs xs:max-w-md mx-auto"
          >
            <Link
              href="#contact"
              className="flex-1 min-w-35 flex items-center justify-center gap-2 px-6 py-3 xs:px-8 xs:py-4 bg-cyan-400 text-slate-900 font-bold rounded-xl shadow-lg hover:bg-cyan-300 hover:text-slate-900 transition-all duration-300 text-base xs:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Mail size={20} className="inline-block mb-0.5 mr-1" />
              Fale Comigo
            </Link>

            <Link
              href={contact.github}
              target="_blank"
              className="flex-1 min-w-35 flex items-center justify-center gap-2 px-6 py-3 xs:px-8 xs:py-4 bg-slate-800 text-cyan-300 font-bold rounded-xl shadow-lg border border-cyan-400/40 hover:bg-cyan-900 hover:text-cyan-200 hover:border-cyan-300 transition-all duration-300 text-base xs:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Github size={20} className="inline-block mb-0.5 mr-1" />
              Ver GitHub
            </Link>
          </motion.div>

          {/* Ícones sociais removidos para evitar duplicidade (já existem no Footer e Fale Comigo) */}
        </motion.div>

        {/* LADO DIREITO: FOTO ESTÁVEL COM AURÉOLAS ANIMADAS */}
        <div className="relative flex justify-center items-center mt-10 xs:mt-0">
          {/* ORBIT WRAPPER: container quadrado fixo */}
          <div className="relative w-52 h-52 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-110 lg:h-110 aspect-square flex items-center justify-center">

            {/* Auréola externa pulsante (grande e visível) */}
            <div className="absolute -inset-7.5 rounded-full border-4 border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.8)] animate-pulse opacity-80" />

            {/* Ondas expansivas (se mexem claramente) */}
            <div className="absolute -inset-2.5 rounded-full border-3 border-cyan-300/70 animate-wave" />
            <div className="absolute -inset-2.5 rounded-full border-3 border-cyan-400/60 animate-wave delay-1000" />

            {/* Anéis holográficos girando (movimento constante e suave) */}
            <div className="absolute inset-4 rounded-full border-t-4 border-l-4 border-cyan-500/80 animate-hologram" />
            <div className="absolute inset-8 rounded-full border-b-4 border-r-4 border-cyan-300/70 animate-hologram" style={{ animationDirection: 'reverse' }} />

            {/* Foto ESTÁVEL com parallax (sem float no container) */}
            <motion.div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left - rect.width / 2);
                mouseY.set(e.clientY - rect.top - rect.height / 2);
              }}
              onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
              }}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full"
            >
              {/* Glow principal */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-3xl animate-pulse" />

              {/* Moldura e imagem */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-cyan-300 shadow-[0_0_80px_rgba(6,182,212,0.9)]">
                <Image
                  src="/Richard.jpg"
                  alt="Richard Itsou Lima"
                  fill
                  className="object-cover scale-110 transition-transform duration-700 group-hover:scale-115"
                  priority
                />
                {/* Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(6,182,212,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}