import { motion } from "motion/react";
import { useRef } from "react";
import { StarField } from "./StarField";
import { Aurora } from "./Aurora";
import { PhoneMockup } from "./PhoneMockup";
import { StoreBadges } from "./StoreBadges";

const h1Lines = ["Put the phone", "down. We'll", "take it from here."];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] overflow-hidden pt-[76px]"
    >
      <Aurora compact />
      <StarField />

      <div className="section-pad relative z-10 flex min-h-[calc(100vh-76px)] flex-col md:flex-row md:items-center md:gap-8">
        <div className="order-2 flex flex-1 flex-col justify-center md:order-1 md:max-w-[55%]">
          <motion.p
            className="text-label mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            SLEEP & WIND-DOWN
          </motion.p>

          <h1 className="heading-h1 mb-8">
            {h1Lines.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mb-8 max-w-xl text-muted-foreground"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hush turns your phone into the one thing in the bedroom that helps you sleep: a dark
            screen, a slow voice, and sounds that fade out on their own.
          </motion.p>

          <motion.div
            id="download"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <StoreBadges className="mb-6" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">4.8 stars</span> · 62,000 ratings
            </p>
          </motion.div>
        </div>

        <div className="order-1 flex flex-1 items-center justify-center md:order-2 md:max-w-[45%] max-md:h-[52vh] max-md:min-h-[280px]">
          <PhoneMockup screen="hero" scrollRotate scrollTargetRef={sectionRef} />
        </div>
      </div>
    </section>
  );
}
