"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Server,
  Globe,
  Cpu,
  Cloud,
  Layers,
  GitBranch,
  Terminal,
  Workflow,
  HexagonIcon,
} from "lucide-react";
import BackgroundEffects from "@/components/ui/background-effects";

// Define types for skill categories and skill card props
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Move skillCategories declaration before useEffect
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        {
          name: "Node.js",
          icon: <Terminal className="h-4 w-4" />,
          level: 90,
          color: "from-emerald-500 to-green-300",
        },
        {
          name: "Express",
          icon: <Code className="h-4 w-4" />,
          level: 85,
          color: "from-cyan-500 to-blue-300",
        },
        {
          name: "NestJS",
          icon: <Code className="h-4 w-4" />,
          level: 80,
          color: "from-pink-500 to-red-300",
        },
        {
          name: "TypeScript",
          icon: <Code className="h-4 w-4" />,
          level: 85,
          color: "from-indigo-500 to-blue-300",
        },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        {
          name: "MongoDB",
          icon: <Database className="h-4 w-4" />,
          level: 90,
          color: "from-emerald-500 to-green-300",
        },
        {
          name: "PostgreSQL",
          icon: <Database className="h-4 w-4" />,
          level: 85,
          color: "from-cyan-500 to-blue-300",
        },
        {
          name: "Redis",
          icon: <Database className="h-4 w-4" />,
          level: 75,
          color: "from-orange-500 to-red-300",
        },
        {
          name: "Elasticsearch",
          icon: <Database className="h-4 w-4" />,
          level: 70,
          color: "from-amber-500 to-yellow-300",
        },
      ],
    },
    {
      title: "DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        {
          name: "Docker",
          icon: <Layers className="h-4 w-4" />,
          level: 85,
          color: "from-cyan-500 to-blue-300",
        },
        {
          name: "Kubernetes",
          icon: <Layers className="h-4 w-4" />,
          level: 75,
          color: "from-indigo-500 to-blue-300",
        },
        {
          name: "AWS",
          icon: <Cloud className="h-4 w-4" />,
          level: 80,
          color: "from-amber-500 to-orange-300",
        },
        {
          name: "CI/CD",
          icon: <GitBranch className="h-4 w-4" />,
          level: 85,
          color: "from-emerald-500 to-green-300",
        },
      ],
    },
    {
      title: "Architecture",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        {
          name: "Microservices",
          icon: <Layers className="h-4 w-4" />,
          level: 85,
          color: "from-indigo-500 to-purple-300",
        },
        {
          name: "RESTful APIs",
          icon: <Globe className="h-4 w-4" />,
          level: 90,
          color: "from-cyan-500 to-blue-300",
        },
        {
          name: "GraphQL",
          icon: <Globe className="h-4 w-4" />,
          level: 80,
          color: "from-rose-500 to-pink-300",
        },
        {
          name: "System Design",
          icon: <Workflow className="h-4 w-4" />,
          level: 85,
          color: "from-blue-500 to-indigo-300",
        },
      ],
    },
  ];

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  // Automate rotating through categories
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, skillCategories.length]);

  // Skill level calculation with dynamic animation

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Background Effects */}
      <BackgroundEffects canvasId="particles-skills" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block"
            >
              <Badge
                variant="outline"
                className="mb-4 py-2 px-4 border-cyan-500/30 text-cyan-400 bg-cyan-900/10 backdrop-blur-sm"
              >
                Technical Proficiency Matrix
              </Badge>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Advanced Skill Set
            </h2>

            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              A dynamic showcase of my technical expertise across multiple
              domains of modern software development.
            </p>
          </motion.div>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 md:space-x-4 p-1 backdrop-blur-xl bg-white/5 rounded-full border border-white/10">
            {skillCategories.map((category, idx) => (
              <motion.button
                key={idx}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === idx
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setActiveCategory(idx)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span className="font-medium hidden md:inline">
                  {category.title}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-xl bg-gradient-to-br from-black/60 to-black/40 border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/5 overflow-hidden"
            >
              {/* Category Header */}
              <div className="px-8 py-6 border-b border-white/10 bg-gradient-to-r from-transparent to-blue-950/30">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    {skillCategories[activeCategory].icon}
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                    {skillCategories[activeCategory].title} Technologies
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-8 space-y-6">
                {skillCategories[activeCategory].skills.map(
                  (skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      index={skillIndex}
                    />
                  )
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating hexagonal particles for futuristic effect */}
        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 10 + 10}px`,
                color: `hsl(${Math.random() * 60 + 190}, 100%, 70%)`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <HexagonIcon />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Skill Bar Component
const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between mb-2 items-center">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${skill.color
              .replace("from-", "from-")
              .replace("to-", "to-")} shadow-lg`}
          >
            {skill.icon}
          </motion.div>
          <span className="font-medium text-lg">{skill.name}</span>
        </div>
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: hovered ? 1 : 0.7 }}
          className="flex items-center gap-2"
        >
          <span className="text-cyan-400 font-mono">{skill.level}%</span>
          <div
            className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        </motion.div>
      </div>

      <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden backdrop-blur-md border border-white/10">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
          initial={{ width: 0 }}
          animate={{
            width: hovered ? `${skill.level}%` : `${skill.level * 0.8}%`,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 opacity-60"
            animate={{
              background: [
                `linear-gradient(90deg, transparent 0%, ${skill.color
                  .split(" ")[1]
                  .replace("to-", "")} 50%, transparent 100%)`,
                `linear-gradient(90deg, transparent 100%, ${skill.color
                  .split(" ")[1]
                  .replace("to-", "")} 50%, transparent 0%)`,
              ],
              left: ["-50%", "150%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
