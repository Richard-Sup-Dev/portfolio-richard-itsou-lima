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
    thumbnail: "/projects/ecoconnect.jpg", // ← coloque uma thumbnail aqui depois (ou use placeholder por enquanto)
  },
  {
    title: "Financial Flow",
    description: "Aplicativo móvel de gerenciamento financeiro pessoal com visualização de gastos em tempo real e orçamentos baseados em IA.",
    techStack: ["React Native", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/richardlima/financial-flow",
    liveUrl: "https://play.google.com/financialflow",
    thumbnail: "/projects/financialflow.jpg", // ← mesma coisa
  },
];

export const mockSkills: Skill[] = [
  { name: "TypeScript", icon: "/skills/TypeScript.png" },
  { name: "Next.js", icon: "/skills/Nextjs.png" },
  { name: "React", icon: "/skills/React.png" },
  { name: "Node.js", icon: "/skills/Node.js.png" },
  { name: "Tailwind CSS", icon: "/skills/Tailwind CSS.png" },
  { name: "PostgreSQL", icon: "/skills/PostgreSQL.png" },
  { name: "SQLite", icon: "/skills/SQLite.png" },
  { name: "Docker", icon: "/skills/Docker.png" },
  { name: "GitHub", icon: "/skills/GitHub.png" },
  { name: "AWS", icon: "/skills/AWS.png" },
  // Adicione mais se quiser
];

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