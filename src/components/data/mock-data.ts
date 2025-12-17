// src/components/data/mock-data.ts

import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";

export const mockProjects: Project[] = [
  {
    title: "EcoConnect",
    description: "Plataforma de rastreamento e compensação de carbono para pequenas empresas, com foco em relatórios de sustentabilidade e metas ODS.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/richardlima/ecoconnect",
    liveUrl: "https://ecoconnect.app",
    imageUrl: "/images/ecoconnect.png",
  },
  {
    title: "Financial Flow",
    description: "Aplicativo móvel de gerenciamento financeiro pessoal com visualização de gastos em tempo real e orçamentos baseados em IA.",
    techStack: ["React Native", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/richardlima/financial-flow",
    liveUrl: "https://play.google.com/financialflow",
    imageUrl: "/images/financial-flow.png",
  },
];

export const mockSkills: Skill[] = [
  { name: "TypeScript", icon: "TsIcon" },
  { name: "Next.js", icon: "NextJsIcon" },
  { name: "React", icon: "ReactIcon" },
  { name: "Node.js", icon: "NodeJsIcon" },
  { name: "Tailwind CSS", icon: "TailwindIcon" },
  { name: "PostgreSQL", icon: "PostgresIcon" },
  { name: "Git", icon: "GitIcon" },
  { name: "AWS", icon: "AWSIcon" },
];

// Dados atualizados para Richard Itsou Lima
export const profileData = {
    name: "Richard Itsou Lima",
    role: "Desenvolvedor Full Stack | React & Next.js",
    summary: "Desenvolvedor apaixonado por criar experiências digitais de alto desempenho. Especializado na stack moderna JavaScript/TypeScript (Next.js, Node.js) e focado em soluções escaláveis e intuitivas.",
    contact: {
        email: "richard.lima@dev.com",
        phone: "+55 11 99999-0000",
        linkedin: "https://linkedin.com/in/richardlima",
        github: "https://github.com/richardlima",
    }
};