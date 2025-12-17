// src/components/ProjectCard.tsx
import { Project } from '@/types/project.type';
import Link from 'next/link';
import { Github, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300 transform hover:-translate-y-1">
      
      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
      
      <p className="text-slate-300 mb-4">{project.description}</p>
      
      {/* Stack de Tecnologia */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="bg-slate-600 text-sm text-slate-200 px-3 py-1 rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links de Ação */}
      <div className="flex gap-4 pt-2">
        <Link
          href={project.githubUrl}
          target="_blank"
          className="flex items-center gap-2 text-slate-50 hover:text-cyan-400 transition-colors"
          aria-label={`Ver código do projeto ${project.title} no GitHub`}
        >
          <Github size={20} />
          GitHub
        </Link>
        
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="flex items-center gap-2 text-slate-50 hover:text-cyan-400 transition-colors"
            aria-label={`Ver projeto ${project.title} ao vivo`}
          >
            <Globe size={20} />
            Live Demo
          </Link>
        )}
      </div>
      
    </div>
  );
}