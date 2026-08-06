import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  icon: IconType;
  className?: string;
  styles: {
    bg: string;
    border: string;
    text: string;
  };
}

export default function TechBadge({
  name,
  icon: Icon,
  className = "",

  styles,
}: TechBadgeProps) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute flex items-center gap-1 rounded-full border border-slate-200 bg-white dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 px-4 py-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer ${className} ${styles.bg} ${styles.border}`}
    >
      <Icon className={`h-5 w-5 ${styles.text}`} />

      <span className="text-sm font-medium ">{name}</span>
    </motion.div>
  );
}
