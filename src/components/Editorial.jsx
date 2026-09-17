import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Editorial() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="grid items-center gap-10 rounded-[2.5rem]  bg-gradient-to-br from-blue-950 via-slate-950 to-black px-8 py-12 sm:px-14 sm:py-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="font-mono text-xs uppercase tracking-widest text-white/70">
            The Lookbook — Issue 04
          </p>
          <h2 className="mt-3 max-w-md font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Bold color, tailored shapes, zero compromises.
          </h2>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-white/80">
            Our latest collection pairs saturated color blocking with
            considered tailoring — built for people who dress like it
            matters.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-ink transition hover:bg-white/90"
          >
            Explore Collections <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="order-1 overflow-hidden rounded-3xl lg:order-2">
          <img
            src="https://picsum.photos/seed/trendzone-editorial/700/560"
            alt="Editorial lookbook feature"
            className="h-72 w-full object-cover sm:h-96"
          />
        </div>
      </div>
    </section>
  );
}
