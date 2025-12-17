// src/components/Header.tsx
'use client'; 

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-800/90 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo/Nome */}
        <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
          Richard Dev
        </Link>

        {/* Links de Desktop - Classes aplicadas diretamente */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // Classes do .nav-link aplicadas diretamente
              className="text-lg text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botão do Menu Mobile */}
        <button
          className="md:hidden text-slate-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu Mobile (Dropdown) - Classes aplicadas diretamente */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg pb-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // Classes do .nav-link aplicadas diretamente
              className="block px-4 py-2 text-base text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)} 
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}