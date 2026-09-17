import React from "react";

const words = [
  "Streetwear",
  "Outerwear",
  "Knitwear",
  "Accessories",
  "Footwear",
  "Loungewear",
];

export default function Marquee() {
  const row = [...words, ...words];

  return (
    <div className="w-full overflow-hidden border-y border-black bg-white py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl font-semibold"
          >
            {word}
            <span className="text-blue-900">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
