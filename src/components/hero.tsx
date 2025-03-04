"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  Code,
  Cpu,
  Database,
  Terminal,
  Cloud,
  ChevronRight,
  Globe,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
}

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    setIsVisible(true);

    // Particles animation setup
    const createParticles = () => {
      const canvas = document.getElementById("particles") as HTMLCanvasElement;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: Particle[] = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: `rgba(134, 239, 172, ${Math.random() * 0.4 + 0.1})`,
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
  }, []);

  const techStack = [
    {
      name: "Java",
      icon: <Terminal className="w-4 h-4" />,
      description: "Building scalable applications",
    },
    {
      name: "Spring Boot",
      icon: <Code className="w-4 h-4" />,
      description: "Fast, robust backend development",
    },
    {
      name: "SQL",
      icon: <Database className="w-4 h-4" />,
      description: "SQL database for modern applications",
    },
    {
      name: "No SQL",
      icon: <Cloud className="w-4 h-4" />,
      description: "NoSQL database for modern applications",
    },
    {
      name: "Microservices",
      icon: <Cpu className="w-4 h-4" />,
      description: "Distributed system architecture",
    },
    {
      name: "API Design",
      icon: <Server className="w-4 h-4" />,
      description: "RESTful and GraphQL API development",
    },
    {
      name: "Docker",
      icon: <Globe className="w-4 h-4" />,
      description: "Container orchestration at scale",
    },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const projectsSection = document.getElementById("contact");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Particle Canvas */}
      <canvas id="particles" className="absolute inset-0 pointer-events-none" />

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

      <div className="container relative z-10">
        <motion.div
          style={{
            y: contentY,
          }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400 animate-gradient">
                Sagar Shrivastava
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build robust, scalable backend systems with a focus on
              performance, security, and elegant architecture that drives modern
              applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r cursor-pointer from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 border-none shadow-lg shadow-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
                onClick={scrollToProjects}
              >
                <span>View Projects</span>
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="border border-primary/50 cursor-pointer text-primary hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-md hover:shadow-primary/10"
                onClick={scrollToContact}
              >
                <span>Contact Me</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/sagar6413"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/linktosagar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative backdrop-blur-xl bg-background/20 rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden hover:shadow-primary/20 transition-shadow duration-300 hover:border-primary/30">
              <div className="flex items-center justify-between px-4 py-3 bg-muted/30 backdrop-blur-md border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">developer.js</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Terminal Window with Typing Effect */}
              <pre className="px-4 py-4 text-left overflow-x-auto text-xs sm:text-sm leading-snug">
                <TypingEffect
                  text={`const developer = {
  name: 'Sagar Shrivastava',
  role: 'Backend Engineer',
  skills: [
    'Java',
    'JavaScript',
    'Spring Boot',
    'ReactJS',
    'WebSockets (STOMP)',
    'SQL + NoSQL DB',
    'Kafka',
    'RabbitMQ',
    ],
  focus: 'Building scalable and reliable backend systems using Java and Spring technologies', 
};

// Available for new opportunities
developer.contact();`}
                />
              </pre>

              {/* Animated Cursor */}
              <div className="absolute bottom-5 right-5 h-4 w-2 bg-primary/80 animate-blink" />

              {/* Floating Elements */}
              <div
                className="absolute top-16 right-4 w-16 h-16 rounded-full border border-primary/30 opacity-20 animate-float"
                style={{ animationDuration: "15s" }}
              />
              <div
                className="absolute bottom-16 left-10 w-8 h-8 rounded-full border border-emerald-500/30 opacity-20 animate-float"
                style={{ animationDuration: "12s", animationDelay: "2s" }}
              />
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-row flex-wrap justify-center gap-2 mt-6 z-20 w-full max-w-[90vw] mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="relative max-w-[200px] sm:max-w-none mx-auto"
                  onMouseEnter={() => setHoveredSkill(tech.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-primary/20 text-xs font-medium shadow-lg shadow-primary/5 hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 hover:bg-background/90 group whitespace-nowrap">
                    <span className="text-primary opacity-80 group-hover:opacity-100">
                      {tech.icon}
                    </span>
                    <span className="group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredSkill === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-background/90 backdrop-blur-md border border-primary/20 rounded-lg shadow-lg text-xs whitespace-nowrap z-50"
                      >
                        {tech.description}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-background/90 border-r border-b border-primary/20" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Typing Effect Component
const TypingEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, Math.random() * 20 + 10); // Random typing speed for realistic effect

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <code className="text-muted-foreground text-xs leading-0">
      {displayedText.split("\n").map((line, lineIndex) => {
        // Process each line to apply syntax highlighting
        const processedLine = line
          .replace(/(['"].*?['"])/g, '<span class="text-green-400">$1</span>')
          .replace(
            /(\{|\}|\[|\]|\(|\)|,|:|;)/g,
            '<span class="text-muted-foreground">$1</span>'
          )
          .replace(/(\/\/.*)/g, '<span class="text-slate-500">$1</span>');

        return (
          <React.Fragment key={lineIndex}>
            <span dangerouslySetInnerHTML={{ __html: processedLine }} />
            <br />
          </React.Fragment>
        );
      })}
    </code>
  );
};

export default Hero;
