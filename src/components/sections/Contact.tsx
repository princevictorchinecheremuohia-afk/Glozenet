"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPaperPlane,
} from "react-icons/fa";
import ContactCard from "../shared/ContactCard";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.from_name.trim() ||
      !formData.from_email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success("Thanks! I'll get back to you within 24 hours.");

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-transparent pt-16 pb-16 transition-colors sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl dark:text-white">
            Let's Build Something Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            Have a project in mind or need a modern website? I'd love to hear
            from you. Let's build something amazing together.
          </p>

          <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors sm:p-6 lg:p-8 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-xl font-bold sm:text-2xl text-slate-900 dark:text-white">
                Get In Touch
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                Whether you have a project idea, need a modern website, or
                simply want to say hello, I'd love to hear from you.
              </p>

              <div className="mt-8 space-y-4">
                <ContactCard
                  icon={FaEnvelope}
                  title="email"
                  value="ohiaprincevictor2020@gmail.com"
                />

                <ContactCard
                  icon={FaPhoneAlt}
                  title="Phone"
                  value="+234 913 084 0647"
                />

                <ContactCard
                  icon={FaMapMarkerAlt}
                  title="Location"
                  value="Port Harcourt, Nigeria"
                />

                <ContactCard
                  icon={FaBriefcase}
                  title="Availability"
                  value="Available for Freelance"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors sm:p-6 lg:p-8 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-xl font-bold sm:text-2xl text-slate-900 dark:text-white">
                Send Me a Message
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-semibold text-sm text-slate-700 dark:text-slate-300">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Prince Victor"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-sm text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="prince@example.com"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-sm text-slate-700 dark:text-slate-300">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-sm text-slate-700 dark:text-slate-300">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell me about your project"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 sm:text-base cursor-pointer"
                >
                  <FaPaperPlane />
                  {loading ? "Sending" : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
