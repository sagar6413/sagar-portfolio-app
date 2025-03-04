"use client";
import {
  Code,
  Server,
  Github,
  ExternalLink,
  Zap,
  Database,
  PlusCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import BackgroundEffects from "@/components/ui/background-effects";

export default function Projects() {
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { y: 20, opacity: 0 },
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
      title: "Real-Time Chat Application",
      description:
        "Developed a scalable real-time chat application backend using Spring Boot and WebSockets (STOMP). Features include message delivery guarantees (RabbitMQ), presence status, group chat, and real-time notifications. Implemented secure API access and authentication with JWT/OAuth2.",
      icon: Code,
      tags: [
        "Java",
        "Spring Boot",
        "WebSockets (STOMP)",
        "RabbitMQ",
        "PostgreSQL",
        "Redis",
        "JWT",
        "OAuth2",
      ],
      color: "from-emerald-500/90 to-teal-600/90",
      gradient:
        "bg-gradient-radial from-emerald-500/20 via-emerald-500/5 to-transparent",
      accent: "border-emerald-500/20",
      hoverAccent: "group-hover:border-emerald-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]",
      stats: { users: "Simulated", messages: "High Volume", latency: "Low" },
    },
    {
      title: "Scalable Notification Service",
      description:
        "Designed and implemented a distributed, event-driven notification service using Spring Boot, Kafka, and RabbitMQ. Supports multiple channels (Email, SMS, Push, Webhooks) with high availability and fault tolerance. Leverages PostgreSQL/Redis for persistent storage and caching, ensuring reliable delivery and data integrity.",
      icon: Zap,
      tags: [
        "Java",
        "Spring Boot",
        "Kafka",
        "RabbitMQ",
        "PostgreSQL",
        "Redis",
        "Email",
        "SMS",
        "Push Notifications",
        "Webhooks",
      ],
      color: "from-amber-500/90 to-yellow-600/90",
      gradient:
        "bg-gradient-radial from-amber-500/20 via-amber-500/5 to-transparent",
      accent: "border-amber-500/20",
      hoverAccent: "group-hover:border-amber-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]",
      stats: { channels: "4+", throughput: "High", availability: "High" },
    },
    {
      title: "Parking Management System (Backend)",
      description:
        "Developed the backend for a parking management system (500+ vehicles) during an internship. Features include intelligent spot allocation, presence-based updates, and JWT authentication. Streamlined parking operations and improved space utilization. Built using Spring Boot.",
      icon: Database,
      tags: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
      color: "from-violet-500/90 to-indigo-600/90",
      gradient:
        "bg-gradient-radial from-violet-500/20 via-violet-500/5 to-transparent",
      accent: "border-violet-500/20",
      hoverAccent: "group-hover:border-violet-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]",
      stats: { vehicles: "500+", features: "3+", type: "Internship Project" },
    },
    {
      title: "E-commerce Backend (Training Project)",
      description:
        "Built a functional e-commerce backend during Wipro training, utilizing Spring Boot. Includes user authentication, admin dashboard, product catalog, shopping cart, payment simulation, and order fulfillment.",
      icon: Server,
      tags: ["Java", "Spring Boot"],
      color: "from-cyan-500/90 to-blue-600/90",
      gradient:
        "bg-gradient-radial from-cyan-500/20 via-cyan-500/5 to-transparent",
      accent: "border-cyan-500/20",
      hoverAccent: "group-hover:border-cyan-500/60",
      glow: "drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      stats: { features: "5+", type: "Training Project" },
    },
    {
      title: "More Projects Coming Soon!",
      description:
        "Currently working on groundbreaking projects involving quantum-resistant cryptography, interdimensional data transfer, and self-aware AI systems. Stay tuned for updates!",
      icon: PlusCircle,
      tags: ["Quantum Computing", "Hyperspace", "AI Singularity", "????"],
      color: "from-gray-700/90 to-gray-900/90",
      gradient:
        "bg-gradient-radial from-gray-700/20 via-gray-700/5 to-transparent",
      accent: "border-gray-700/20",
      hoverAccent: "group-hover:border-gray-700/60",
      glow: "drop-shadow-[0_0_15px_rgba(156,163,175,0.5)]",
      stats: {
        dimensions: "11+",
        realityBends: "Infinite",
        paradoxes: "Countless",
      },
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
      className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Background Effects */}
      <BackgroundEffects canvasId="particles-projects" />

      <div className="container px-4 sm:px-6 mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-4 px-5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              <span className="text-indigo-400 mr-1">⚡</span> Next-Gen
              Engineering
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className="text-slate-400 text-center max-w-2xl mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            A collection of my most significant backend engineering work,
            showcasing expertise in distributed systems, messaging, and API
            design.
          </motion.p>

          {/* Filter Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <button
              onClick={() => setFilterTag(null)}
              className={`px-3 py-1.5 rounded-full text-xs backdrop-blur-lg transition-all duration-300 ${
                filterTag === null
                  ? "bg-indigo-500/30 text-white border border-indigo-500/50 shadow-md shadow-indigo-500/20"
                  : "bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:bg-slate-800/80 hover:text-slate-300 hover:border-slate-600"
              }`}
            >
              All Technologies
            </button>
            {allTags.slice(0, 10).map((tag, i) => (
              <button
                key={i}
                onClick={() => setFilterTag(tag === filterTag ? null : tag)}
                className={`px-3 py-1.5 rounded-full text-xs backdrop-blur-lg transition-all duration-300 ${
                  filterTag === tag
                    ? "bg-indigo-500/30 text-white border border-indigo-500/50 shadow-md shadow-indigo-500/20"
                    : "bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:bg-slate-800/80 hover:text-slate-300 hover:border-slate-600"
                }`}
              >
                {tag}
              </button>
            ))}
            {allTags.length > 10 && (
              <button className="px-3 py-1.5 rounded-full text-xs bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:bg-slate-800/80 hover:text-slate-300 hover:border-slate-600 backdrop-blur-lg transition-all duration-300">
                +{allTags.length - 10} more
              </button>
            )}
          </motion.div>
        </motion.div>

        {/* Projects Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filterTag || "all"}
            className="flex flex-wrap justify-center gap-5 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)] mb-2"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
              >
                {/* Card with improved layout */}
                <div className="relative h-full group">
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 ${project.glow} opacity-0 group-hover:opacity-70 rounded-2xl blur-md transition-opacity duration-500`}
                    style={{
                      opacity: hoverIndex === index ? 0.7 : 0,
                      zIndex: 0,
                    }}
                  />

                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 rounded-2xl ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 filter blur-xl`}
                  />

                  {/* Card content */}
                  <div
                    className={`relative h-full backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-2xl p-6 transition-all duration-300 border ${project.accent} ${project.hoverAccent} group-hover:shadow-xl overflow-hidden flex flex-col`}
                    style={{ backdropFilter: "blur(20px)" }}
                  >
                    {/* Moving shimmer effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-sm group-hover:animate-shimmer" />

                    <div className="flex flex-col h-full relative z-10">
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-3">
                        <motion.div
                          className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} shadow-lg ${project.glow}`}
                          whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <project.icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex space-x-2">
                          {project.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-0.5 text-[10px] font-medium bg-slate-800/70 backdrop-blur-lg rounded-full border border-slate-700/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title with better animation */}
                      <motion.h3
                        className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-indigo-200 transition-all duration-300"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description with proper line height and margin */}
                      <p className="text-slate-400 text-sm flex-grow leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Stats panel with better spacing */}
                      <div className="flex mb-4 px-3 py-2 rounded-xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-slate-700/40 shadow-inner">
                        {Object.entries(project.stats).map(
                          ([key, value], i) => (
                            <motion.div
                              key={i}
                              className="flex flex-col items-center justify-center flex-1 p-1"
                              variants={fadeInUpVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="text-[10px] text-slate-500 mb-1 capitalize">
                                {key}
                              </span>
                              <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
                                {value}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>

                      {/* Tech Stack with better tag layout */}
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 6).map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className={`px-2 py-1 text-[10px] font-medium rounded-lg backdrop-blur-lg transition-colors duration-300 cursor-pointer ${
                                filterTag === tag
                                  ? "bg-indigo-500/30 text-indigo-200 border border-indigo-500/40"
                                  : "bg-slate-800/70 text-slate-400 border border-slate-700/50 hover:bg-slate-800/90 hover:text-slate-300"
                              }`}
                              onClick={() =>
                                setFilterTag(tag === filterTag ? null : tag)
                              }
                              whileHover={{ y: -2, scale: 1.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                          {project.tags.length > 6 && (
                            <span className="px-2 py-1 text-[10px] font-medium rounded-lg bg-slate-800/70 text-slate-400 border border-slate-700/50">
                              +{project.tags.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action buttons with better alignment */}
                      <div className="flex justify-between items-center border-t border-slate-800/50 pt-3">
                        <motion.a
                          href="#"
                          className="flex items-center text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                          whileHover={{ x: 3, scale: 1.01 }}
                        >
                          <Github className="w-3.5 h-3.5 mr-1.5" />
                          View Code
                        </motion.a>
                        <motion.a
                          href="#"
                          className="flex items-center text-xs font-medium px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Case Study
                          <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className="group relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium shadow-xl transition-all duration-300 border border-slate-700 hover:border-indigo-500/60"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button background effects */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600/80 via-violet-600/80 to-indigo-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0 ease-out" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600/30 to-fuchsia-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-full group-hover:translate-x-0 ease-out" />

            {/* Grid pattern background */}
            <div
              className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
              style={{ opacity: 0.1 }}
            />

            {/* Button text */}
            <span className="relative z-10 flex items-center justify-center text-center bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent font-semibold">
              Explore Full Portfolio
              <ExternalLink className="w-4 h-4 ml-2" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
