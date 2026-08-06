"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  from?: number;
  to: number;
  suffix?: string;
}

export default function Counter({ from = 0, to, suffix = "" }: CounterProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const motionValue = useMotionValue(from);

  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <motion.span
      ref={ref}
      className="text-2xl font-bold text-slate-900 dark:text-white"
    >
      {from}
    </motion.span>
  );
}
