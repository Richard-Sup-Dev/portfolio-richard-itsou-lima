// src/components/data/mock-data.ts

import { Project } from "@/types/project.type";
import { Skill } from "@/types/skill.type";

// Definições de tipos (você precisará criar o arquivo 'types/project.type.ts' e 'types/skill.type.ts' mais tarde)

export const mockProjects: Project[] = [
  {
    title: "EcoConnect",
    description: "Plataforma de rastreamento e compensação de carbono para pequenas empresas.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/seuperfil/ecoconnect",
    liveUrl: "https://ecoconnect.app",
    imageUrl: "/images/ecoconnect.png",
  },
];

export const mockSkills: Skill[] = [
  { name: "TypeScript", icon: "TsIcon" },
  { name: "Next.js", icon: "NextJsIcon" },
  { name: "React", icon: "ReactIcon" },
];

export const profileData = {
    name: "Natsu Dragneel",
    role: "Desenvolvedor Full Stack | React & Next.js",
    summary: "Desenvolvedor apaixonado por criar experiências digitais de alto desempenho. Especializado na stack moderna JavaScript/TypeScript.",
    contact: {
        email: "natsu.dragneel@dev.com",
        linkedin: "https://linkedin.com/in/natsudragneel",
        github: "https://github.com/natsudragneel",
    }
};