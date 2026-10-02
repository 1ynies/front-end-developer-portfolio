import { motion } from "motion/react";
import { Aurora } from "./Aurora";
import { StoreBadges } from "./StoreBadges";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <Aurora className="opacity-80" compact />
      <div className="section-pad relative z-10 text-center">
        <motion.h2
          className="heading-h2 mx-auto mb-6 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          Tonight, put it down at 22:30.
        </motion.h2>
        <motion.p
          className="mx-auto mb-10 max-w-md text-muted-foreground"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Seven days free, then $4.99 a month. Cancel in two taps.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <StoreBadges compact />
        </motion.div>
      </div>
    </section>
  );
}
