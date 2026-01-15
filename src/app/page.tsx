"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects"; 
import Skills from "@/components/Skills"; 
import Footer from "@/components/Footer"; 
import MatrixBackground from "@/components/MatrixBackground"; 


import { certifications } from "@/components/certifications/data/certifications";
import { CertificationCard } from "@/components/components/CertificationCard";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative">
      {/* Fundo Matrix aparecendo em todo o site */}
      <MatrixBackground />

      {/* Overlay escuro para destacar o conteúdo (ajuste a opacidade conforme preferir) */}
      <div className="fixed inset-0 bg-black/60 -z-40 pointer-events-none" />

      {/* Conteúdo principal do site */}
      <div className="relative z-10">
        <Hero />

        {/* Seção Sobre Mim */}
        <section id="about" className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/RichardCartoon.jpg"
              alt="Avatar ilustrado representando Richard Itsou Lima em ambiente de trabalho com monitores e código."
              className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-8 md:mb-0 animate-float"
              loading="lazy"
            />
          </div>
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-cyan-400 mb-2 neon-text">Sobre Mim</h2>
            <p className="text-lg text-slate-200 leading-relaxed">
              Desenvolvedor Full Stack focado em criar produtos digitais robustos, escaláveis e bem estruturados. Trabalho com React, Next.js e Node.js, unindo performance, usabilidade e visão de produto.
            </p>
            <p className="text-base text-slate-400">
              Tenho experiência prática no desenvolvimento de sistemas completos, desde a concepção até o deploy em produção, enfrentando desafios reais como automação, integração de APIs, testes e otimização.
            </p>
            <p className="text-base text-cyan-400 font-semibold mt-2">Acredito em código limpo, boas práticas e aprendizado contínuo como base para entregar soluções que realmente fazem a diferença.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
              <a href="/currículo/Curriculo Richard 2.pdf" download className="px-6 py-3 rounded-full bg-cyan-500/90 hover:bg-cyan-400/90 text-slate-900 font-bold shadow-lg transition-all duration-300 text-lg">
                Baixar Currículo (PDF)
              </a>
              <a href={require('@/components/data/mock-data').profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-400/10 transition-all duration-300 text-lg">
                LinkedIn
              </a>
              <a href={require('@/components/data/mock-data').profileData.contact.phone} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-400/10 transition-all duration-300 text-lg">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-cyan-800/50 my-20 mx-auto max-w-6xl"></div>

        <Projects />
        
        <div className="border-t border-cyan-800/50 my-20 mx-auto max-w-6xl"></div>
        
        <Skills />

        <div className="border-t border-cyan-800/50 my-20 mx-auto max-w-6xl"></div>

        {/* Seção de Certificações (destaque para conquistas) */}
        <section id="certifications" className="container mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-slate-50 mb-16 flex items-center justify-center gap-4"
          >
            <span className="text-5xl">🎓</span> Certificações
          </motion.h2>

          <div
            className="w-full flex justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl xl:max-w-5xl">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.12 }}
                >
                  <CertificationCard certification={cert} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        
        <Footer />
      </div>
    </div>
  );
}