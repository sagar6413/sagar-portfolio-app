"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8 rounded-full bg-muted/50 animate-pulse" />;
  }

  const toggleTheme = () => {
    if (isDark) {
      // Show confirmation when switching from dark to light
      setShowConfirmation(true);
    } else {
      // Switch to dark mode immediately
      setTheme("dark");
    }
  };

  const confirmLightMode = () => {
    setTheme("light");
    setShowConfirmation(false);
  };

  const cancelLightMode = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <motion.div
        className={cn(
          "relative flex w-16 h-8 rounded-full cursor-pointer",
          "backdrop-blur-lg shadow-xl hover:shadow-2xl transition-shadow",
          isDark
            ? "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/50"
            : "bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 border border-amber-200/50"
        )}
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          initial={false}
          animate={{
            background: isDark
              ? "linear-gradient(45deg, #1e293b, #0f172a, #1e293b)"
              : "linear-gradient(45deg, #fffbeb, #fef3c7, #fffbeb)",
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />
        </motion.div>

        {/* Celestial bodies */}
        <div className="relative w-full h-full">
          <motion.div
            className={cn(
              "absolute z-20 flex items-center justify-center w-6 h-6 rounded-full",
              "shadow-lg transition-all duration-300",
              isDark
                ? "bg-zinc-700 border border-zinc-600/50 left-1 top-1"
                : "bg-gradient-to-br from-amber-200 to-amber-400 border border-amber-300/50 right-1 top-1"
            )}
            initial={false}
            animate={{
              x: isDark ? 0 : "calc(100% - 2rem)",
              rotate: isDark ? 0 : 360,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? (
                  <Moon className="w-4 h-4 text-blue-300" strokeWidth={1.5} />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" strokeWidth={1.5} />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Constellation effect for dark mode */}
        <AnimatePresence>
          {isDark && (
            <motion.div
              className="absolute inset-0 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white/80 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Light mode confirmation dialog */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && cancelLightMode()}
          >
            <motion.div
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 max-w-md shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Sun className="w-16 h-16 text-amber-400" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-xl font-bold text-white">Wait a second!</h3>

                <div className="space-y-2 text-zinc-300">
                  <p className="font-medium">
                    Bro, are you sure you want to switch to light mode?
                  </p>
                  <p className="text-sm opacity-80">
                    Every developer knows dark mode is the way to go. Your eyes
                    will thank you!
                  </p>
                </div>

                <div className="flex gap-3 mt-2 w-full">
                  <button
                    onClick={cancelLightMode}
                    className="flex-1 py-2 px-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition-colors"
                  >
                    Stay in Dark Mode
                  </button>
                  <button
                    onClick={confirmLightMode}
                    className="flex-1 py-2 px-4 bg-amber-500 hover:bg-amber-600 text-black rounded-lg font-medium transition-colors"
                  >
                    Yes, I&apos;m Sure
                  </button>
                </div>

                <p className="text-xs text-zinc-500 italic">
                  (Your developer cred might take a hit)
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
