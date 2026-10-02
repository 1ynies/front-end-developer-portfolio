import { Ban, CloudOff, Timer } from "lucide-react";
import { FadeUp } from "./FadeUp";
import type { LucideIcon } from "lucide-react";

const pillars: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Ban,
    title: "Nothing to scroll",
    body:
      "One screen, one button. No feed, no streaks, no notifications at 9pm telling you to relax.",
  },
  {
    icon: Timer,
    title: "Fades out by itself",
    body:
      "Every session ends on a timer that tapers the volume, so nothing wakes you at 3am.",
  },
  {
    icon: CloudOff,
    title: "Works offline",
    body: "Download what you use. Airplane mode is the point.",
  },
];

export function Pillars() {
  return (
    <section className="section-pad">
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <FadeUp key={pillar.title} delay={i * 0.1}>
            <article className="h-full rounded-2xl border border-border bg-card p-8">
              <pillar.icon className="mb-6 h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="mb-3 text-xl font-bold tracking-tight">{pillar.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{pillar.body}</p>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
