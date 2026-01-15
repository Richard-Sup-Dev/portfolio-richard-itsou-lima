'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  // Detecta qual seção está na tela e destaca o link
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => {
        const el = document.querySelector(link.href);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        if (!rect) return null;
        return {
          id: link.href.replace('#', ''),
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY
        };
      }).filter(Boolean);

      const scrollY = window.scrollY + window.innerHeight / 4; // offset para ativar antes do topo
      let current = 'hero';
      for (let i = 0; i < sections.length; i++) {
        if (scrollY >= sections[i].top && scrollY < (sections[i + 1]?.top ?? Infinity)) {
          current = sections[i].id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Corrige o activeSection ao clicar em um link
  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-md transition-all duration-200 border-b-2 border-cyan-800/40">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-extrabold text-cyan-400 hover:text-cyan-300 transition-all duration-200 neon-text"
        >
          Richard Itsou Lima
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(id)}
                className={`relative text-lg font-extrabold transition-all duration-200 group neon-text ${
                  activeSection === id
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1.5 h-0.75 bg-cyan-400 transition-all duration-200 ease-out ${
                    activeSection === id
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden text-cyan-400 p-2 rounded-lg hover:bg-slate-800 transition duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg shadow-2xl">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-6 py-4 text-lg text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}