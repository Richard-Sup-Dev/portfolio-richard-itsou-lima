// src/components/data/mock-data.ts

import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";

export const mockProjects: Project[] = [
  {
    title: "EcoConnect",
    description: "Plataforma de rastreamento e compensação de carbono para pequenas empresas, com foco em relatórios de sustentabilidade e metas ODS.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Richard-Sup-Dev/ecoconnect",
    liveUrl: "https://ecoconnect.app",
    thumbnail: "/projects/ecoconnect.jpg", // ← coloque uma thumbnail aqui depois (ou use placeholder por enquanto)
  },
  {
    title: "Financial Flow",
    description: "Aplicativo móvel de gerenciamento financeiro pessoal com visualização de gastos em tempo real e orçamentos baseados em IA.",
    techStack: ["React Native", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/Richard-Sup-Dev/financial-flow",
    liveUrl: "https://play.google.com/financialflow",
    thumbnail: "/projects/financialflow.jpg", // ← mesma coisa
  },
];

export const mockSkills: Skill[] = [
  // Frontend
  { name: "TypeScript", icon: "/skills/TypeScript.png", level: "Avançado", category: "Frontend" },
  { name: "Next.js", icon: "/skills/Next.js.png", level: "Avançado", category: "Frontend" },
  { name: "React", icon: "/skills/React.png", level: "Avançado", category: "Frontend" },
  { name: "Tailwind CSS", icon: "/skills/Tailwind CSS.png", level: "Avançado", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: "/skills/Node.js.png", level: "Intermediário", category: "Backend" },
  { name: "PostgreSQL", icon: "/skills/PostgreSQL.png", level: "Intermediário", category: "Backend" },
  { name: "SQLite", icon: "/skills/Sqlite.png", level: "Básico", category: "Backend" },
  // DevOps
  { name: "Docker", icon: "/skills/Docker.png", level: "Básico", category: "DevOps" },
  { name: "GitHub", icon: "/skills/GitHub.png", level: "Avançado", category: "DevOps" },
  { name: "AWS", icon: "/skills/AWS.png", level: "Básico", category: "DevOps" },
  // Soft Skills
  { name: "Scrum", icon: "/skills/Scrum.png", level: "Intermediário", category: "Soft Skill" },
  { name: "Kanban", icon: "/skills/Kanban.png", level: "Intermediário", category: "Soft Skill" },
  { name: "Comunicação", icon: "/skills/Comunicação.png", level: "Avançado", category: "Soft Skill" },
];

export const profileData = {
  name: "Richard Itsou Lima",
  role: "Desenvolvedor Full Stack | React & Next.js",
  summary: "Sou desenvolvedor Full Stack apaixonado por transformar problemas reais em soluções digitais eficientes.\nTrabalho com a stack JavaScript/TypeScript (React, Next.js, Node.js) e tenho experiência prática na construção de sistemas completos, do planejamento ao deploy.\nGosto de aprender na prática, enfrentar desafios complexos e entregar soluções que realmente fazem diferença para usuários e empresas.",
  contact: {
    email: "natsunokill188@gmail.com",
    phone: "https://wa.me/55449991087806",
    linkedin: "https://www.linkedin.com/in/richard-itsou-254725361/",
    github: "https://github.com/Richard-Sup-Dev",
  }
};