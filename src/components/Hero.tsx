"use client";

import { profileData } from '@/components/data/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { name, role, summary, contact } = profileData;

  // Para efeito typewriter no cargo
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

  // Mouse parallax sutil na foto
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Partículas ciano flutuando (CSS puro - leve e performático) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${15 + i * 3}s`,
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left space-y-8"
        >
          <div>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-slate-200">Olá, eu sou</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent inline-block"
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

            {/* Cargo com efeito typewriter + glitch */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-cyan-300 mt-6 h-12"
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
            className="text-lg md:text-xl text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            {summary}
          </motion.p>

          {/* Botões */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap gap-5 justify-center md:justify-start pt-6"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/50 text-cyan-300 font-bold rounded-xl hover:bg-cyan-500/30 hover:border-cyan-300 transition-all duration-500 group relative overflow-hidden"
            >
              <span className="relative z-10">Fale Comigo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
            </Link>

            <Link
              href={contact.github}
              target="_blank"
              className="px-8 py-4 border border-slate-500 text-slate-200 font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all duration-500"
            >
              Ver GitHub
            </Link>
          </motion.div>

          {/* Ícones sociais com glow forte */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex gap-8 justify-center md:justify-start pt-8"
          >
            {[Mail, Linkedin, Github].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.4, rotate: i % 2 === 0 ? 15 : -15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={
                    Icon === Mail
                      ? `mailto:${contact.email}`
                      : Icon === Linkedin
                        ? contact.linkedin
                        : contact.github
                  }
                  target={Icon !== Mail ? "_blank" : undefined}
                  className="text-slate-400 hover:text-cyan-300 transition-all duration-300"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.6))',
                  }}
                >
                  <Icon size={32} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Foto com efeito holograma 3D + Equalizador de Som */}
        <motion.div
          className="relative flex justify-center"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left - rect.width / 2);
            mouseY.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          {/* Container que flutua e rotaciona */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-80 h-80 md:w-96 md:h-96 animate-float"
          >
            {/* 1. Ondas de Som (Equalizador) - Camadas que expandem */}
            <div className="absolute -inset-4 rounded-full border-2 border-cyan-400/40 animate-audio-wave" />
            <div className="absolute -inset-4 rounded-full border-2 border-cyan-400/30 animate-audio-wave delay-500" />
            <div className="absolute -inset-8 rounded-full border border-cyan-500/20 animate-audio-wave delay-1000" />

            {/* 2. Glow de fundo pulsante */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

            {/* 3. Container da Imagem com borda neon fixa */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.6)] z-10">
              <Image
                src="/Richard.jpg"
                alt="Richard Itsou Lima"
                fill
                className="object-cover scale-110"
                priority
              />
              {/* Overlay de Scanlines (Efeito de TV antiga/Holograma) */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
            </div>

            {/* 4. Pequenos detalhes de partículas ao redor (opcional) */}
            <div className="absolute -top-4 -right-4 w-4 h-4 bg-cyan-400 rounded-full blur-sm animate-ping" />
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-300 rounded-full blur-sm animate-pulse" />

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}