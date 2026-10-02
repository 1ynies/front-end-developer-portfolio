import clsx from "clsx";

type StoreBadgesProps = {
  className?: string;
  compact?: boolean;
};

export function StoreBadges({ className, compact }: StoreBadgesProps) {
  const badgeClass = clsx(
    "inline-flex items-center justify-center rounded-xl border border-border bg-card/80 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-card",
    compact && "px-3 py-2 text-xs",
  );

  return (
    <div className={clsx("flex flex-wrap gap-3", className)}>
      <a href="#download" className={badgeClass}>
        {compact ? "App Store" : "Download on the App Store"}
      </a>
      <a href="#download" className={badgeClass}>
        {compact ? "Google Play" : "Get it on Google Play"}
      </a>
    </div>
  );
}
