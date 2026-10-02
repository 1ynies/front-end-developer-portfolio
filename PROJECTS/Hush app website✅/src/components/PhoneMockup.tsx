import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type RefObject } from "react";
import clsx from "clsx";
import { Moon, Play, Wind } from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export type PhoneScreen = "hero" | "story" | "breathing" | "timer";

type PhoneMockupProps = {
  screen?: PhoneScreen;
  className?: string;
  scrollRotate?: boolean;
  scrollTargetRef?: RefObject<HTMLElement | null>;
  float?: boolean;
  floatDelay?: number;
};

function ScreenContent({ screen }: { screen: PhoneScreen }) {
  if (screen === "story") {
    return (
      <div className="flex h-full flex-col p-5 pt-10">
        <p className="text-label mb-2 text-[10px]">Now playing</p>
        <h3 className="text-lg font-bold leading-tight">The last ferry</h3>
        <div className="mt-6 flex flex-1 flex-col justify-center gap-1 px-1">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="mx-auto rounded-full bg-primary/40"
              style={{
                width: `${20 + Math.abs(Math.sin(i * 0.5)) * 60}%`,
                height: 3,
                opacity: 0.3 + Math.abs(Math.sin(i * 0.4)) * 0.5,
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
            <Play className="h-5 w-5 fill-primary text-primary" />
          </div>
        </div>
      </div>
    );
  }

  if (screen === "breathing") {
    return (
      <div className="flex h-full flex-col items-center justify-center p-5">
        <p className="text-label mb-8 text-[10px]">Breathe</p>
        <motion.div
          className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Wind className="h-10 w-10 text-primary/80" />
        </motion.div>
        <p className="mt-10 text-sm text-muted-foreground">Hold · 4 min left</p>
      </div>
    );
  }

  if (screen === "timer") {
    return (
      <div className="flex h-full flex-col p-5 pt-12">
        <p className="text-label mb-4 text-[10px]">Fade timer</p>
        <p className="text-4xl font-bold tabular-nums tracking-tight">22:30</p>
        <p className="mt-2 text-sm text-muted-foreground">Screen off in 28 min</p>
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-border">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary/60 to-primary" />
        </div>
        <div className="mt-auto rounded-2xl border border-border bg-card/50 p-4">
          <p className="text-sm font-medium">Night forest</p>
          <p className="text-xs text-muted-foreground">Fading to silence</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/25 via-transparent to-background"
        aria-hidden
      />
      <div className="relative flex flex-1 flex-col items-center justify-center p-5">
        <Moon className="mb-6 h-14 w-14 text-primary" strokeWidth={1.25} />
        <p className="text-3xl font-bold tabular-nums">22:47</p>
        <p className="mt-2 text-sm text-muted-foreground">Sleep in 43 min</p>
        <button
          type="button"
          className="mt-10 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground"
        >
          Start wind-down
        </button>
      </div>
    </div>
  );
}

export function PhoneMockup({
  screen = "hero",
  className,
  scrollRotate = false,
  scrollTargetRef,
  float = true,
  floatDelay = 0,
}: PhoneMockupProps) {
  const fallbackRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const enable3d = scrollRotate && !isMobile;
  const scrollTarget = scrollTargetRef ?? fallbackRef;

  const { scrollYProgress } = useScroll({
    target: enable3d ? scrollTarget : undefined,
    offset: ["start start", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-14, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [3, 0]);

  return (
    <div
      ref={fallbackRef}
      className={clsx(enable3d && "perspective-[1500px]", className)}
      style={enable3d ? { perspective: 1500 } : undefined}
    >
      <motion.div
        className="relative mx-auto w-[240px] md:w-[280px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: floatDelay, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={float ? { y: [0, -12, 0] } : undefined}
          transition={
            float
              ? {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2 + floatDelay,
                }
              : undefined
          }
          style={
            enable3d
              ? {
                  rotateY,
                  rotateZ,
                  transformStyle: "preserve-3d",
                }
              : undefined
          }
        >
          <div className="rounded-[2.5rem] border border-border bg-[hsl(232,42%,9%)] p-2 shadow-2xl shadow-black/50">
            <div className="aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-[hsl(232,44%,7%)]">
              <ScreenContent screen={screen} />
            </div>
          </div>
          <div
            className="absolute -bottom-4 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"
            aria-hidden
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
