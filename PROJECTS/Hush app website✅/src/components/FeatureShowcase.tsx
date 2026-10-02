import clsx from "clsx";
import { FadeUp } from "./FadeUp";
import { PhoneMockup, type PhoneScreen } from "./PhoneMockup";

const features: {
  title: string;
  body: string;
  screen: PhoneScreen;
}[] = [
  {
    title: "Sleep stories, read slowly",
    body:
      "Forty stories recorded at a deliberate pace by people with unhurried voices. Most listeners never hear the ending.",
    screen: "story",
  },
  {
    title: "Breathing that matches your night",
    body:
      "Pick four minutes or twelve. The circle on screen dims as you go, so it never becomes the bright thing in a dark room.",
    screen: "breathing",
  },
  {
    title: "A wind-down that learns your bedtime",
    body:
      "Hush notices when you usually start and quietly gets ready, without asking you to set a schedule.",
    screen: "timer",
  },
];

export function FeatureShowcase() {
  return (
    <section id="features" className="section-pad">
      <div className="flex flex-col gap-24 md:gap-32">
        {features.map((feature, i) => {
          const reversed = i % 2 === 1;
          return (
            <FadeUp key={feature.title} delay={0.05}>
              <div
                className={clsx(
                  "flex flex-col items-center gap-12 md:gap-16",
                  reversed ? "md:flex-row-reverse" : "md:flex-row",
                )}
              >
                <div className="flex flex-1 justify-center">
                  <PhoneMockup
                    screen={feature.screen}
                    float
                    floatDelay={i * 0.4}
                    className="max-md:[&_*]:!transform-none"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="heading-h2 mb-6 max-w-lg">{feature.title}</h3>
                  <p className="max-w-lg text-muted-foreground">{feature.body}</p>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
