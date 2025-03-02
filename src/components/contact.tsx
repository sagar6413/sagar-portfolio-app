"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  User,
  AtSign,
  MessageSquare,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import BackgroundEffects from "@/components/ui/background-effects";

// Define form state interface
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated form submission with success animation
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      console.log(formState);

      // Reset success state after animation
      setTimeout(() => {
        setSuccess(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      {/* Background Effects */}
      <BackgroundEffects canvasId="particles-contact" />

      <div className="container relative z-10">
        <div
          className={`flex flex-col items-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-black/40 px-5 py-3 rounded-full mb-4 backdrop-blur-md border border-indigo-500/30 shadow-lg shadow-indigo-500/10 group hover:bg-indigo-900/40 transition-all duration-500">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></div>
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 group-hover:from-indigo-300 group-hover:to-purple-200 transition-all duration-500">
              Open to opportunities
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-100">
            Get In Touch
          </h2>

          <div className="relative">
            <p className="text-center text-indigo-100/80 max-w-2xl mb-4 text-sm text-medium backdrop-blur-sm">
              Interested in working together? Let&apos;s connect through any of
              the channels below.
            </p>
            <div className="absolute -left-6 -top-4 w-4 h-4 rounded-full bg-indigo-500/30 blur-md animate-pulse"></div>
            <div
              className="absolute -right-8 -bottom-4 w-6 h-6 rounded-full bg-purple-500/30 blur-md animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="w-48 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
          {/* Glowing connection line between cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hidden lg:block animate-pulse" />

          <div className="backdrop-blur-xl bg-black/30 p-10 rounded-3xl border border-indigo-500/20 shadow-2xl shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-all duration-500 group overflow-hidden relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-indigo-500/40 rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg" />

            {/* Highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white relative inline-flex items-center">
              <span>Contact Information</span>
              <Sparkles
                size={16}
                className="ml-2 text-indigo-300 animate-pulse"
              />
            </h3>

            <div className="space-y-4 mb-4">
              <div className="flex items-center group/item">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center mr-6 backdrop-blur-sm border border-indigo-500/20 group-hover/item:border-indigo-400/50 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  <Mail
                    className="text-indigo-400 group-hover/item:text-indigo-300 transition-colors duration-300"
                    size={16}
                  />
                </div>
                <div>
                  <p className="text-xs text-indigo-300/70  group-hover/item:text-indigo-200/90 transition-colors duration-300">
                    Email
                  </p>
                  <a
                    href="mailto:alex.morgan@example.com"
                    className="text-sm font-medium text-white hover:text-indigo-200 transition-colors duration-300 relative inline-block"
                  >
                    alex.morgan@example.com
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-indigo-400 group-hover/item:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>

              <div className="flex items-center group/item">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center mr-6 backdrop-blur-sm border border-indigo-500/20 group-hover/item:border-indigo-400/50 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  <Linkedin
                    className="text-indigo-400 group-hover/item:text-indigo-300 transition-colors duration-300"
                    size={16}
                  />
                </div>
                <div>
                  <p className="text-xs text-indigo-300/70  group-hover/item:text-indigo-200/90 transition-colors duration-300">
                    LinkedIn
                  </p>
                  <a
                    href="https://linkedin.com/in/alexmorgan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-indigo-200 transition-colors duration-300 relative inline-flex items-center group-hover/item:gap-1"
                  >
                    <span>linkedin.com/in/alexmorgan</span>
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-indigo-400 group-hover/item:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>

              <div className="flex items-center group/item">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center mr-6 backdrop-blur-sm border border-indigo-500/20 group-hover/item:border-indigo-400/50 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  <Github
                    className="text-indigo-400 group-hover/item:text-indigo-300 transition-colors duration-300"
                    size={16}
                  />
                </div>
                <div>
                  <p className="text-xs text-indigo-300/70  group-hover/item:text-indigo-200/90 transition-colors duration-300">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/alexmorgan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-indigo-200 transition-colors duration-300 relative inline-flex items-center group-hover/item:gap-1"
                  >
                    <span>github.com/alexmorgan</span>
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-indigo-400 group-hover/item:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-indigo-500/20 relative">
              <div className="absolute text-center top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 px-4 text-indigo-300 text-xs border border-indigo-500/30 rounded-full">
                Current Status
              </div>

              <h4 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white">
                Availability
              </h4>

              <div className="space-y-2">
                {[
                  {
                    color: "from-indigo-500 to-indigo-400",
                    text: "Full-time backend engineering roles",
                  },
                  {
                    color: "from-purple-500 to-purple-400",
                    text: "Contract work and consulting",
                  },
                  {
                    color: "from-blue-500 to-blue-400",
                    text: "Technical advisory positions",
                  },
                  {
                    color: "from-cyan-500 to-cyan-400",
                    text: "Open source collaboration",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 group/avail transition-all duration-300 hover:translate-x-1"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    ></div>
                    <span className="text-indigo-100/80 text-xs group-hover/avail:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-black/30 p-10 rounded-3xl border border-indigo-500/20 shadow-2xl shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-all duration-500 group relative overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-indigo-500/40 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-purple-500/40 rounded-bl-lg"></div>

            {/* Highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white flex items-center">
              <span>Send a Message</span>
              <div className="ml-3 relative">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping absolute"></div>
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              </div>
            </h3>

            <form className="space-y-2 relative" onSubmit={handleSubmit}>
              <div
                className="relative group/field"
                onFocus={() => setActiveField("name")}
                onBlur={() => setActiveField(null)}
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 transition-all duration-300 group-focus-within/field:text-indigo-300">
                  <User size={14} />
                </div>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full text-sm pl-12 pr-4 py-3 bg-black/20 border border-indigo-500/30 rounded-xl focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400/50 text-white placeholder-indigo-300/50 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Your Name"
                  required
                />
                {activeField === "name" && (
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-sm animate-pulse"></div>
                )}
              </div>

              <div
                className="relative group/field"
                onFocus={() => setActiveField("email")}
                onBlur={() => setActiveField(null)}
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 transition-all duration-300 group-focus-within/field:text-indigo-300">
                  <AtSign size={14} />
                </div>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full text-sm pl-12 pr-4 py-3 bg-black/20 border border-indigo-500/30 rounded-xl focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400/50 text-white placeholder-indigo-300/50 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Email Address"
                  required
                />
                {activeField === "email" && (
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-sm animate-pulse"></div>
                )}
              </div>

              <div
                className="relative group/field"
                onFocus={() => setActiveField("subject")}
                onBlur={() => setActiveField(null)}
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 transition-all duration-300 group-focus-within/field:text-indigo-300">
                  <MessageSquare size={14} />
                </div>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full  text-sm pl-12 pr-4 py-3 bg-black/20 border border-indigo-500/30 rounded-xl focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400/50 text-white placeholder-indigo-300/50 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Subject"
                  required
                />
                {activeField === "subject" && (
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-sm animate-pulse"></div>
                )}
              </div>

              <div
                className="relative group/field"
                onFocus={() => setActiveField("message")}
                onBlur={() => setActiveField(null)}
              >
                <textarea
                  id="message"
                  rows={2}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full text-sm px-4 py-4 bg-black/20 border border-indigo-500/30 rounded-xl focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400/50 text-white placeholder-indigo-300/50 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Your message here..."
                  required
                ></textarea>
                {activeField === "message" && (
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-sm animate-pulse"></div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || success}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium py-2 px-3 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 relative overflow-hidden group/btn"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : success ? (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 animate-gradient-x"></span>
                    <span className="relative">Message Sent Successfully</span>
                  </>
                ) : (
                  <>
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-400/0 via-indigo-400/30 to-indigo-400/0 -translate-x-full group-hover/btn:translate-x-full transition-all duration-1000 ease-in-out"></span>
                    <Send
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                    <span className="text-sm">Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
