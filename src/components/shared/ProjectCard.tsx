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
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-900"
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
        className="relative h-64 overflow-hidden bg-slate-100 perspective-1000 dark:bg-slate-800"
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-600 to-slate-900 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-sm opacity-80">Screenshot Coming Soon</p>
            </div>
          </div>
        )}

        <div
          className={`absolute right-4 top-4 rounded-full px-4 y-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg ${status === "live" ? "bg-emerald-500" : status === "coming soon" ? "bg-amber-500" : "bg-blue-600"}`}
        >
          {status === "live"
            ? "Live"
            : status === "coming soon"
              ? "Coming Soon"
              : "In Progress"}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-1/2 bg-white/20 transition-all duration-700 group-hover:left-[140%]"></div>
      </motion.div>

      <div className="space-y-6 p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            {category}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 transition-colors dark:bg-slate-800 dark:text-blue-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {status === "live" ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
          ) : (
            <button
              disabled
              className="flex cursor-not-allowed items-center gap-2 rounded-xl bg-slate-300 px-5 py-3 font-semibold text-white dark:bg-slate-700 dark:text-slate-300"
            >
              <FaExternalLinkAlt />
              Coming Soon
            </button>
          )}

          {status === "coming soon" ? (
            <button
              disabled
              className="flex cursor-not-allowed items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-5 py-3 font-semibold text-slate-400 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500"
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
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 shadow-md transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-white dark:hover:border-blue-500 dark:hover:text-blue-400"
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
