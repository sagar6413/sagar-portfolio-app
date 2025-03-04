"use client";
import { Database, Server, Cpu, Globe } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import BackgroundEffects from "@/components/ui/background-effects";

// Define types for the FeatureCard props
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const features = [
    {
      icon: Server, // Or a more specific icon like a Spring Boot icon
      title: "Backend Development",
      description:
        "Architecting robust, scalable backend systems using Java, Spring Boot, and related technologies (Spring Cloud, Spring Data JPA).  Experience with both monolithic and microservices architectures.",
    },
    {
      icon: Database, // Or icons for specific databases like PostgreSQL, MongoDB
      title: "Database Design & Management",
      description:
        "Designing and implementing efficient database schemas using PostgreSQL, Oracle, and MongoDB.  Proficient in optimizing queries, ensuring data integrity, and utilizing caching strategies (Redis).",
    },
    {
      icon: Cpu, // Or a distributed systems icon
      title: "Microservices & Distributed Systems",
      description:
        "Developing and deploying microservices using Spring Boot and Spring Cloud.  Experience with message queues (Kafka, RabbitMQ) for building resilient and scalable distributed systems.",
    },
    {
      icon: Globe, // Or an API-specific icon
      title: "API Development",
      description:
        "Engineering RESTful APIs using Spring Boot and adhering to best practices.  Experience with authentication/authorization (OAuth 2.0, JWT) and real-time communication (WebSockets/STOMP).",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Background Effects */}
      <BackgroundEffects canvasId="particles-about" />

      <div className="container relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Backend Engineer with a Vision
          </h2>

          <p className="text-muted-foreground/80 max-w-3xl mx-auto text-sm font-medium leading-normal tracking-wide mt-2">
            I specialize in crafting resilient backend architectures that power
            the next generation of web applications. With a focus on
            performance-optimized engineering and elegant architecture, I build
            solutions that scale beyond limits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {[
              {
                title: "My Journey",
                content:
                  "As a backend engineer with nearly 3 years of experience (starting June 2022), I've contributed to diverse projects, including production systems at LTIMindtree and an internship at Mindtree.  My focus has been on developing and optimizing backend systems using Java and the Spring framework, addressing challenges in scalability, reliability, and performance.",
              },
              {
                title: "My Approach",
                content:
                  "I prioritize writing clean, maintainable, and well-documented code that adheres to design patterns and best practices.  I'm experienced in both monolithic and microservices architectures, and I strive to build systems that are robust, scalable, and easy to understand.  I'm also a strong proponent of Agile/Scrum methodologies.",
              },
              {
                title: "My Goal",
                content:
                  "My goal is to build high-performance, reliable backend systems that meet and exceed current requirements while remaining adaptable to future growth.  I'm passionate about leveraging technologies like Spring Boot, Kafka, and Redis to create efficient and scalable solutions. I aim to contribute to the development of robust and innovative applications.",
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="relative backdrop-blur-md bg-background/10 rounded-xl border border-primary/10 p-10 shadow-xl shadow-primary/5 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-primary/40 via-primary to-primary/40" />

                <h3 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">
                  {section.title}
                </h3>
                <p className="text-muted-foreground/90 text-sm relative z-10 font-light leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hidden md:flex flex-wrap gap-2 mt-4"
            >
              {[
                "Java",
                "Spring Boot",
                "SQL + NoSQL DB",
                "Redis",
                "Microservices Architecture",
                "Kafka",
                "Docker",
                "JWT/ OAuth2 Authentication",
                "Spring Cloud", // Or more specific: "Spring Cloud (Config, Gateway)"
                "Agile/Scrum", // Methodology is a valuable skill
              ].map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-1.5 text-sm backdrop-blur-md bg-background/20 border border-primary/20 hover:bg-primary/20 transition-colors duration-300 font-light"
                >
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Education & Experience Timeline */}
      </div>
    </section>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
    className="backdrop-blur-md bg-background/20 rounded-4xl border border-primary/20 shadow-xl shadow-primary/10 p-6 group hover:bg-background/30 transition-all duration-500 overflow-hidden relative"
  >
    {/* Animated gradient background on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    {/* Animated accent border */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary/70 to-primary/30 group-hover:w-full transition-all duration-700" />

    <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-14 h-14 rounded-lg flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
      <Icon className="h-6 w-6 text-primary" />
    </div>

    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-muted-foreground/80 font-light leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export default About;
