// src/components/Skills.tsx
import { mockSkills } from '@/components/data/mock-data';
// import { IconComponent } from '...'; // Se você tivesse um mapa de ícones

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-slate-50 mb-12">
        🛠️ Habilidades Técnicas
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {mockSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-slate-700 p-4 rounded-xl shadow-lg w-full sm:w-40 text-center transition-transform duration-300 hover:scale-105"
          >
            {/* Aqui você renderizaria o IconComponent usando skill.icon */}
            <div className="text-4xl text-cyan-400 mb-2">{skill.icon}</div> 
            <p className="text-lg font-semibold text-slate-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}