'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import HeaderMobile from './HeaderMobile';

const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre Mim', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Atualiza o link ativo conforme a rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map(link => {
          const el = document.querySelector(link.href);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            id: link.href.replace('#', ''),
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY
          };
        })
        .filter((section): section is { id: string; top: number; bottom: number } => section !== null);

      const scrollY = window.scrollY + window.innerHeight / 4; // Ativa antes do topo
      let current = 'hero';
      for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const nextSection = sections[i + 1];
        if (!currentSection) continue;
        const { top, id } = currentSection;
        const nextTop = nextSection ? nextSection.top : Infinity;
        if (scrollY >= top && scrollY < nextTop) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Atualiza o link ativo ao clicar
  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <>
      {/* Header Mobile (aparece só em telas pequenas) */}
      <div className="md:hidden">
        <HeaderMobile onMenuClick={() => setIsOpen(!isOpen)} />
      </div>
      {/* Header Desktop (aparece só em telas médias e grandes) */}
      <header className="hidden md:block sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-md transition-all duration-200 border-b-2 border-cyan-800/40 w-full">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-extrabold text-cyan-400 hover:text-cyan-300 transition-all duration-200 neon-text"
          >
            Richard Itsou Lima
          </Link>
          {/* Links Desktop */}
          <div className="flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(id)}
                  className={`relative text-lg font-extrabold transition-all duration-200 group neon-text ${
                    activeSection === id ? 'text-cyan-400' : 'text-slate-200 hover:text-cyan-300'
                  }`}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1.5 h-0.75 bg-cyan-400 transition-all duration-200 ease-out ${
                      activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}