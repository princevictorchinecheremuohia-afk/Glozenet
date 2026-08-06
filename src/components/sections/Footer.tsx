"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <span className="text-2xl font-bold tracking-tight">
                {siteConfig.name}.
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              Building modern, fast and responsive web experiences that help
              businesses, brands and individuals establish a strong online
              presence.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/princevictorchinecheremuohia-afk"
                target="blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                <FaGithub size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/prince-victor-ohia"
                target="blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/profile.php?id=61587904857612"
                target="blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebook size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-5">
              <li>
                <a
                  href="#home"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#project"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Contact
            </h3>

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-4">
                <FaEnvelope />
                <a
                  href="mailto:ohiaprincevictor2020@gmail.com"
                  className="break-all text-sm text-slate-400 transition hover:text-blue-400 sm:text-base"
                >
                  ohiaprincevictor2020@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt />
                <a
                  href="tel:+2349130840647"
                  className="text-sm text-slate-400 transition hover:text-blue-400 sm:text-base"
                >
                  +234 913 084 0647
                </a>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt />
                <a
                  href="https://maps.google.com/?q=Port+Harcourt,Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition hover:text-blue-400 sm:text-base"
                >
                  Port Harcourt, Nigeria
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-slate-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left"
          >
            <p className="text-sm text-slate-400">
              © 2026 Glopenet. All rights reserved.
            </p>

            <p className="text-sm text-slate-400">
              Designed & Developed by{" "}
              <span className="font-semibold text-white">Prince Victor</span>
            </p>

            <p className="text-xs text-slate-400 sm:text-sm">
              Built with <span className="font-medium text-white">Next.js</span>
              {" • "}
              <span className="font-medium text-white">TypeScript</span>
              {" • "}
              <span className="font-medium text-white">Tailwind CSS</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
