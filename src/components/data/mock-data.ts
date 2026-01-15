// Dados de projetos e skills para exibição no portfólio

import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";

export const mockProjects: Project[] = [
  {
    title: "EcoConnect",
    description: "Plataforma de rastreamento e compensação de carbono para pequenas empresas, com foco em relatórios de sustentabilidade e metas ODS.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Richard-Sup-Dev/ecoconnect",
    liveUrl: "https://ecoconnect.app",
    thumbnail: "/projects/ecoconnect.jpg", // Imagem do projeto (adicione uma imagem real depois se quiser)
  },
  {
    title: "Financial Flow",
    description: "Aplicativo móvel de gerenciamento financeiro pessoal com visualização de gastos em tempo real e orçamentos baseados em IA.",
    techStack: ["React Native", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/Richard-Sup-Dev/financial-flow",
    liveUrl: "https://play.google.com/financialflow",
    thumbnail: "/projects/financialflow.jpg", // Imagem do projeto (adicione uma imagem real depois se quiser)
  },
];

export const mockSkills: Skill[] = [
  // Skills separadas por categoria para exibição organizada
  { name: "TypeScript", icon: "/skills/TypeScript.png", category: "Frontend" },
  { name: "Next.js", icon: "/skills/Next.js.png", category: "Frontend" },
  { name: "React", icon: "/skills/React.png", category: "Frontend" },
  { name: "Tailwind CSS", icon: "/skills/Tailwind CSS.png", category: "Frontend" },
  { name: "Node.js", icon: "/skills/Node.js.png", category: "Backend" },
  { name: "PostgreSQL", icon: "/skills/PostgreSQL.png", category: "Backend" },
  { name: "SQLite", icon: "/skills/SQLite.png", category: "Backend" },
  { name: "Docker", icon: "/skills/Docker.png", category: "DevOps" },
  { name: "GitHub", icon: "/skills/GitHub.png", category: "DevOps" },
  { name: "AWS", icon: "/skills/AWS.png", category: "DevOps" },
  { name: "Scrum", icon: "/skills/Scrum.png", category: "Soft Skill" },
  { name: "Kanban", icon: "/skills/Kanban.png", category: "Soft Skill" },
  { name: "Comunicação", icon: "/skills/Comunicação.png", category: "Soft Skill" },
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