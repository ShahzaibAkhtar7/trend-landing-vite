import React from "react";

/**
 * HangTag — a small clothing-tag shaped label.
 * Used throughout the site for prices and micro-labels,
 * echoing a physical garment tag (notch + punched hole).
 */
export default function HangTag({ children, tone = "ink", className = "" }) {
  const tones = {
    ink: "bg-ink text-white",
    paper: "bg-white text-ink border border-ink/15",
    clay: "bg-clay text-white",
  };

  return (
    <span
      className={`relative inline-flex items-center gap-1.5 rounded-[4px] py-1 pl-3 pr-2.5 font-mono text-[11px] tracking-wide ${tones[tone]} ${className}`}
    >
      <span className="absolute -left-[3px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white ring-1 ring-inset ring-ink/20" />
      {children}
    </span>
  );
}
