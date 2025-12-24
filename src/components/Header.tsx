'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#hero' },
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
      const scrollPosition = window.scrollY + 100; // offset pro header não atrapalhar

      let current = 'hero';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top <= scrollPosition) {
          current = link.href.replace('#', '');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // chama na primeira vez
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl shadow-lg transition-all duration-300">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-extrabold text-cyan-400 hover:text-cyan-300 transition-all duration-300"
        >
          Richard Dev
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-lg font-medium transition-all duration-300 group ${
                activeSection === link.href.replace('#', '') 
                  ? 'text-cyan-400' 
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {link.name}
              <span 
                className={`absolute left-0 bottom-[-6px] h-[3px] bg-cyan-400 transition-all duration-400 ease-out ${
                  activeSection === link.href.replace('#', '') 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden text-cyan-400 p-2 rounded-lg hover:bg-slate-800 transition"
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
                className="px-6 py-4 text-lg text-slate-200 hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
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