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
    value: "Worldwide",
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
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="mb-8 ">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          My Journey
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
          Development Highlights
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-5 cursor-pointer">
        {statistics.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.25, delay: index * 0.15 }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
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
                <Icon className="text-xl text-blue-600 dark:text-blue-400" />
              </motion.div>

              {typeof item.value === "number" ? (
                <Counter to={item.value} suffix={item.suffix} />
              ) : (
                <h4 className="text-2xl text-slate-900 font-bold dark:text-white">
                  {item.value}
                </h4>
              )}

              <p className="mt-2 font-semibold text-slate-800 dark:text-slate-100">
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
