import React from "react";
import { Heart } from "lucide-react";
import HangTag from "./HangTag.jsx";

const products = [
  {
    name: "Vermillion Track Jacket",
    price: "$128",
    tone: "bg-clay/10",
    img: "https://picsum.photos/seed/trendzone-p1/460/560",
  },
  {
    name: "Oversized Wool Coat",
    price: "$212",
    tone: "bg-clover/10",
    img: "https://picsum.photos/seed/trendzone-p2/460/560",
  },
  {
    name: "Marigold Cable Knit",
    price: "$96",
    tone: "bg-marigold/15",
    img: "https://picsum.photos/seed/trendzone-p3/460/560",
  },
  {
    name: "Cloud Cargo Set",
    price: "$154",
    tone: "bg-skyblue/25",
    img: "https://picsum.photos/seed/trendzone-p4/460/560",
  },
  {
    name: "Heart-Frame Sunglasses",
    price: "$58",
    tone: "bg-blush/40",
    img: "https://picsum.photos/seed/trendzone-p5/460/560",
  },
  {
    name: "Emerald Satin Shirt",
    price: "$88",
    tone: "bg-clover/10",
    img: "https://picsum.photos/seed/trendzone-p6/460/560",
  },
  {
    name: "Amber Wide-Brim Hat",
    price: "$46",
    tone: "bg-marigold/15",
    img: "https://picsum.photos/seed/trendzone-p7/460/560",
  },
  {
    name: "Sunset Jogger Set",
    price: "$134",
    tone: "bg-clay/10",
    img: "https://picsum.photos/seed/trendzone-p8/460/560",
  },
];

export default function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-clay">
            Just landed
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            New arrivals
          </h2>
        </div>
        <a
          href="#"
          className="hidden font-body text-sm font-medium text-ink/70 hover:text-ink sm:block"
        >
          View full catalog →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <div key={p.name} className="group">
            <div className={`relative overflow-hidden rounded-3xl ${p.tone}`}>
              <img
                src={p.img}
                alt={p.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <button
                aria-label="Save to wishlist"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink/70 opacity-0 transition group-hover:opacity-100 hover:text-clay"
              >
                <Heart size={15} />
              </button>
            </div>
            <div className="mt-3 flex items-start justify-between gap-2">
              <p className="font-body text-sm font-medium leading-snug">{p.name}</p>
              <HangTag tone="paper" className="shrink-0">
                {p.price}
              </HangTag>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
