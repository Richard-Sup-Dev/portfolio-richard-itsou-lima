// src/types/skill.type.ts

export interface Skill {
    name: string;
    icon: string;
    level: 'Básico' | 'Intermediário' | 'Avançado' | 'Especialista';
}