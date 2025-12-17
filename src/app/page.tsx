// src/app/page.tsx (Código final)

import Hero from "@/components/Hero";
import Projects from "@/components/Projects"; 
// IMPORTAR NOVOS COMPONENTES
import Skills from "@/components/Skills"; 
import Footer from "@/components/Footer"; 

export default function Home() {
  return (
    <>
      <Hero />
      
      <div className="border-t border-cyan-800 my-16 mx-auto max-w-6xl"></div> {/* Divisor */}

      <Projects />
      
      <div className="border-t border-cyan-800 my-16 mx-auto max-w-6xl"></div> {/* Divisor */}
      
      <Skills />
      
      <Footer />
    </>
  );
}