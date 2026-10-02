import { motion } from "motion/react";

type AuroraProps = {
  className?: string;
  compact?: boolean;
};

export function Aurora({ className = "", compact }: AuroraProps) {
  const size = compact ? "h-80 w-80 md:h-[560px] md:w-[560px]" : "h-[560px] w-[560px]";
  const top = compact ? "-top-20" : "-top-40";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className={`absolute ${top} left-1/4 ${size} rounded-full bg-[hsl(258,78%,60%)] blur-[120px] opacity-35`}
        animate={{ x: [0, 160, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-1/4 right-1/4 ${size} rounded-full bg-accent blur-[120px] opacity-35`}
        animate={{ x: [0, -140, 0], y: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
