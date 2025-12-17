// src/app/layout.tsx 

import type { Metadata } from "next";
import Header from "@/components/Header"; 
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Metadados ajustados
export const metadata: Metadata = {
  title: "Richard Lima | Desenvolvedor Full Stack",
  description: "Portfólio de Richard Itsou Lima, Desenvolvedor Full Stack em React e Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Versão Limpa para evitar erros de hidratação
    <html lang="pt-BR" className="scroll-smooth"> 
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}