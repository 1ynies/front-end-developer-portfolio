import { motion } from "motion/react";
import { useMemo } from "react";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${seededRandom(i) * 100}%`,
      top: `${seededRandom(i + 50) * 85}%`,
      size: seededRandom(i + 100) > 0.5 ? 2 : 1,
      opacity: 0.1 + seededRandom(i + 200) * 0.2,
      twinkle: seededRandom(i + 300) > 0.65,
      duration: 3 + seededRandom(i + 400) * 2,
      delay: seededRandom(i + 500) * 2,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((star) =>
        star.twinkle ? (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-foreground"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ) : (
          <div
            key={star.id}
            className="absolute rounded-full bg-foreground"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ),
      )}
    </div>
  );
}
