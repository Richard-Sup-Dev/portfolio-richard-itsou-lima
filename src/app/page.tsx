import Hero from "@/components/Hero";
import Projects from "@/components/Projects"; 
import Skills from "@/components/Skills"; 
import Footer from "@/components/Footer"; 
import MatrixBackground from "@/components/MatrixBackground"; 

export default function Home() {
  return (
    <div className="relative">
      {/* Fundo Matrix em TODO o site */}
      <MatrixBackground />

      {/* Overlay escuro pra tudo destacar (ajusta /50 pra mais ou menos opacidade) */}
      <div className="fixed inset-0 bg-black/60 -z-40 pointer-events-none" />

      {/* Conteúdo normal */}
      <div className="relative z-10">
        <Hero />
        
        <div className="border-t border-cyan-800/50 my-20 mx-auto max-w-6xl"></div>

        <Projects />
        
        <div className="border-t border-cyan-800/50 my-20 mx-auto max-w-6xl"></div>
        
        <Skills />
        
        <Footer />
      </div>
    </div>
  );
}