"use client";

import { motion } from "framer-motion";
import CodeEditor from "../shared/CodeEditor";
import StatisticsCard from "../shared/StatisticsCard";
import { FaCode, FaUsers, FaBookOpen, FaLightbulb } from "react-icons/fa";
import { IconType } from "react-icons";

export default function About() {
  return (
    <section
      id="about"
      className="bg-transparent pt-16 pb-16 transition-colors dark:bg-slate-950 md:pt-20 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:py-15 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            About Me
          </p>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl leading-tight font-bold dark:text-white">
            Passionate About Building Modern Web Experiences
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-600 text-lg dark:text-slate-300">
            I enjoy turning ideas into beautiful, fast and responsive web
            applications using modern technologies.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 flex flex-col gap-8 self-start overflow-hidden">
            <div className="absolute h-80 w-80 rounded-full bg-blue-500/15 blur-3xl"></div>
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute hidden md:block -top-10 -left-8 h-24 w-24 rounded-full bg-blue-400/30 blur-xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute hidden lg:block top-16 -right-10 h-16 w-16 rounded-full bg-cyan-400/30 blur-lg"
            ></motion.div>
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute hidden lg:block -bottom-8 left-10 h-40 w-20 rounded-full bg-indigo-400/30 blur-xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute hidden md:block -bottom-12 -right-6 h-28 w-28 rounded-full bg-sky-400/30 blur-2xl"
            ></motion.div>

            <div className="relative z-10 overflow-hidden rounded-3xl">
              <CodeEditor />
            </div>

            <div className="relative z-10 hidden lg:block">
              <StatisticsCard />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                My Story
              </span>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
                I'm <span className="font-semibold">Prince Victor</span>, a
                passionate web developer who enjoys transforming ideas into
                fast, responsive and modern web applications. I believe
                technology should solve real world problems while creating
                meaningful experience for users.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
                My journey as a developer has been driven by curiosity,
                continuous learning and the desire to build solutions that
                businesses and individuals can rely on. Every project I work on
                is an opportunity to improve my skills and deliver something
                valuable.
              </p>

              <div className="mt-10">
                <h3 className="mb-5 text-2xl font-bold text-slate-900 dark:text-white">
                  What I Do
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 cursor-pointer">
                  <ServiceCard title="Responsive Websites" />
                  <ServiceCard title="Web Applications" />
                  <ServiceCard title="UI/UX Development" />
                  <ServiceCard title="API Integration" />
                  <ServiceCard title="Performance Optimization" />
                  <ServiceCard title="Modern Frontend Development" />
                </div>
              </div>

              <div className="mt-10">
                <h3 className="mb-5 text-2xl font-bold text-slate-900 dark:text-white">
                  Core Values
                </h3>

                <div className="grid gap-4 cursor-pointer">
                  <ValueCard text="Clean Code" icon={FaCode} />
                  <ValueCard text="User Centered Design" icon={FaUsers} />
                  <ValueCard text="Continous Learning" icon={FaBookOpen} />
                  <ValueCard text="Problem Solving" icon={FaLightbulb} />
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-blue-600 p-6 shadow-xl md:p-8 text-white">
              <h3 className="text-2xl font-bold">My Goal</h3>

              <p className="mt-4 leading-8 text-blue-100">
                My mission is to help businesses, organizations and individuals
                establish a strong online presence by building reliable,
                scalable and visually engaging web solutions that create lasting
                value.
              </p>
            </div>

            <div className="mt-8 lg:hidden">
              <StatisticsCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
}

function ServiceCard({ title }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
    >
      <p className="font-semibold text-slate-800 dark:text-white">{title}</p>
    </motion.div>
  );
}

interface ValueCardProps {
  text: string;
  icon: IconType;
}

function ValueCard({ text, icon: Icon }: ValueCardProps) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
    >
      <Icon className="text-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 dark:text-blue-400" />

      <span className="font-semibold text-slate-800 dark:text-white">
        {text}
      </span>
    </motion.div>
  );
}
