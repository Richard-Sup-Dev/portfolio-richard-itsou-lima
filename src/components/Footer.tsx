// src/components/Footer.tsx
import { profileData } from '@/components/data/mock-data';
import Link from 'next/link';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Footer() {
  const { contact } = profileData;

  return (
    <footer id="contact" className="bg-slate-900 border-t border-cyan-800 mt-16">
      <div className="container mx-auto px-4 py-12 text-center">
        
        <h2 className="text-4xl font-bold text-slate-50 mb-4">
          Vamos Conversar!
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Tenho experiência em resolver desafios complexos e criar soluções performáticas. Se você tem um projeto em mente, entre em contato.
        </p>

        {/* Informações de Contato */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <Link 
            href={`mailto:${contact.email}`} 
            className="flex items-center justify-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <Mail size={20} />
            {contact.email}
          </Link>
          
          {contact.phone && (
            <div className="flex items-center justify-center gap-2 text-slate-300">
                <Phone size={20} />
                {contact.phone}
            </div>
          )}
        </div>

        {/* Links Sociais no Footer */}
        <div className="flex gap-6 justify-center mb-10">
          <Link href={contact.linkedin} target="_blank" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={30} />
          </Link>
          <Link href={contact.github} target="_blank" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Github size={30} />
          </Link>
        </div>
        
        {/* Direitos Autorais */}
        <p className="text-sm text-slate-500 mt-8">
          © {new Date().getFullYear()} Natsu Dev. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}