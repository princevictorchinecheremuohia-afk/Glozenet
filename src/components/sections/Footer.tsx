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
      <div className="mx-auto max-w-7xl py-20 px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
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

            <p className="mt-6 leading-8 text-slate-400">
              Building modern, fast and responsive web experiences that help
              businesses, brands and individuals establish a strong online
              presence.
            </p>

            <div className="mt-8 flex items-center gap-4">
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
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4">
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
            <h3 className="text-xl font-semibold text-white">Contact</h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-5">
                <FaEnvelope />
                <a
                  href="mailto:ohiaprincevictor2020@gmail.com"
                  className="break-all text-slate-400 transition hover:text-blue-400"
                >
                  ohiaprincevictor2020@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-5">
                <FaPhoneAlt />
                <a
                  href="tel:+2349130840647"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  +234 913 084 0647
                </a>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt />
                <a
                  href="https://maps.google.com/?q=Port+Harcourt,Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition hover:text-blue-400"
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
            className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center "
          >
            <p className="text-sm text-slate-400">
              © 2026 Glopenet. All rights reserved.
            </p>

            <p className="text-sm text-slate-400">
              Designed & Developed by{" "}
              <span className="font-semibold text-white">Prince Victor</span>
            </p>

            <p className="text-sm text-slate-400">
              Built with <span className="font-medium text-white">Next.js</span>
              {" • "}
              <span className="font-medium text-white">TypeScript</span>
              {" • "}
              <span className="font-medium text-white">Tailwind CSS</span>
            </p>

            <div className="mt-10 flex justify-center">
              <motion.a
                href="#home"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
              >
                <FaArrowUp className="text-lg" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
