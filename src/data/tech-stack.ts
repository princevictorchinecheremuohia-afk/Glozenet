import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
} from "react-icons/si";

export const techStack = [
  {
    name: "React",
    icon: SiReact,
    className: "top-4 left-1/2 -translate-x-1/2 bg-blue-700",
    styles: {
      bg: "bg-sky-700",
      border: "border-sky-200",
      text: "text-sky-500",
    },
  },

  {
    name: "Next.js",
    icon: SiNextdotjs,
    className: "top-24 left-0 bg-black",
    styles: {
      bg: "bg-slate-50",
      border: "border-slate-300",
      text: "text-slate-900",
    },
  },

  {
    name: "TypeScript",
    icon: SiTypescript,
    className: "top-24 right-[-25]",
    styles: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    className: "bottom-20 left-[-30]",
    styles: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-700",
    },
  },

  {
    name: "Node.js",
    icon: SiNodedotjs,
    className: "bottom-20 right-2",
    styles: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
    },
  },

  {
    name: "Javascript",
    icon: SiJavascript,
    className: "bottom-4 left-1/2 -translate-x-1/2",
    styles: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-700",
    },
  },
];
