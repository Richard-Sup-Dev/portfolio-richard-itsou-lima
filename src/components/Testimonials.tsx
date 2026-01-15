import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-20 max-w-4xl">
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-12 neon-text text-center">Depoimentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <blockquote className="bg-slate-900/80 border-l-4 border-cyan-400 p-6 rounded-xl shadow-lg">
          <p className="text-lg text-slate-200 mb-4">“Trabalhar com o Richard foi uma experiência incrível. Ele entrega rápido, com qualidade e sempre traz ideias inovadoras para o time.”</p>
          <footer className="text-cyan-300 font-bold">Ana Souza, Product Owner</footer>
        </blockquote>
        <blockquote className="bg-slate-900/80 border-l-4 border-cyan-400 p-6 rounded-xl shadow-lg">
          <p className="text-lg text-slate-200 mb-4">“Profissional dedicado, domina tecnologias modernas e tem ótima comunicação. Recomendo para qualquer projeto!”</p>
          <footer className="text-cyan-300 font-bold">Carlos Silva, Tech Lead</footer>
        </blockquote>
      </div>
    </section>
  );
}
