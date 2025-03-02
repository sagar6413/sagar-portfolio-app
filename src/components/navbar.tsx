"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Zap, ChevronRight, Hexagon } from "lucide-react";
import { ThemeToggler } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, height: 0 },
    open: { opacity: 1, y: 0, height: "auto" },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -2, 0, 2, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 backdrop-blur-xl bg-background/60 border-b border-primary/10 shadow-lg shadow-primary/10"
          : "py-5 bg-transparent"
      )}
    >
      {/* Animated background glow effect */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          opacity: scrolled ? 0.6 : 0.2,
          transition: "opacity 0.5s ease",
        }}
      >
        <div
          className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x / 10}px, ${
              mousePosition.y / 10
            }px)`,
            width: "30%",
            height: "200%",
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>

      <div className="container mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <motion.div whileHover="hover" variants={logoVariants}>
          <Link
            href="#home"
            className="text-2xl font-bold relative group"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 flex items-center justify-center gap-1">
              <div className="relative">
                <Hexagon className="w-8 h-8 text-primary/20 " />
                <Zap className="w-6 h-6 text-primary absolute top-1 left-1" />
              </div>
              <span className="tracking-wider">ss.exe</span>
            </div>
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: activeSection === "home" ? "100%" : "0%" }}
              transition={{ duration: 0.4 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="bg-background/30 backdrop-blur-md p-1 rounded-full border border-primary/10 flex items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center",
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary"
                  )}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        activeSection === item.href.substring(1) ||
                        hoverIndex === index
                          ? "80%"
                          : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="ml-4">
            <ThemeToggler />
          </div>
          <Link href="/resume">
            <Button
              className="ml-4 bg-gradient-to-br from-primary to-primary/80 hover:from-primary hover:to-primary/90 shadow-lg shadow-primary/20 backdrop-blur-sm border border-primary/20 overflow-hidden group relative"
              size="sm"
            >
              <span className="relative z-10">Resume</span>
              <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggler />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-2 rounded-full text-foreground/80 hover:text-primary focus:outline-none border border-primary/10 bg-background/30 backdrop-blur-md"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="container mx-auto py-4 backdrop-blur-xl bg-background/80 border-t border-primary/10">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center",
                        activeSection === item.href.substring(1)
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{item.name}</span>
                        <motion.div
                          animate={{
                            x: activeSection === item.href.substring(1) ? 5 : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 transition-transform",
                              activeSection === item.href.substring(1) &&
                                "text-primary"
                            )}
                          />
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="px-4 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1 }}
                >
                  <Button className="w-full bg-gradient-to-br from-primary to-primary/80 hover:from-primary hover:to-primary/90 shadow-lg shadow-primary/20 backdrop-blur-sm border border-primary/20">
                    Resume
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
