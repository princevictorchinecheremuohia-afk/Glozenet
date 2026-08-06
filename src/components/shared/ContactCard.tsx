import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface ContactCardProps {
  icon: IconType;
  title: string;
  value: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
}: ContactCardProps) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-500 hover:shadow-lg cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
        <Icon className="text-xl text-blue-600" />
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {title}
        </p>

        <p className="mt-1 break-all font-semibold text-slate-900 dark:text-white">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
