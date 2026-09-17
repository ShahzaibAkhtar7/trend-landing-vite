import React from "react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Outerwear",
    count: "24 pieces",
    tone: "bg-blue-900",
    img: "https://picsum.photos/seed/trendzone-cat-outerwear/500/560",
  },
  {
    name: "Knitwear",
    count: "18 pieces",
    tone: "bg-clover",
    img: "https://picsum.photos/seed/trendzone-cat-knitwear/500/560",
  },
  {
    name: "Accessories",
    count: "31 pieces",
    tone: "bg-marigold",
    img: "https://picsum.photos/seed/trendzone-cat-accessories/500/560",
  },
  {
    name: "Footwear",
    count: "15 pieces",
    tone: "bg-skyblue",
    img: "https://picsum.photos/seed/trendzone-cat-footwear/500/560",
  },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-blue-900">
            Shop by category
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Find your next fit
          </h2>
        </div>
        <a
          href="#"
          className="hidden items-center gap-1.5 font-body text-sm font-medium text-ink/70 hover:text-ink sm:flex"
        >
          View all categories <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className={`group relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl ${cat.tone} p-5 sm:h-80`}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-luminosity transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="relative">
              <p className="font-display text-xl font-bold text-white">{cat.name}</p>
              <p className="mt-0.5 font-mono text-[11px] text-white/80">{cat.count}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
