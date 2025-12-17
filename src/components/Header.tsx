// src/components/Header.tsx
'use client'; // Um componente de navegação que interage com a tela deve ser um Client Component

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Importa ícones (se tiver instalado o lucide-react, senão, apenas remova o import)

// Dados de navegação
const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Certifique-se de que a tag 'nav' está no elemento principal para acessibilidade
  return (
    <header className="sticky top-0 z-50 bg-slate-800/90 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo/Nome */}
        <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
          Natsu Dev
        </Link>

        {/* Links de Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link text-lg" // 'nav-link' é a classe personalizada do globals.css
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

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg pb-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link block px-4 py-2 text-base"
              onClick={() => setIsOpen(false)} // Fecha ao clicar
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}