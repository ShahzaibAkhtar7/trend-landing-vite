import React from "react";

const reviews = [
  {
    quote:
      "TrendZone's styles are fresh, bold, and exactly what I needed to upgrade my wardrobe. Loved the quality and vibe!",
    name: "Rafi H.",
    tone: "text-clay",
  },
  {
    quote:
      "Fast shipping, true-to-size fits, and the color palettes are unlike anything else in my closet right now.",
    name: "Meera S.",
    tone: "text-clover",
  },
  {
    quote:
      "I get compliments every time I wear the wool coat. Worth every penny — already eyeing my next order.",
    name: "Owen D.",
    tone: "text-marigold",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-clay">
        Word on the street
      </p>
      <h2 className="mt-2 mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        What customers are saying
      </h2>

      <div className="grid gap-8 sm:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.name}>
            <span className="text-3xl leading-none text-neutral-300">
              &#8220;
            </span>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600">
              {r.quote}
            </p>
            <p className={`mt-4 font-['cursive'] text-xl italic ${r.tone}`}>
              {r.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
