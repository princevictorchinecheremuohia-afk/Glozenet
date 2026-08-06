"use client";

import { motion } from "framer-motion";
import ProjectCard from "../shared/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="project"
      className="bg-transparent pt-16 pb-16 transition-colors md:pt-20 md:pb-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Featured Projects
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl dark:text-white">
            Projects That Solve Real Problems
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            Here are some of the projects I've built using modern technologies,
            focusing on performance, usability and clean design.
          </p>

          <div className="mt-12 grid gap-6 sm:gap-8 md:mt-16 md:grid-cols-2 lg:mt-20">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                tech={project.tech}
                live={project.live}
                github={project.demo}
                status={project.status}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
