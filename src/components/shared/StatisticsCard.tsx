"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaLayerGroup,
  FaHandshake,
  FaGlobeAfrica,
} from "react-icons/fa";
import Counter from "./Counter";

const statistics = [
  {
    icon: FaLaptopCode,
    value: 10,
    suffix: "+",
    title: "Project Built",
    description: "Personal & client projects",
  },

  {
    icon: FaLayerGroup,
    value: 5,
    suffix: "+",
    title: "Technologies",
    description: "Modern web stack",
  },

  {
    icon: FaHandshake,
    value: 100,
    suffix: "%",
    title: "Commitment",
    description: "Quality over quantity",
  },

  {
    icon: FaGlobeAfrica,
    value: "WorldWide",
    title: "Available",
    description: "Open for remote work",
  },
];

export default function StatisticsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-colors sm:p-6 md:p-8 dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="mb-6 md:mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          My Journey
        </p>

        <h3 className="mt-2 text-xl font-bold sm:text-2xl dark:text-white text-slate-900">
          Development Highlights
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 cursor-pointer">
        {statistics.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.25, delay: index * 0.15 }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center shadow-sm transition hover:border-blue-500 hover:shadow-lg sm:p-4 md:p-5 dark:border-slate-700 dark:bg-slate-800"
            >
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.15,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-slate-700"
              >
                <Icon className="text-lg text-blue-600 sm:text-xl dark:text-blue-400" />
              </motion.div>

              {typeof item.value === "number" ? (
                <Counter to={item.value} suffix={item.suffix} />
              ) : (
                <h4 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                  {item.value}
                </h4>
              )}

              <p className="mt-2 text-sm font-semibold leading-5 text-slate-800 sm:text-base dark:text-slate-100">
                {item.title}
              </p>

              {/* <p className="">DESCRIPTION TO BE ADDED IN THE FUTURE</p> */}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
