// src/types/project.type.ts

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string; // Opcional, se o projeto tiver um link ao vivo
    imageUrl?: string; // Opcional
}