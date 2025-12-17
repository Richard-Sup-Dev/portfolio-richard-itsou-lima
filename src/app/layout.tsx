// src/app/layout.tsx (Versão Limpa para evitar Hydration Errors)

import type { Metadata } from "next";
import Header from "@/components/Header"; 
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olá, Seja Bem-Vindo ao Meu Portifolio - Portfólio Full Stack",
  description: "Portfólio de Richard Itsou Lima, Desenvolvedor Full Stack em React e Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Removendo comentários e espaçamento desnecessários dentro do <html> e <body>
    <html lang="pt-BR" className="scroll-smooth"> 
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        {/* O Footer será renderizado via children em page.tsx */}
      </body>
    </html>
  );
}