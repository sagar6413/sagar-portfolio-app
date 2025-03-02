"use client";
import {
  Code,
  Server,
  Github,
  ExternalLink,
  Terminal,
  Atom,
  Cpu,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import BackgroundEffects from "@/components/ui/background-effects";

export default function Projects() {
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.92 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  const projects = [
    {
      title: "Quantum Microservices",
      description:
        "Designed and implemented a next-gen microservices architecture for an e-commerce platform handling 10,000+ daily transactions with auto-scaling.",
      icon: Server,
      tags: [
        "Java",
        "Spring Boot",
        "Kafka",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
      color: "from-violet-500/90 to-indigo-600/90",
      gradient:
        "bg-gradient-radial from-violet-500/20 via-violet-500/5 to-transparent",
      accent: "border-violet-500/20",
      hoverAccent: "group-hover:border-violet-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]",
      stats: { throughput: "10K+", uptime: "99.99%", instances: 24 },
    },
    {
      title: "Neural Analytics API",
      description:
        "Built a high-performance API utilizing AI algorithms for real-time data analytics processing 5M+ events daily with sub-second response times.",
      icon: Atom,
      tags: ["Python", "FastAPI", "Redis", "TimescaleDB", "AWS", "TensorFlow"],
      color: "from-cyan-500/90 to-blue-600/90",
      gradient:
        "bg-gradient-radial from-cyan-500/20 via-cyan-500/5 to-transparent",
      accent: "border-cyan-500/20",
      hoverAccent: "group-hover:border-cyan-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      stats: { throughput: "5M+", latency: "<100ms", nodes: 12 },
    },
    {
      title: "Quantum Authentication",
      description:
        "Developed a secure, OAuth2-compliant authentication service with biometric verification, multi-factor authentication and zero-knowledge proof technology.",
      icon: Terminal,
      tags: [
        "Node.js",
        "Express",
        "JWT",
        "MongoDB",
        "Docker",
        "Zero-Knowledge",
      ],
      color: "from-emerald-500/90 to-teal-600/90",
      gradient:
        "bg-gradient-radial from-emerald-500/20 via-emerald-500/5 to-transparent",
      accent: "border-emerald-500/20",
      hoverAccent: "group-hover:border-emerald-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]",
      stats: { users: "500K+", protocols: 6, mfa: "99.8%" },
    },
    {
      title: "Metaverse Content API",
      description:
        "Created a flexible, headless CMS API with advanced content modeling, versioning, multi-language support and 3D asset management.",
      icon: Code,
      tags: [
        "Java",
        "Spring Boot",
        "Elasticsearch",
        "PostgreSQL",
        "AWS S3",
        "ThreeJS",
      ],
      color: "from-fuchsia-500/90 to-purple-600/90",
      gradient:
        "bg-gradient-radial from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",
      accent: "border-fuchsia-500/20",
      hoverAccent: "group-hover:border-fuchsia-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(192,38,211,0.5)]",
      stats: { content: "120TB", languages: 28, models: 46 },
    },
    {
      title: "Blockchain Payment System",
      description:
        "Implemented a secure payment processing system with distributed ledger technology, multiple gateway integrations and AI-powered fraud detection.",
      icon: Cpu,
      tags: ["Go", "gRPC", "PostgreSQL", "Redis", "Kubernetes", "Blockchain"],
      color: "from-rose-500/90 to-orange-600/90",
      gradient:
        "bg-gradient-radial from-rose-500/20 via-rose-500/5 to-transparent",
      accent: "border-rose-500/20",
      hoverAccent: "group-hover:border-rose-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]",
      stats: { transactions: "35M+", gateways: 8, success: "99.97%" },
    },
    {
      title: "Neural Pipeline Framework",
      description:
        "Built a scalable ETL framework with built-in AI for processing and transforming massive datasets with real-time monitoring and predictive error handling.",
      icon: Zap,
      tags: [
        "Python",
        "Apache Airflow",
        "Spark",
        "AWS",
        "Grafana",
        "TensorFlow",
      ],
      color: "from-amber-500/90 to-yellow-600/90",
      gradient:
        "bg-gradient-radial from-amber-500/20 via-amber-500/5 to-transparent",
      accent: "border-amber-500/20",
      hoverAccent: "group-hover:border-amber-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]",
      stats: { data: "200TB+", jobs: "1.2K", pipelines: 86 },
    },
  ];

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap((p) => p.tags))];

  // Filter projects by tag if a filter is set
  const filteredProjects = filterTag
    ? projects.filter((p) => p.tags.includes(filterTag))
    : projects;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Background Effects */}
      <BackgroundEffects canvasId="particles-projects" />

      <div className="container relative z-10">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block mb-5 px-6 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              <span className="text-indigo-400 mr-1">⚡</span> Next-Gen
              Engineering
            </span>
          </motion.div>
          {/* <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-200">
            Quantum-Era Solutions
          </h2>
          <p className="text-center text-slate-400 max-w-2xl text-lg md:text-xl mb-8 leading-relaxed">
            Pioneering systems engineered for the next dimension of digital
            experiences
          </p> */}

          {/* Animated filter tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-2 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <button
              onClick={() => setFilterTag(null)}
              className={`px-3 py-1.5 rounded-full text-xs backdrop-blur-lg transition-all duration-300 cursor-pointer ${
                filterTag === null
                  ? "bg-indigo-500/30 text-white border border-indigo-500/50 shadow-lg shadow-indigo-500/20"
                  : "bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:bg-slate-800/80 hover:text-slate-300 hover:border-slate-600"
              }`}
            >
              All Technologies
            </button>
            {allTags.map((tag, i) => (
              <button
                key={i}
                onClick={() => setFilterTag(tag === filterTag ? null : tag)}
                className={`px-3 py-1.5 rounded-full text-xs backdrop-blur-lg transition-all duration-300 cursor-pointer ${
                  filterTag === tag
                    ? "bg-indigo-500/30 text-white border border-indigo-500/50 shadow-lg shadow-indigo-500/20"
                    : "bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:bg-slate-800/80 hover:text-slate-300 hover:border-slate-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filterTag || "all"}
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative h-full"
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
              >
                {/* Orbital accent circles */}
                <motion.div
                  className={`absolute w-full h-full ${project.glow} pointer-events-none`}
                  style={{
                    opacity: hoverIndex === index ? 1 : 0,
                    zIndex: -1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="absolute w-4 h-4 rounded-full bg-white blur-sm top-1/4 left-0"
                    style={{ animation: "orbit 5s linear infinite" }}
                  />
                  <div
                    className="absolute w-3 h-3 rounded-full bg-white blur-sm bottom-1/4 right-0"
                    style={{ animation: "orbit 7s linear infinite reverse" }}
                  />
                </motion.div>

                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 filter blur-xl`}
                />

                {/* Card container with glass morphism */}
                <div
                  className={`relative h-full backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-3xl p-8 transition-all duration-300 border ${project.accent} ${project.hoverAccent} group-hover:shadow-xl group-hover:shadow-slate-900/50`}
                  style={{
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Moving shimmer effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent rounded-4xl opacity-0 group-hover:opacity-100 blur-sm group-hover:animate-shimmer"></div>

                  <div className="flex flex-col h-full relative z-10">
                    {/* Icon Header with glowing effect */}
                    <div className="flex items-start justify-between ">
                      <motion.div
                        className={`p-2 rounded-xl bg-gradient-to-br ${project.color} shadow-lg ${project.glow}`}
                        whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <project.icon className="w-4 h-4 text-white" />
                      </motion.div>
                      <div className="flex space-x-2">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs font-medium bg-slate-800/70 backdrop-blur-lg rounded-full border border-slate-700/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content with animated heading */}
                    <motion.h3
                      className="text-lg font-semibold mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-indigo-200 transition-all duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-slate-400 text-xs flex-grow leading-relaxed tracking-wide">
                      {project.description}
                    </p>

                    {/* Enhanced 3D-like stats panel */}
                    <div className="grid grid-cols-3 gap-2 mb-2 p-1 mt-2 rounded-2xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-slate-700/40 shadow-inner">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <motion.div
                          key={i}
                          className="flex flex-col items-center justify-center"
                          variants={fadeInUpVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-xs text-slate-500 mb-1 capitalize">
                            {key}
                          </span>
                          <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
                            {value}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack with interactive tags */}
                    <div className="mt-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className={`px-2 py-1 text-xs font-medium rounded-lg backdrop-blur-lg transition-colors duration-300 cursor-pointer ${
                              filterTag === tag
                                ? "bg-indigo-500/30 text-indigo-200 border border-indigo-500/40 shadow-sm shadow-indigo-500/20"
                                : "bg-slate-800/70 text-slate-400 border border-slate-700/50 hover:bg-slate-800/90 hover:text-slate-300 hover:border-slate-600/60"
                            }`}
                            onClick={() =>
                              setFilterTag(tag === filterTag ? null : tag)
                            }
                            whileHover={{ y: -2, scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Actions with animated links */}
                      <div className="flex justify-between items-center border-t border-slate-800/50 pt-1">
                        <motion.a
                          href="#"
                          className="flex items-center text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                          whileHover={{ x: 4, scale: 1.01 }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </motion.a>
                        <motion.a
                          href="#"
                          className="flex items-center text-xs font-medium px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Case Study
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced view more button with animated effects */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium shadow-xl transition-all duration-300 hover:shadow-indigo-500/30 border border-slate-700 hover:border-indigo-500/60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Multiple animated background layer effects */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600/80 via-violet-600/80 to-indigo-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0 ease-out"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600/30 to-fuchsia-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-full group-hover:translate-x-0 ease-out"></div>
            <div
              className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
              style={{ opacity: 0.1 }}
            ></div>

            {/* Button text with animation */}
            <span className="relative z-10 flex items-center justify-center text-center bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent font-semibold ">
              <span className="w-full ">Explore Full Portfolio</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
