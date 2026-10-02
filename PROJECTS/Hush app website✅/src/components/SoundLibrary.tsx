import { motion } from "motion/react";
import {
  CloudRain,
  Waves,
  Trees,
  CloudLightning,
  Flame,
  Snowflake,
  Fan,
  TrainFront,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeUp } from "./FadeUp";

const sounds: { icon: LucideIcon; name: string; duration: string }[] = [
  { icon: CloudRain, name: "Rain on a tent", duration: "45 min" },
  { icon: Waves, name: "Slow ocean", duration: "60 min" },
  { icon: Trees, name: "Night forest", duration: "45 min" },
  { icon: CloudLightning, name: "Distant thunder", duration: "30 min" },
  { icon: Flame, name: "Cabin fire", duration: "60 min" },
  { icon: Snowflake, name: "Snowfall", duration: "45 min" },
  { icon: Fan, name: "Old fan", duration: "90 min" },
  { icon: TrainFront, name: "Train at night", duration: "60 min" },
];

export function SoundLibrary() {
  return (
    <section id="sounds" className="section-pad">
      <FadeUp>
        <h2 className="heading-h2 mb-12 text-center md:mb-16">
          Eight sounds. That&apos;s all we need.
        </h2>
      </FadeUp>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {sounds.map((sound, i) => (
          <FadeUp key={sound.name} delay={i * 0.05}>
            <motion.button
              type="button"
              className="group w-full rounded-2xl border border-border bg-card p-6 text-left transition-colors duration-250 hover:border-primary/50"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <sound.icon
                className="mb-4 h-6 w-6 text-primary transition-colors group-hover:text-primary"
                strokeWidth={1.5}
              />
              <p className="font-medium text-foreground">{sound.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{sound.duration}</p>
            </motion.button>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
