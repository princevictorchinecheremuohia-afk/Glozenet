"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { techStack } from "@/data/tech-stack";
import TechBadge from "@/data/TechBadge";
import { motion, Variants } from "framer-motion";
import MobileTechBadge from "../shared/MobileTechBadge";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-14 px-5 py-14 sm:px-6 sm:py-16 md:py-20 lg:flex-row lg:justify-between lg:px-8 lg:py-24">
        {/* LEFT SIDE */}
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600 sm:text-base">
            Hi, I'm
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Prince Victor Chinecheremu
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl">
            A Web Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg lg:mx-0 lg:leading-8">
            I build fast, modern websites that help businesses grow online.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#contact" className="w-full sm:w-auto">
              <Button className="w-full cursor-pointer sm:w-auto" size="lg">
                Hire Me
              </Button>
            </a>

            <a href="#project" className="w-full sm:w-auto">
              <Button
                className="w-full cursor-pointer sm:w-auto"
                variant="outline"
                size="lg"
              >
                View Projects
              </Button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full flex-col items-center">
          <div className="relative flex w-full items-center justify-center">
            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute hidden h-96 w-96 rounded-full bg-blue-500/30 blur-3xl dark:bg-blue-500/40 lg:block"
            />

            {/* Desktop floating badges */}
            <div className="hidden lg:block">
              {techStack.map((tech) => (
                <TechBadge
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  className={tech.className}
                  styles={tech.styles}
                />
              ))}
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 h-56 w-56 overflow-hidden rounded-full border-4 border-blue-500 shadow-2xl xs:h-60 xs:w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
            >
              <Image
                src="/images/hero-image.jpeg"
                alt="Hero Image"
                fill
                priority
                sizes="(max-width:640px) 224px,
                       (max-width:768px) 288px,
                       (max-width:1024px) 320px,
                       384px"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Mobile Tech Badges */}
          <div className="mt-8 flex w-full flex-wrap justify-center gap-3 lg:hidden">
            {techStack.map((tech) => (
              <MobileTechBadge
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                styles={tech.styles}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
