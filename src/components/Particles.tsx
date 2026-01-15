import { useEffect, useState } from "react";

export default function Particles({ count }: { count: number }) {
  const [particles, setParticles] = useState<{ left: number; top: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full shadow-md"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${10 + i * 2}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
}
