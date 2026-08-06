"use client";

import { motion } from "framer-motion";
import ProjectCard from "../shared/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="project"
      className="bg-transparent transition-colors dark:bg-slate-950 pt-20 pb-24"
    >
      <div className="mx-auto max-w-7xl py-15 px-6 lg:px-8">
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

          <h2 className="mt-4 text-3xl md:text-4xl font-bold dark:text-white">
            Projects That Solves Real Problems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-600 text-lg dark:text-slate-300">
            Here are some of the projects I've built using modern technologies,
            focusing on performance, usability and clean design.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
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
