// src/types/project.type.ts

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string; // Opcional, se o projeto tiver um link ao vivo
    thumbnail?: string; // Opcional, se o projeto tiver uma miniatura
    imageUrl?: string; // Opcional
}