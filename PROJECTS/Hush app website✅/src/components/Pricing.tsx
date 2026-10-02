import clsx from "clsx";
import { FadeUp } from "./FadeUp";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: "Four sounds · five stories · timers up to 30 minutes",
    premium: false,
  },
  {
    name: "Premium",
    price: "$4.99/month or $29/year",
    features:
      "All sounds and stories · offline downloads · unlimited timers · new story every week · seven days free",
    premium: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <FadeUp>
        <h2 className="heading-h2 mb-12 text-center md:mb-16">Free covers most nights.</h2>
      </FadeUp>

      <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
        {plans.map((plan, i) => (
          <FadeUp key={plan.name} delay={i * 0.1}>
            <article
              className={clsx(
                "h-full rounded-2xl border bg-card p-8 md:p-10",
                plan.premium ? "border-primary shadow-lg shadow-primary/10" : "border-border",
              )}
            >
              <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
              <p className="mb-6 text-2xl font-bold tracking-tight text-foreground">{plan.price}</p>
              <p className="text-muted-foreground leading-relaxed">{plan.features}</p>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
