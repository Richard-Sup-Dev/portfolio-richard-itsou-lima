import Link from 'next/link';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre Mim', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

export default function HeaderMobile({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-md border-b-2 border-cyan-800/40 w-full flex items-center justify-between px-4 py-3 md:hidden">
      <Link href="/" className="text-2xl font-extrabold text-cyan-400 neon-text">
        Richard Itsou Lima
      </Link>
      <button onClick={onMenuClick} aria-label="Abrir menu" className="text-cyan-400 p-2 rounded-lg hover:bg-slate-800 transition">
        <Menu size={32} />
      </button>
    </header>
  );
}
