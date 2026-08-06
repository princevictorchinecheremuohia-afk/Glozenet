"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
  status: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
  tech,
  live,
  github,
  status,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-colors md:rounded-3xl dark:border-slate-700 dark:bg-slate-900"
    >
      <motion.div
        initial={{
          rotateX: 10,
          rotateY: -10,
          scale: 1,
        }}
        whileHover={{
          rotateX: 0,
          rotateY: 0,
          scale: 1.03,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        style={{
          perspective: 1000,
        }}
        className="relative h-52 overflow-hidden bg-slate-100 sm:h-60 md:h-64 dark:bg-slate-800"
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-600 to-slate-900 text-white">
            <div className="px-4 text-center">
              <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>

              <p className="mt-2 text-sm opacity-80">Screenshot Coming Soon</p>
            </div>
          </div>
        )}

        <div
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg sm:right-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs ${
            status === "live"
              ? "bg-emerald-500"
              : status === "coming soon"
                ? "bg-amber-500"
                : "bg-blue-600"
          }`}
        >
          {status === "live"
            ? "Live"
            : status === "coming soon"
              ? "Coming Soon"
              : "In Progress"}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[140%]"></div>
      </motion.div>

      <div className="space-y-5 p-5 sm:p-6 md:space-y-6 md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 sm:text-sm">
            {category}
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
            {title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 transition-colors sm:text-sm dark:bg-slate-800 dark:text-blue-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          {status === "live" ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
          ) : (
            <button
              disabled
              className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-300 px-5 py-3 font-semibold text-white dark:bg-slate-700 dark:text-slate-300"
            >
              <FaExternalLinkAlt />
              Coming Soon
            </button>
          )}

          {status === "coming soon" ? (
            <button
              disabled
              className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-5 py-3 font-semibold text-slate-400 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500"
            >
              <FaGithub />
              GitHub
            </button>
          ) : (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 shadow-md transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-white dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <FaGithub />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
