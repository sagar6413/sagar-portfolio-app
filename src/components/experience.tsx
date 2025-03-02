"use client";
import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronRight, Sparkles } from "lucide-react";
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
  const [activeCompany, setActiveCompany] = useState("Netflix");
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(3); // Netflix index
  const [animatingIn, setAnimatingIn] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimatingIn(true);
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

  const companies: CompanyData[] = [
    {
      name: "Apple",
      color: "#A2AAAD",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09998 22C7.78998 22.05 6.79998 20.68 5.95998 19.47C4.24998 17 2.93998 12.45 4.69998 9.39C5.56998 7.87 7.12998 6.91 8.81998 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
        </svg>
      ),
    },
    {
      name: "Google",
      color: "#4285F4",
      icon: (
        <svg
          className="w-6 h-6"
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
      name: "Microsoft",
      color: "#00A4EF",
      icon: (
        <svg
          className="w-6 h-6"
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
    {
      name: "Netflix",
      color: "#E50914",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 2V22L12 17L19 22V2H5Z" fill="#E50914" />
        </svg>
      ),
    },
  ];

  const experiences: Record<string, ExperienceData> = {
    Netflix: {
      title: "Software Engineer Intern",
      company: "Netflix",
      period: "Jan 2021 - Jun 2021",
      location: "Los Gatos, CA",
      color: "#E50914",
      achievements: [
        "Worked on the Netflix team",
        "Broke the prod on the first day itself",
        "Coined the term Netflix and Chill - which is now used by millions of people",
      ],
    },
    Google: {
      title: "Software Engineer",
      company: "Google",
      period: "Jul 2021 - Dec 2022",
      location: "Mountain View, CA",
      color: "#4285F4",
      achievements: [
        "Worked on Google Search algorithms",
        "Improved search results accuracy by 15%",
        "Contributed to the open-source community",
      ],
    },
    Microsoft: {
      title: "Senior Developer",
      company: "Microsoft",
      period: "Jan 2023 - Dec 2023",
      location: "Redmond, WA",
      color: "#00A4EF",
      achievements: [
        "Led a team of 5 developers",
        "Implemented new features for Microsoft 365",
        "Reduced application load time by 30%",
      ],
    },
    Apple: {
      title: "UI/UX Engineer",
      company: "Apple",
      period: "Jan 2024 - Present",
      location: "Cupertino, CA",
      color: "#A2AAAD",
      achievements: [
        "Designed user interfaces for upcoming products",
        "Collaborated with the design team on iOS improvements",
        "Implemented accessibility features",
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
    achievementRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateY(20px)";
        setTimeout(() => {
          if (ref) {
            ref.style.opacity = "1";
            ref.style.transform = "translateY(0)";
          }
        }, 300 + i * 100);
      }
    });
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Background Effects */}
      <BackgroundEffects canvasId="particles-experience" />

      <div className="container relative z-10">
        <div
          className={`flex flex-col items-center mb-8 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Decorative elements */}
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500 opacity-70"></div>
            <Sparkles className="w-6 h-6 mx-2 text-blue-400" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500 opacity-70"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
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
            className="h-1 w-24 mb-2 mt-2 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${currentColor}, transparent)`,
              boxShadow: `0 0 15 ${currentColor}`,
            }}
          ></div>
          <p className="text-center text-gray-400 max-w-3xl text-sm">
            A timeline of my professional journey across leading tech companies.
          </p>
        </div>

        {/* Horizontal timeline bar for mobile */}
        <div className="md:hidden mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex px-4 w-max md:w-full justify-start md:justify-between items-center gap-4">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeCompany === company.name
                    ? "bg-gray-900/70 border border-gray-700"
                    : "bg-gray-900/30 hover:bg-gray-800/40"
                }`}
                style={{
                  boxShadow:
                    activeCompany === company.name
                      ? `0 0 20px ${company.color}40, inset 0 0 10px ${company.color}20`
                      : "none",
                  backdropFilter: "blur(16px)",
                }}
                onClick={() => handleCompanyClick(company.name, index)}
              >
                <div
                  className="p-3 rounded-full mb-3 transition-all duration-300 relative group"
                  style={{
                    background:
                      activeCompany === company.name
                        ? `linear-gradient(135deg, rgba(10, 10, 15, 0.9), ${company.color}30)`
                        : "rgba(20, 20, 30, 0.5)",
                    boxShadow:
                      activeCompany === company.name
                        ? `0 0 15px ${company.color}60`
                        : "none",
                  }}
                >
                  {/* Glowing ring for active company */}
                  {activeCompany === company.name && (
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `1px solid ${company.color}60`,
                        animation: "pulseRing 2s ease-out infinite",
                      }}
                    ></div>
                  )}
                  {company.icon}
                </div>
                <span
                  className={`text-sm font-medium transition-all duration-300`}
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
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Company timeline - desktop */}
          <div
            className={`hidden md:block w-1/3 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
            ref={timelineRef}
          >
            <div
              className="backdrop-blur-xl rounded-2xl border px-2 py-1 h-full relative"
              style={{
                borderColor: "rgba(255, 255, 255, 0.03)",
                background:
                  "linear-gradient(135deg, rgba(10, 10, 15, 0.7), rgba(15, 15, 25, 0.3))",
                boxShadow: "0 20px 50px -20px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Timeline accent line with moving highlight */}
              <div className="absolute -left-1 top-0 w-1 h-full overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-800/20 via-indigo-500/20 to-purple-800/20"></div>
                <div
                  className="absolute w-full h-24 transition-all duration-700 ease-out"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${currentColor}, transparent)`,
                    boxShadow: `0 0 15px ${currentColor}`,
                    transform: `translateY(${activeIndex * 100}%)`,
                  }}
                ></div>
              </div>

              {/* Companies list */}
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className={`group flex items-center gap-2 p-2 mb-2 rounded-xl cursor-pointer transition-all duration-500 relative z-10 ${
                    activeCompany === company.name
                      ? "bg-gray-900/70"
                      : "hover:bg-gray-900/30"
                  }`}
                  style={{
                    backdropFilter: "blur(16px)",
                    borderLeft:
                      activeCompany === company.name
                        ? `2px solid ${company.color}`
                        : "2px solid transparent",
                    transform:
                      activeCompany === company.name
                        ? "scale(1.02)"
                        : "scale(1)",
                  }}
                  onClick={() => handleCompanyClick(company.name, index)}
                >
                  {/* Active company indicator */}
                  {activeCompany === company.name && (
                    <div
                      className="absolute inset-0 rounded-xl opacity-20"
                      style={{
                        background: `radial-gradient(circle at left, ${company.color}30, transparent 70%)`,
                        animation: "pulse 3s ease-in-out infinite",
                      }}
                    ></div>
                  )}

                  <div
                    className={`p-2 rounded-full transition-all duration-300 relative`}
                    style={{
                      background:
                        activeCompany === company.name
                          ? `linear-gradient(135deg, rgba(10, 10, 15, 0.9), ${company.color}30)`
                          : "rgba(20, 20, 30, 0.5)",
                      boxShadow:
                        activeCompany === company.name
                          ? `0 0 15px ${company.color}60`
                          : "none",
                    }}
                  >
                    {/* Icon glow effect */}
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

                  <div className="flex-1">
                    <span
                      className={`font-medium text-sm transition-all duration-300 ${
                        activeCompany === company.name ? "" : "text-gray-400"
                      }`}
                      style={{
                        color:
                          activeCompany === company.name ? company.color : "",
                        textShadow:
                          activeCompany === company.name
                            ? `0 0 8px ${company.color}50`
                            : "none",
                      }}
                    >
                      {company.name}
                    </span>
                    <div
                      className={`text-xs text-gray-500 transition-all duration-500 overflow-hidden ${
                        activeCompany === company.name
                          ? "max-h-12 opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {experiences[company.name].period}
                    </div>
                  </div>

                  {/* Status indicator + arrow */}
                  <div className="flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 transition-all duration-300`}
                      style={{
                        background:
                          activeCompany === company.name
                            ? company.color
                            : "rgba(255, 255, 255, 0.2)",
                        boxShadow:
                          activeCompany === company.name
                            ? `0 0 10px ${company.color}`
                            : "none",
                      }}
                    ></div>
                    <ChevronRight
                      className={`w-4 h-4 transform transition-all duration-300 ${
                        activeCompany === company.name
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      style={{
                        color: company.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience details card */}
          <div
            className={`md:w-2/3 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div
              className="backdrop-blur-xl rounded-2xl border p-4 relative overflow-hidden"
              style={{
                borderColor: "rgba(255, 255, 255, 0.03)",
                background:
                  "linear-gradient(135deg, rgba(10, 10, 15, 0.7), rgba(15, 15, 25, 0.3))",
                boxShadow: "0 20px 50px -20px rgba(0, 0, 0, 0.5)",
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
                className="absolute top-0 left-0 w-full h-1"
                style={{
                  background: `linear-gradient(90deg, transparent, ${currentColor}, transparent)`,
                  opacity: "0.7",
                  boxShadow: `0 0 10px ${currentColor}`,
                  animation: "scanlineHorizontal 8s infinite linear",
                }}
              />

              <div
                className="absolute bottom-0 left-0 w-full h-1"
                style={{
                  background: `linear-gradient(90deg, transparent, ${currentColor}, transparent)`,
                  opacity: "0.4",
                  boxShadow: `0 0 10px ${currentColor}`,
                  animation: "scanlineHorizontal 12s infinite linear reverse",
                }}
              />

              {/* Circular holo decoration */}
              <div
                className="absolute top-4 right-4 w-32 h-32 rounded-full opacity-10"
                style={{
                  border: `1px solid ${currentColor}`,
                  animation: "rotateHolo 20s linear infinite",
                }}
              />

              <div className="mb-4 relative">
                {/* Company name with futuristic decoration */}
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

                  <h2
                    className="text-xl md:text-2xl font-bold tracking-tight transition-all duration-500"
                    style={{
                      color: currentColor,
                      textShadow: `0 0 10px ${currentColor}50`,
                    }}
                  >
                    {currentExperience.title}
                  </h2>
                  <div className="text-xl md:text-2xl font-light text-gray-400">
                    @{" "}
                    <span
                      className="font-semibold"
                      style={{
                        textShadow: `0 0 15px ${currentColor}30`,
                      }}
                    >
                      {currentExperience.company}
                    </span>
                  </div>
                </div>

                {/* Company details with holographic UI feel */}
                <div
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-gray-400 text-sm bg-white/5 backdrop-blur-lg px-2 py-1.5 rounded-lg border border-white/5"
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

                {/* Achievements list with animated entries */}
                <div className="space-y-2 relative">
                  {currentExperience.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      ref={(el) => {
                        achievementRefs.current[index] = el;
                        return undefined;
                      }}
                      className="flex items-center gap-4 p-2 rounded-xl border border-white/5 bg-white/5 backdrop-blur-lg transition-all duration-500 opacity-0 translate-y-5"
                      style={{
                        boxShadow: `inset 0 0 15px ${currentColor}10, 0 2px 4px rgba(0,0,0,0.1)`,
                        animationDelay: `${index * 100 + 300}ms`,
                      }}
                    >
                      <Check
                        className="w-4 h-4"
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
                  {Array(20)
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
      </div>
    </section>
  );
}
