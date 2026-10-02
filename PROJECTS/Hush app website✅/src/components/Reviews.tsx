import { Star } from "lucide-react";
import { FadeUp } from "./FadeUp";

const reviews = [
  {
    headline: "Finally, an app that shuts up",
    body:
      "I've tried six of these. This is the only one that doesn't try to keep me on the phone.",
    name: "Maya",
  },
  {
    headline: "My kid asks for the rain one",
    body:
      "We use it for bedtime every night now. The fade-out is the whole trick.",
    name: "Dan",
  },
  {
    headline: "Worth it for the fan sound alone",
    body: "I travel constantly and hotel rooms are too quiet. Solved.",
    name: "Priya",
  },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="section-pad">
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review, i) => (
          <FadeUp key={review.name} delay={i * 0.1}>
            <article className="h-full rounded-2xl border border-border bg-card p-8">
              <Stars />
              <h3 className="mb-3 text-lg font-bold leading-snug">
                &ldquo;{review.headline}&rdquo;
              </h3>
              <p className="mb-6 text-muted-foreground">{review.body}</p>
              <p className="text-sm font-medium text-foreground">— {review.name}</p>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
