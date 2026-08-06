"use client";

import { motion } from "framer-motion";

export default function CodeEditor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-hidden"
    >
      <div className="absolute -left-10 -top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#0f172a] shadow-2xl md:rounded-3xl">
        <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-4 py-3 sm:px-5">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500 "></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500 "></div>
            <div className="h-3 w-3 rounded-full bg-green-500 "></div>
          </div>

          <p className="font-mono text-xs text-slate-400 sm:text-sm">
            developer.ts
          </p>

          <div className="w-12"></div>
        </div>

        <div className="overflow-x-auto p-4 font-mono text-xs leading-7 sm:p-6 sm:text-sm sm:leading-8">
          <CodeLine number="1">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">developer</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-300">{"{"}</span>{" "}
          </CodeLine>

          <CodeLine number="2">
            &nbsp;&nbsp;
            <span className="text-sky-400">name</span>{" "}
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">"Prince Victor"</span>{" "}
          </CodeLine>

          <CodeLine number="3">
            &nbsp;&nbsp;
            <span className="text-sky-400">role</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">"Web Developer"</span>,
          </CodeLine>

          <CodeLine number="4">
            &nbsp;&nbsp;
            <span className="text-sky-400">location</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">"Nigeria"</span>,
          </CodeLine>

          <CodeLine number="5">
            &nbsp;&nbsp;
            <span className="text-sky-400">stack</span>
            <span className="text-white">:</span>{" "}
            <span className="text-yellow-300">[</span>
          </CodeLine>

          <CodeLine number="6">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-green-400">"React"</span>,
          </CodeLine>

          <CodeLine number="7">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-green-400">"Next.js"</span>,
          </CodeLine>

          <CodeLine number="8">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-green-400">"TypeScript"</span>,
          </CodeLine>

          <CodeLine number="9">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-green-400">"Tailwind CSS"</span>,
          </CodeLine>

          <CodeLine number="10">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-green-400">"Node.js"</span>,
          </CodeLine>

          <CodeLine number="11">
            &nbsp;&nbsp;
            <span className="text-yellow-300">]</span>,
          </CodeLine>

          <CodeLine number="12">
            &nbsp;&nbsp;
            <span className="text-sky-400">passion</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">
              "Building modern web experiences"
            </span>
            ,
          </CodeLine>

          <CodeLine number="13">
            &nbsp;&nbsp;
            <span className="text-sky-400">available</span>
            <span className="text-white">:</span>{" "}
            <span className="text-orange-400">true</span>,
          </CodeLine>

          <CodeLine number="14">
            <span className="text-yellow-300">{"}"}</span>;
            <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-white sm:h-5"></span>
          </CodeLine>
        </div>
      </div>
    </motion.div>
  );
}

interface CodeLineProps {
  number: string;
  children: React.ReactNode;
}

function CodeLine({ number, children }: CodeLineProps) {
  return (
    <div className="flex">
      <span className="mr-3 w-5 select-none text-right text-slate-500 sm:mr-6 sm:w-6">
        {number}
      </span>

      <div className="text-slate-200">{children}</div>
    </div>
  );
}
