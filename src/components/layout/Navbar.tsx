"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

import Container from "./Container";
import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/80">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            {/* <Image
              src="/logo/Glopenet-logo.png"
              alt="Glopenet Logo"
              width={42}
              height={42}
            /> */}

            <span className="text-2xl font-bold tracking-tight dark:text-white">
              {siteConfig.name}.
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 cursor-pointer dark:text-slate-300 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DARK MODE */}
          <div className="flex items-center gap-3 ">
            <div className="px-6 hidden md:block">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <>
                    <Sun size={18} />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={18} />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? (
                <X className="h-7 w-7 cursor-pointer text-slate-900 dark:text-white" />
              ) : (
                <Menu className="h-7 w-7 cursor-pointer text-slate-900 dark:text-white" />
              )}
            </button>
          </div>
        </nav>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-slate-700 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300  dark:hover:bg-slate-900 dark:hover:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-6 pt-4">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 cursor-pointer"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={18} />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon size={18} />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </header>
  );
}
