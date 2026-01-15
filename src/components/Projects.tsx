"use client";


import Image from 'next/image';
import { motion } from 'framer-motion';

// Dados do projeto destaque
const dashborn = {
  title: "EDDA Sistema (Dashborn)",
  description: `Sistema web completo para gestão e geração de relatórios técnicos de manutenção industrial, com foco em segurança, automação, escalabilidade e operação em produção. Interface moderna, responsiva e com experiência premium.`,
  techStack: [
    "Node.js 20", "Express 4", "PostgreSQL 14+", "Sequelize ORM", "JWT", "React 19", "Vite 7", "Tailwind CSS 4", "React Router", "Axios", "Framer Motion", "Lucide React", "Docker", "Docker Compose", "GitHub Actions"
  ],
  githubUrl: "https://github.com/Richard-Sup-Dev/edda-sistema",
  liveUrl: undefined,
  thumbnail: "/projects/Sistema-EDDA.png" // Imagem do projeto (adicione em public/projects/)
};

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-center text-cyan-400 mb-16 flex items-center justify-center gap-4 tracking-tight drop-shadow-glow"
      >
        <span className="text-5xl">🧬</span> Projeto Destaque
      </motion.h2>

      <motion.div
        className="relative flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto bg-linear-to-br from-cyan-900/60 via-slate-900/80 to-cyan-800/40 rounded-3xl p-8 md:p-16 shadow-lg border border-cyan-700/30 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "backOut" }}
        style={{ boxShadow: '0 8px 64px 0 rgba(0,242,255,0.15), 0 1.5px 0 0 #00f2ff' }}
      >
        {/* Imagem do projeto com efeito de vidro e glow */}
        <motion.div
          className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-cyan-500/30 bg-cyan-400/10"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={dashborn.thumbnail}
            alt="Screenshot do EDDA Sistema: dashboard de relatórios técnicos, interface moderna e responsiva."
            fill
            loading="lazy"
            className="object-cover object-top scale-100 md:blur-0 group-hover:scale-105 transition-all duration-400"
            style={{ filter: 'drop-shadow(0 0 8px #00f2ff44)' }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-cyan-900/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Conteúdo do projeto: descrição, tecnologias e links */}
        <motion.div
          className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-cyan-300 drop-shadow-lg mb-2 neon-text">
            {dashborn.title}
          </h3>
          <p className="text-lg text-slate-200/90 leading-relaxed mb-2">
            {dashborn.description}
          </p>
          <ul className="text-base text-cyan-100/80 mb-4 list-disc pl-5 space-y-1">
            <li>Autenticação JWT segura, logging estruturado, validação de dados e arquitetura escalável.</li>
            <li>Dashboard interativo, CRUD completo, catálogo de peças, controle de inventário e geração de PDFs.</li>
            <li>Testes automatizados (34+), CI/CD com GitHub Actions, deploy fácil (Vercel, Docker, etc).</li>
            <li>Documentação completa, UX premium, responsividade e performance.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Badges de tecnologias */}
            <span className="bg-[#339933]/20 text-[#339933] px-3 py-1 rounded-full text-xs font-bold border border-[#339933]/30">Node.js</span>
            <span className="bg-[#61dafb]/20 text-[#61dafb] px-3 py-1 rounded-full text-xs font-bold border border-[#61dafb]/30">React</span>
            <span className="bg-[#3178c6]/20 text-[#3178c6] px-3 py-1 rounded-full text-xs font-bold border border-[#3178c6]/30">TypeScript</span>
            <span className="bg-[#38bdf8]/20 text-[#38bdf8] px-3 py-1 rounded-full text-xs font-bold border border-[#38bdf8]/30">Tailwind CSS</span>
            <span className="bg-[#e535ab]/20 text-[#e535ab] px-3 py-1 rounded-full text-xs font-bold border border-[#e535ab]/30">PostgreSQL</span>
            <span className="bg-[#2496ed]/20 text-[#2496ed] px-3 py-1 rounded-full text-xs font-bold border border-[#2496ed]/30">Docker</span>
            <span className="bg-[#24292f]/20 text-[#24292f] px-3 py-1 rounded-full text-xs font-bold border border-[#24292f]/30">GitHub Actions</span>
          </div>
          <div className="flex gap-6 mt-2">
            <a
              href={dashborn.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400/90 text-slate-900 font-bold shadow-lg transition-all duration-300 text-lg"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.652 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.38.202 2.398.1 2.652.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
              Ver no GitHub
            </a>
            {/* Se quiser adicionar link live, descomente abaixo */}
            {/* {dashborn.liveUrl && (
              <a
                href={dashborn.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-800/80 hover:bg-cyan-600/80 text-cyan-200 font-bold shadow-lg transition-all duration-300 text-lg"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14 3v2h3.59L7.05 15.54l1.41 1.41L19 6.41V10h2V3h-7Z"/><path fill="currentColor" d="M5 5v14h14v-7h-2v5H7V7h5V5H5Z"/></svg>
                Live
              </a>
            )} */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}