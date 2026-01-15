"use client";

import { Project } from '@/types/project.type';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 hover:-translate-y-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Imagem do Projeto (Thumbnail) */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={project.thumbnail || "/placeholder-project.jpg"} // Você vai adicionar thumbnails reais em public/
          alt={`Thumbnail do projeto ${project.title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay escuro com título no hover */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold text-cyan-400 drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 space-y-4">
        <p className="text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Stack de Tecnologia */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => {
            const badgeColors: Record<string, string> = {
              'Node.js': 'bg-[#339933]/20 text-[#339933] border-[#339933]/30',
              'React': 'bg-[#61dafb]/20 text-[#61dafb] border-[#61dafb]/30',
              'TypeScript': 'bg-[#3178c6]/20 text-[#3178c6] border-[#3178c6]/30',
              'Tailwind CSS': 'bg-[#38bdf8]/20 text-[#38bdf8] border-[#38bdf8]/30',
              'PostgreSQL': 'bg-[#e535ab]/20 text-[#e535ab] border-[#e535ab]/30',
              'React Native': 'bg-[#61dafb]/20 text-[#61dafb] border-[#61dafb]/30',
              'Firebase': 'bg-[#ffca28]/20 text-[#ffca28] border-[#ffca28]/30',
            };
            return (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs font-bold border ${badgeColors[tech] || 'bg-cyan-900/40 text-cyan-200 border-cyan-700/40'}`}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Links de Ação */}
        <div className="flex gap-6 pt-4">
          <Link
            href={project.githubUrl.replace('github.com/richardlima', 'github.com/Richard-Sup-Dev')}
            target="_blank"
            className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            <Github size={22} />
            <span className="font-medium">GitHub</span>
          </Link>
          
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Globe size={22} />
              <span className="font-medium">Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}