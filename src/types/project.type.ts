// Tipagem para os projetos do portfólio

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string; // Link do projeto ao vivo (opcional)
    thumbnail?: string; // Miniatura do projeto (opcional)
    imageUrl?: string; // Imagem extra (opcional)
}