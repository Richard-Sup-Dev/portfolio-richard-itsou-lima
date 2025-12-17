// src/components/Hero.tsx
import { profileData } from '@/components/data/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react'; 

export default function Hero() {
  const { name, role, summary, contact } = profileData;

  return (
    <section 
      id="hero" 
      className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
        
        {/* Lado Esquerdo: Texto e Botões */}
        <div className="md:w-3/5 text-center md:text-left space-y-6">
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-50">
            Olá, eu sou <span className="text-cyan-400">{name}</span>.
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
            {role}
          </h2>
          
          <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
            {summary}
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-cyan-500 text-slate-900 font-bold rounded-lg shadow-lg hover:bg-cyan-400 transition-transform duration-300 transform hover:scale-105 shadow-neon"
            >
              Fale Comigo
            </Link>
            
            <Link 
              href={contact.github} 
              target="_blank" 
              className="px-6 py-3 border border-slate-500 text-slate-50 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Ver GitHub
            </Link>
          </div>

          {/* Links Sociais (Ícones) */}
          <div className="flex gap-4 justify-center md:justify-start pt-6">
            <Link href={`mailto:${contact.email}`} aria-label="Email" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <Mail size={28} />
            </Link>
            <Link href={contact.linkedin} target="_blank" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <Linkedin size={28} />
            </Link>
            <Link href={contact.github} target="_blank" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <Github size={28} />
            </Link>
          </div>
        </div>

        {/* Lado Direito: Imagem (Placeholder) */}
        <div className="md:w-2/5 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-700 rounded-full flex items-center justify-center border-4 border-cyan-400 shadow-xl shadow-cyan-900/50 overflow-hidden">
            <span className="text-slate-300 text-lg">Sua Foto Aqui</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}