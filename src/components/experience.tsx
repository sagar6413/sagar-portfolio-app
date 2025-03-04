"use client";
import React, { useState, useRef, useEffect } from "react";
import { Check, Sparkles } from "lucide-react";
import BackgroundEffects from "@/components/ui/background-effects";

interface ExperienceData {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  color: string;
}

interface CompanyData {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export default function Experience() {
  const [activeCompany, setActiveCompany] = useState("LTIMindtree");
  const [isVisible, setIsVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0); // Start with LTIMindtree
  const [animatingIn, setAnimatingIn] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimatingIn(true);
          // Trigger initial achievement animations
          animateAchievements();
          setTimeout(() => setAnimatingIn(false), 2000);
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

  const animateAchievements = () => {
    // Reset all achievements first
    achievementRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateY(20px)";
      }
    });

    // Animate them in with delay
    achievementRefs.current.forEach((ref, i) => {
      if (ref) {
        setTimeout(() => {
          ref.style.opacity = "1";
          ref.style.transform = "translateY(0)";
          ref.style.transition = "all 0.5s ease-out";
        }, 300 + i * 100);
      }
    });
  };

  const companies: CompanyData[] = [
    {
      name: "LTIMindtree",
      color: "#0082C8",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09998 22C7.78998 22.05 6.79998 20.68 5.95998 19.47C4.24998 17 2.93998 12.45 4.69998 9.39C5.56998 7.87 7.12998 6.91 8.81998 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
        </svg>
      ),
    },
    {
      name: "Mindtree",
      color: "#3B5998",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 11V8L17 5V8L12 11Z" fill="#4285F4" />
          <path d="M12 11L7 8V5L12 8V11Z" fill="#EA4335" />
          <path d="M7 14L2 11L7 8L12 11L7 14Z" fill="#FBBC05" />
          <path d="M17 14L12 11L17 8L22 11L17 14Z" fill="#4285F4" />
          <path d="M12 11V14L7 17V14L12 11Z" fill="#34A853" />
          <path d="M12 11L17 14V17L12 14V11Z" fill="#EA4335" />
        </svg>
      ),
    },
    {
      name: "Wipro",
      color: "#E62020",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="9" height="9" fill="#F25022" />
          <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
          <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
          <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
        </svg>
      ),
    },
  ];

  const experiences: Record<string, ExperienceData> = {
    LTIMindtree: {
      title: "Software Engineer",
      company: "LTIMindtree",
      period: "June 2022 - Present",
      location: "Kolkata, India",
      color: "#0082C8",
      achievements: [
        "Led resolution of 500+ critical production incidents (100K+ users), achieving MTTR under 8 hours.",
        "Enhanced system reliability by 15%, improving user satisfaction and service availability.",
        "Spearheaded legacy system migration (10K daily transactions) to Spring Boot microservices (15+ microservices).",
        "Implemented Spring Cloud Config and design patterns, resulting in 60% deployment time reduction and zero data loss.",
        "Engineered scalable REST APIs using Spring Boot and multi-level Redis caching, reducing database load by 25% and improving API response times by 40%.",
        "Resolved latency bottlenecks in a high-traffic legacy application (50K+ daily requests) via JVM tuning and garbage collection optimization, achieving 20% latency reduction.",
        "Mentored 10+ team members, reducing onboarding time from 45 to 15 days and improving team productivity by 20%.",
        "Employed Agile/Scrum in sprint planning, reviews, and retrospectives.",
      ],
    },
    Mindtree: {
      title: "Software Engineer Intern",
      company: "Mindtree",
      period: "Feb 2022 - May 2022",
      location: "Kolkata, India",
      color: "#3B5998",
      achievements: [
        "Developed the backend for a parking management system (500+ vehicles) using Spring Boot.",
        "Streamlined parking operations and improved space utilization.",
        "Implemented intelligent spot allocation, presence-based updates, and JWT authentication.",
        "Enhanced user experience, security, and operational efficiency.",
      ],
    },
    Wipro: {
      title: "Software Engineering Trainee",
      company: "Wipro",
      period: "Mar 2022 - May 2022",
      location: "Remote",
      color: "#E62020",
      achievements: [
        "Completed training in backend development, building a functional e-commerce backend with Spring Boot.",
        "Developed features including user authentication, admin dashboard, product catalog, shopping cart, payment simulation, and order fulfillment.",
      ],
    },
  };

  const currentExperience = experiences[activeCompany];
  const currentColor =
    companies.find((c) => c.name === activeCompany)?.color || "#E50914";

  const handleCompanyClick = (company: string, index: number) => {
    setActiveCompany(company);
    setActiveIndex(index);
    setAnimatingIn(true);
    setTimeout(() => setAnimatingIn(false), 1500);

    // Reset the animation for achievements
    animateAchievements();
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Background Effects */}
      <BackgroundEffects canvasId="particles-experience" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col items-center mb-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Decorative elements */}
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500 opacity-70"></div>
            <Sparkles className="w-5 h-5 mx-2 text-blue-400" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500 opacity-70"></div>
          </div>

          <h2 className="text-3xl font-bold mb-2 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-violet-500 relative">
              Work Experience
              <span
                className="absolute -inset-1 rounded-lg opacity-30 blur-sm"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.2), transparent)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              ></span>
            </span>
          </h2>

          <div
            className="h-1 w-16 mb-2 mt-2 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${currentColor}, transparent)`,
              boxShadow: `0 0 15 ${currentColor}`,
            }}
          ></div>

          <p className="text-center text-gray-400 max-w-2xl text-sm">
            A timeline of my professional journey across leading tech companies.
          </p>
        </div>

        {/* Main content - Experience timeline and details */}
        <div className="flex flex-col gap-6">
          {/* Company selector - horizontal on mobile, vertical on desktop */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div>
              {/* Timeline accent line (for larger screens) */}
              {/* <div className="absolute top-0 left-2 w-[98%] h-1 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 via-indigo-500/20 to-purple-800/20" />
                <div
                  className="absolute h-full transition-all duration-700 ease-out"
                  style={{
                    width: `${100 / companies.length}%`,
                    background: `linear-gradient(to right, transparent, ${currentColor}, transparent)`,
                    boxShadow: `0 0 15px ${currentColor}`,
                    transform: `translateX(${activeIndex * 100}%)`,
                  }}
                />
              </div> */}

              <div className="flex gap-3 justify-center items-center ">
                {companies.map((company, index) => (
                  <div
                    key={company.name}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeCompany === company.name
                        ? "bg-gray-900/70"
                        : "hover:bg-gray-900/30"
                    }`}
                    style={{
                      backdropFilter: "blur(16px)",
                      borderBottom:
                        activeCompany === company.name
                          ? `2px solid ${company.color}`
                          : "2px solid transparent",
                      transform:
                        activeCompany === company.name
                          ? "scale(1.01)"
                          : "scale(1)",
                    }}
                    onClick={() => handleCompanyClick(company.name, index)}
                  >
                    {/* Active company indicator */}
                    {activeCompany === company.name && (
                      <div
                        className="absolute inset-0 rounded-lg opacity-20"
                        style={{
                          background: `radial-gradient(circle at left, ${company.color}30, transparent 70%)`,
                          animation: "pulse 3s ease-in-out infinite",
                        }}
                      ></div>
                    )}

                    <div
                      className={`p-2 rounded-full transition-all duration-300 relative flex-shrink-0`}
                      style={{
                        background:
                          activeCompany === company.name
                            ? `linear-gradient(135deg, rgba(10, 10, 15, 0.9), ${company.color}30)`
                            : "rgba(20, 20, 30, 0.5)",
                        boxShadow:
                          activeCompany === company.name
                            ? `0 0 10px ${company.color}60`
                            : "none",
                      }}
                    >
                      {activeCompany === company.name && (
                        <div
                          className="absolute inset-0 rounded-full opacity-60"
                          style={{
                            border: `1px solid ${company.color}40`,
                            animation: "pulseRing 2s ease-out infinite",
                          }}
                        ></div>
                      )}
                      {company.icon}
                    </div>
                    <div className="block">
                      <span
                        className="text-sm font-medium"
                        style={{
                          color:
                            activeCompany === company.name
                              ? company.color
                              : "rgba(255, 255, 255, 0.8)",
                          textShadow:
                            activeCompany === company.name
                              ? `0 0 8px ${company.color}80`
                              : "none",
                        }}
                      >
                        {company.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience details card */}
          <div
            className={`flex-1 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div
              className="backdrop-blur-xl rounded-xl border p-5 relative overflow-hidden h-full"
              style={{
                borderColor: "rgba(255, 255, 255, 0.03)",
                background:
                  "linear-gradient(135deg, rgba(10, 10, 15, 0.7), rgba(15, 15, 25, 0.3))",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Content highlight effects */}
              <div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20"
                style={{
                  background: `radial-gradient(circle, ${currentColor}, transparent 70%)`,
                  animation: animatingIn ? "pulseGlow 2s ease-out" : "none",
                }}
              ></div>

              <div
                className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-3xl opacity-10"
                style={{
                  background: `radial-gradient(circle, ${currentColor}, transparent 70%)`,
                  animation: animatingIn ? "pulseGlow 2s ease-out" : "none",
                }}
              />

              {/* Holographic decorative lines */}
              <div
                className="absolute top-0 left-0 w-full h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${currentColor}, transparent)`,
                  opacity: "0.7",
                  boxShadow: `0 0 10px ${currentColor}`,
                  animation: "scanlineHorizontal 8s infinite linear",
                }}
              />

              {/* Job title and company */}
              <div className="mb-4">
                <div className="flex flex-wrap items-baseline gap-2 relative">
                  {animatingIn && (
                    <div
                      className="absolute -left-2 -top-2 -right-2 -bottom-2 rounded-lg opacity-20"
                      style={{
                        background: `radial-gradient(circle, ${currentColor}50, transparent 80%)`,
                        animation: "fadeOut 1.5s forwards",
                      }}
                    ></div>
                  )}

                  <h3
                    className="text-xl font-bold tracking-tight transition-all duration-500"
                    style={{
                      color: currentColor,
                      textShadow: `0 0 10px ${currentColor}50`,
                    }}
                  >
                    {currentExperience.title}
                  </h3>
                  <div className="text-lg font-light text-gray-400">
                    @{" "}
                    <span className="font-medium">
                      {currentExperience.company}
                    </span>
                  </div>
                </div>

                {/* Company details with holographic UI feel */}
                <div
                  className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-gray-400 text-sm bg-white/5 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/5"
                  style={{
                    boxShadow: `inset 0 0 20px rgba(0,0,0,0.2), 0 0 1px ${currentColor}30`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 opacity-70"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{currentExperience.period}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 opacity-70"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{currentExperience.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements list with animated entries */}
              <div className="space-y-3 my-5 ">
                {currentExperience.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      achievementRefs.current[index] = el;
                      return undefined;
                    }}
                    className="flex gap-3 p-3 rounded-lg border border-white/5 bg-white/5 backdrop-blur-lg transition-all duration-500 opacity-0 translate-y-5"
                    style={{
                      boxShadow: `inset 0 0 15px ${currentColor}10, 0 2px 4px rgba(0,0,0,0.1)`,
                      animationDelay: `${index * 100 + 300}ms`,
                    }}
                  >
                    <Check
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: currentColor }}
                    />

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              {/* Floating particles overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-0.5 rounded-full animate-float"
                      style={{
                        background: currentColor,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        opacity: 0.3,
                      }}
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
