import { IconType } from "react-icons";

interface MobileTechBadgeProps {
  name: string;
  icon: IconType;
  styles: {
    bg: string;
    border: string;
    text: string;
  };
}

export default function MobileTechBadge({
  name,
  icon: Icon,
  styles,
}: MobileTechBadgeProps) {
  return (
    <div
      className={`flex items-start gap-1 w-100 rounded-full border border-slate-200 bg-white dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 px-4 py-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer ${styles.bg} ${styles.border}`}
    >
      <Icon className={`h-5 w-5 ${styles.text}`} />

      <span className="text-sm font-medium ">{name}</span>
    </div>
  );
}
