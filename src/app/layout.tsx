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
  keywords: [
    "Richard Lima", "Portfólio", "Desenvolvedor", "Full Stack", "React", "Next.js", "TypeScript", "Dashborn", "Projetos", "Web Developer"
  ],
  openGraph: {
    title: "Richard Lima | Desenvolvedor Full Stack",
    description: "Portfólio de Richard Itsou Lima, projetos, skills e certificações.",
    url: "https://richard.dev", // ajuste para seu domínio real
    siteName: "Richard Lima Portfolio",
    images: [
      {
        url: "/projects/dashborn.jpg",
        width: 1200,
        height: 630,
        alt: "Dashboard do projeto Dashborn"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Lima | Desenvolvedor Full Stack",
    description: "Portfólio de Richard Itsou Lima, projetos, skills e certificações.",
    images: ["/projects/dashborn.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Versão Limpa para evitar erros de hidratação
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Portfólio de Richard Itsou Lima - Desenvolvedor Full Stack especializado em React, Next.js e Node.js." />
            <meta name="author" content="Richard Itsou Lima" />
            <meta property="og:title" content="Richard Itsou Lima - Portfólio" />
            <meta property="og:description" content="Desenvolvedor Full Stack focado em produtos digitais robustos, escaláveis e bem estruturados." />
            <meta property="og:image" content="/RichardCartoon.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://seu-dominio.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Richard Itsou Lima - Portfólio" />
            <meta name="twitter:description" content="Desenvolvedor Full Stack focado em produtos digitais robustos, escaláveis e bem estruturados." />
            <meta name="twitter:image" content="/RichardCartoon.jpg" />
            <title>Richard Itsou Lima - Portfólio</title>
      </head>
      <body className={inter.className + " antialiased focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"}>
        <Header />
        <main tabIndex={-1} aria-label="Conteúdo principal">{children}</main>
      </body>
    </html>
  );
}