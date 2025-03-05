"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundEffects from "@/components/ui/background-effects";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Email", icon: Mail, href: "mailto:sagar@example.com" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-8 md:py-12 overflow-hidden bg-gradient-to-b from-background via-background to-background/95 border-t border-primary/10">
      <BackgroundEffects canvasId="particles-footer" particleCount={30} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2 text-center md:text-left">
            <Link
              href="#home"
              className="text-lg md:text-xl font-bold flex flex-col md:flex-row items-center justify-center md:justify-start mb-4 space-y-2 md:space-y-0 md:space-x-2"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-md shadow-purple-500/20">
                <span className="text-white text-xs md:text-sm font-bold">
                  SS
                </span>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary to-purple-500 opacity-50 blur-sm"></div>
              </div>
              <span className="gradient-text font-extrabold text-lg md:text-xl">
                Sagar.Shrivastava
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm md:text-base max-w-md mx-auto md:mx-0">
              Backend Software Engineer specializing in building robust,
              scalable systems. Passionate about clean code and performance.
            </p>
            <div className="flex justify-center md:justify-start space-x-3 md:space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full glass border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon size={16} className="md:w-[18px]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 md:mt-0">
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 text-center md:text-left">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 md:block md:space-y-2">
              {navLinks.map((link) => (
                <li key={link.name} className="text-center md:text-left">
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm md:text-base hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-6 md:mt-0">
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 text-center md:text-left">
              Contact
            </h3>
            <address className="not-italic text-center md:text-left">
              <p className="text-muted-foreground text-sm md:text-base mb-2">
                Bangalore, India
              </p>
              <p className="text-muted-foreground text-sm md:text-base mb-2">
                <a
                  href="mailto:sagar@example.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  sagar@example.com
                </a>
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                <a
                  href="tel:+919876543210"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +91 9876543210
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-xs md:text-sm text-center">
            © {new Date().getFullYear()} Sagar Shrivastava. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="#"
              className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
