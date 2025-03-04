"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundEffects from "@/components/ui/background-effects";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <footer className="relative py-12 overflow-hidden bg-gradient-to-b from-background via-background to-background/95 border-t border-primary/10">
      {/* Background Effects */}
      <BackgroundEffects canvasId="particles-footer" particleCount={30} />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link
              href="#home"
              className="text-xl font-bold flex items-center mb-4"
            >
              <div className="relative mr-2 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-md shadow-purple-500/20">
                <span className="text-white text-sm font-bold">SS</span>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary to-purple-500 opacity-50 blur-sm"></div>
              </div>
              <div className="flex items-center">
                <span className="gradient-text font-extrabold">
                  Sagar.Shrivastava
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Backend Software Engineer specializing in building robust,
              scalable systems. Passionate about clean code, performance
              optimization, and solving complex problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full glass border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-muted-foreground mb-2">Bangalore, India</p>
              <p className="text-muted-foreground mb-2">
                <a
                  href="mailto:sagar@example.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  sagar@example.com
                </a>
              </p>
              <p className="text-muted-foreground">
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
        <div className="mt-2 pt-1 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sagar Shrivastava. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
