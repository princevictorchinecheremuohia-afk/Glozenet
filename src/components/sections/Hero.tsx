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
      className="min-h-[calc(100vh-80px)] overflow-hidden dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-20 pt-20 pb-12 lg:flex-row lg:justify-between lg:px-8">
        {/* LEFT SIDE OF THE FLEX */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-blue-600 font-semibold"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl font-extrabold leading-tight lg:text-7xl dark:text-white"
          >
            Prince Victor Chinecheremu
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-2xl font-semibold text-slate-600 dark:text-slate-300"
          >
            A Web Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-8 leading-8 text-lg text-slate-600 dark:text-slate-400"
          >
            I build fast, modern website that helps business grow online.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a href="#contact">
              <Button className="cursor-pointer" size="lg">
                Hire Me
              </Button>
            </a>

            <a href="#project">
              <Button className="cursor-pointer" variant="outline" size="lg">
                View Projects
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE OF THE FLEX */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="min-w-0 flex flex-col items-center"
        >
          <div className="relative h-auto w-full lg:h-[500px] lg:w-[500px] flex items-center justify-center">
            {/* GLOW EFFECT FOR THE IMAGE */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute hidden lg:block h-96 w-96 rounded-full bg-blue-500/30 dark:bg-blue-500/40 blur-3xl"
            ></motion.div>

            {/* FLOATING ICONS AROUND HERO-IMAGE */}
            {/* DESKTOP VIEW */}
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

            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                }}
                whileHover={{ scale: 1.05 }}
                className="relative z-10 h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 overflow-hidden rounded-full border-4 border-blue-500 shadow-2xl"
              >
                <Image
                  src="/images/hero-image.jpeg"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* MOBILE VIEW */}
          <div className="flex flex-col items-center gap-3 lg:hidden">
            {techStack.map((tech) => (
              <MobileTechBadge
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                styles={tech.styles}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
