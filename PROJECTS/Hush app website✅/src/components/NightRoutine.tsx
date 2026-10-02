import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeUp } from "./FadeUp";

const steps = [
  {
    time: "21:00",
    title: "Dim everything",
    body: "Hush switches to a red-shifted screen and drops the interface brightness.",
  },
  {
    time: "21:45",
    title: "Wind down",
    body: "A four-minute breathing session, or a stretch you can do in bed.",
  },
  {
    time: "22:30",
    title: "Story or sound",
    body: "Pick one and set a fade. Most people choose thirty minutes.",
  },
  {
    time: "23:00",
    title: "Nothing",
    body: "The screen goes black and stays that way until morning.",
  },
];

export function NightRoutine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className="section-pad">
      <FadeUp>
        <h2 className="heading-h2 mb-16 text-center">Your last two hours, made easier.</h2>
      </FadeUp>

      <div className="relative mx-auto max-w-xl">
        <div ref={lineRef} className="absolute left-[4.5rem] top-0 bottom-0 w-px md:left-24">
          <motion.div
            className="h-full w-full origin-top bg-gradient-to-b from-primary via-primary/50 to-transparent"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <ul className="flex flex-col gap-12">
          {steps.map((step, i) => (
            <FadeUp key={step.time} delay={i * 0.1}>
              <li className="relative flex gap-8 md:gap-12">
                <time
                  className="w-16 shrink-0 text-right text-sm font-medium tabular-nums text-primary md:w-20"
                  dateTime={step.time}
                >
                  {step.time}
                </time>
                <div className="pt-0.5">
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-base">{step.body}</p>
                </div>
              </li>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
