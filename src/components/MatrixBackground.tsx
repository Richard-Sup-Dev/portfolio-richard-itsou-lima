"use client";

import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = "01"; // Só 0 e 1 para dar aquele clima clássico do Matrix
    const charsArray = chars.split('');
    const fontSize = 16;
    let columns = canvas.width / fontSize;
    const drops: number[] = new Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Deixa o efeito de rastro suave
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#a855f7'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charsArray[Math.floor(Math.random() * charsArray.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40); // Mantém o efeito leve e fluido

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none"
    />
  );
}