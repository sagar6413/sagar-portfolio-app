"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
}

interface BackgroundEffectsProps {
  particleColor?: string;
  particleCount?: number;
  canvasId?: string;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  particleColor = "rgba(134, 239, 172, %opacity%)",
  particleCount = 50,
  canvasId = "particles",
}) => {
  const canvasIdRef = useRef(
    canvasId + "-" + Math.random().toString(36).substring(2, 9)
  );

  useEffect(() => {
    // Particles animation setup
    const createParticles = () => {
      const canvas = document.getElementById(
        canvasIdRef.current
      ) as HTMLCanvasElement;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const opacity = Math.random() * 0.4 + 0.1;
        const color = particleColor.replace("%opacity%", opacity.toString());

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: color,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        });
      }

      function animate() {
        if (!ctx) return;
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          particle.x += particle.speedX;
          particle.y += particle.speedY;

          if (particle.x < 0 || particle.x > canvas.width)
            particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height)
            particle.speedY *= -1;
        });
      }

      animate();
    };

    createParticles();

    window.addEventListener("resize", createParticles);
    return () => window.removeEventListener("resize", createParticles);
  }, [particleColor, particleCount]);

  return (
    <>
      {/* Particle Canvas */}
      <canvas
        id={canvasIdRef.current}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Glowing Orbs */}
      <div
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-primary/10 blur-[150px] animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-[120px] animate-pulse"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-blue-500/5 blur-[100px] animate-pulse"
        style={{ animationDuration: "12s" }}
      />

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-beam" />
          <div className="absolute top-1/3 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent animate-beam delay-150" />
          <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-beam delay-300" />

          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-verticalBeam" />
          <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-verticalBeam delay-200" />
        </div>
      </div>
    </>
  );
};

export default BackgroundEffects;
