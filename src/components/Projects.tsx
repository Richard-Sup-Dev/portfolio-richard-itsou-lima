// src/components/Projects.tsx
import { mockProjects } from '@/components/data/mock-data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-slate-50 mb-12">
        🚀 Meus Projetos
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}