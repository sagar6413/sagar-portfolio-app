"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Server, Database, Shield, Zap, MessageSquare, Users, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import BackgroundEffects from "@/components/ui/background-effects";

export default function WhisprProject() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Track visibility for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  // Technical architecture components
  const architectureComponents = [
    {
      title: "Frontend",
      description: "React-based SPA with Redux for state management and Socket.io for real-time communication. Features a responsive, minimalist UI with end-to-end encryption for message privacy.",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend",
      description: "Spring Boot microservices architecture with WebSockets (STOMP) for real-time messaging. Implements JWT/OAuth2 for authentication and authorization.",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Data Layer",
      description: "PostgreSQL for persistent storage with Redis for caching and session management. Implements efficient data models for messages, users, and channels.",
      icon: Database,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Message Broker",
      description: "RabbitMQ for reliable message delivery with guaranteed ordering and at-least-once delivery semantics. Handles high throughput with minimal latency.",
      icon: MessageSquare,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Security Layer",
      description: "End-to-end encryption for messages with secure key exchange. Implements robust authentication, authorization, and data protection measures.",
      icon: Shield,
      color: "from-rose-500 to-pink-500",
    },
    {
      title: "Scalability",
      description: "Horizontally scalable architecture with load balancing and service discovery. Designed for high availability and fault tolerance.",
      icon: Users,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  // Key features
  const keyFeatures = [
    "Real-time messaging with typing indicators and read receipts",
    "End-to-end encryption for private conversations",
    "Group chat with role-based permissions",
    "Message persistence with history loading",
    "Presence status and last seen indicators",
    "Push notifications for new messages",
    "Media sharing with preview capabilities",
    "Message reactions and replies",
    "User profiles and avatars",
    "Search functionality for messages and users",
  ];

  // Technical challenges
  const technicalChallenges = [
    {
      challenge: "Ensuring Message Delivery",
      solution: "Implemented RabbitMQ with acknowledgment mechanisms and dead letter queues to guarantee message delivery even during service disruptions.",
    },
    {
      challenge: "Real-time Performance at Scale",
      solution: "Optimized WebSocket connections with connection pooling and implemented efficient binary protocols for message transmission.",
    },
    {
      challenge: "End-to-End Encryption",
      solution: "Designed a secure key exchange system using asymmetric encryption for initial handshake and symmetric encryption for ongoing messages.",
    },
    {
      challenge: "Handling Network Disconnections",
      solution: "Created a robust reconnection strategy with message queuing on the client side to prevent message loss during connectivity issues.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Background Effects */}
      <BackgroundEffects canvasId="particles-whispr-project" />

      <div className="container px-4 sm:px-6 mx-auto max-w-6xl relative z-10">
        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200 transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <motion.div
          className={`flex flex-col items-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="inline-flex items-center gap-2 bg-black/40 px-5 py-3 rounded-full mb-4 backdrop-blur-md border border-emerald-500/30 shadow-lg shadow-emerald-500/10 group hover:bg-emerald-900/40 transition-all duration-500">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 group-hover:from-emerald-300 group-hover:to-teal-200 transition-all duration-500">
              Featured Project
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-100 text-center">
            Whispr
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-emerald-100/80 text-center">
            Secure Incognito Chat Application
          </h2>

          <div className="relative">
            <p className="text-center text-emerald-100/80 max-w-3xl mb-6 text-medium backdrop-blur-sm">
              A scalable, real-time chat application with end-to-end encryption, built with Spring Boot, WebSockets, and React. Featuring secure messaging, presence status, and group chat capabilities.
            </p>
            <div className="absolute -left-6 -top-4 w-4 h-4 rounded-full bg-emerald-500/30 blur-md animate-pulse"></div>
            <div
              className="absolute -right-8 -bottom-4 w-6 h-6 rounded-full bg-teal-500/30 blur-md animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {[
              "Java",
              "Spring Boot",
              "WebSockets",
              "RabbitMQ",
              "PostgreSQL",
              "Redis",
              "React",
              "Redux",
            ].map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-black/30 text-emerald-300/90 rounded-full border border-emerald-500/20 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/sagar6413"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/30 transition-all duration-300 backdrop-blur-md group"
            >
              <Github size={16} />
              <span>View Code</span>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://whipsr-frontend.vercel.app/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 group"
            >
              <Zap size={16} />
              <span>Live Demo</span>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          className="mb-16 backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-500 relative overflow-hidden"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-lg" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-teal-500/40 rounded-br-lg" />

          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white">
            Project Overview
          </h3>

          <div className="space-y-4 text-emerald-100/80">
            <p>
              Whispr is a secure, real-time chat application designed for privacy-conscious users. Built with a focus on security, performance, and scalability, it provides a seamless messaging experience with end-to-end encryption.
            </p>
            <p>
              The application features a microservices architecture with Spring Boot on the backend and a React-based frontend. It leverages WebSockets for real-time communication, RabbitMQ for guaranteed message delivery, and PostgreSQL/Redis for data persistence and caching.
            </p>
            <p>
              Key capabilities include private messaging, group chats, presence status, message history, and media sharing—all protected by robust security measures including JWT authentication and end-to-end encryption.
            </p>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          className="mb-16 backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-500 relative overflow-hidden"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-emerald-500/40 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-teal-500/40 rounded-bl-lg" />

          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white">
            Value Proposition
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-black/20 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group">
              <h4 className="text-lg font-medium mb-3 text-emerald-200 group-hover:text-emerald-100 transition-colors duration-300">
                Privacy-First Approach
              </h4>
              <p className="text-emerald-100/70 group-hover:text-emerald-100/90 transition-colors duration-300">
                End-to-end encryption ensures that only the intended recipients can read messages, with no server-side access to decrypted content.
              </p>
            </div>

            <div className="bg-black/20 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group">
              <h4 className="text-lg font-medium mb-3 text-emerald-200 group-hover:text-emerald-100 transition-colors duration-300">
                Reliable Message Delivery
              </h4>
              <p className="text-emerald-100/70 group-hover:text-emerald-100/90 transition-colors duration-300">
                RabbitMQ integration ensures messages are never lost, even during service disruptions or network connectivity issues.
              </p>
            </div>

            <div className="bg-black/20 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group">
              <h4 className="text-lg font-medium mb-3 text-emerald-200 group-hover:text-emerald-100 transition-colors duration-300">
                Seamless Real-Time Experience
              </h4>
              <p className="text-emerald-100/70 group-hover:text-emerald-100/90 transition-colors duration-300">
                WebSocket implementation provides instant message delivery with typing indicators and read receipts for a responsive user experience.
              </p>
            </div>

            <div className="bg-black/20 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group">
              <h4 className="text-lg font-medium mb-3 text-emerald-200 group-hover:text-emerald-100 transition-colors duration-300">
                Scalable Architecture
              </h4>
              <p className="text-emerald-100/70 group-hover:text-emerald-100/90 transition-colors duration-300">
                Microservices design allows for independent scaling of components to handle varying loads and ensure high availability.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technical Architecture */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white text-center">
            Technical Architecture
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-xl bg-black/30 p-6 rounded-2xl border border-emerald-500/20 shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-500 group relative overflow-hidden"
                variants={itemVariants}
              >
                <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-2xl group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-500"></div>

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${component.color} bg-opacity-10 flex items-center justify-center mb-4 backdrop-blur-sm border border-emerald-500/20 group-hover:border-emerald-400/50 transition-all duration-500`}>
                  <component.icon className="text-white" size={24} />
                </div>

                <h4 className="text-lg font-medium mb-2 text-emerald-200 group-hover:text-emerald-100 transition-colors duration-300">
                  {component.title}
                </h4>

                <p className="text-emerald-100/70 group-hover:text-emerald-100/90 transition-colors duration-300 text-sm">
                  {component.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="mb-16 backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-500 relative overflow-hidden"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-lg" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-teal-500/40 rounded-br-lg" />

          <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white">
            Key Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse" style={{ animationDelay: `${index * 0.1}s` }}></div>
                <span className="text-emerald-100/80 group-hover:text-emerald-100 transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Challenges */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white text-center">
            Technical Challenges & Solutions
          </h3>

          <div className="space-y-6">
            {technicalChallenges.map((item, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-xl bg-black/30 p-6 rounded-2xl border border-emerald-500/20 shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-500 group relative overflow-hidden"
                variants={itemVariants}
              >
                <div className="absolute -right-12 -bottom-12 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-2xl group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-500"></div>

                <h4 className="text-lg font-medium mb-2 text-emerald-200 group-hover:text-emerald-100 transition-colors duration-300">
                  {item.challenge}
                </h4>

                <p className="text-emerald-100/70 group-hover:text-emerald-100/90 transition-colors duration-300">
                  {item.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white">
            Interested in this project?
          </h3>
          <p className="text-emerald-100/80 max-w-2xl mx-auto mb-6">
            Check out the code repository or contact me to learn more about the implementation details and architecture decisions.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/sagar6413"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/30 transition-all duration-300 backdrop-blur-md group"
            >
              <Github size={16} />
              <span>View Code</span>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
            >
              <MessageSquare size={16} />
              <span>Contact Me</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}