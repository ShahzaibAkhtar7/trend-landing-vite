import React from "react";
import { Play, ArrowUpRight, ArrowRight, Plus } from "lucide-react";

/**
 * HeroSection
 * A bold fashion-brand hero, recreated with Tailwind CSS.
 * Swap the `src` values in `images` below with your own photography.
 *
 * Responsive notes:
 * - Top row (badge / headline / avatars) stacks on mobile, becomes a
 *   3-column grid at sm+ using `contents` so the DOM order can stay
 *   semantic while the visual order matches desktop.
 * - Image grid uses grid-cols-2 -> sm:grid-cols-3 -> lg:grid-cols-5 so
 *   every photo stays visible at every breakpoint instead of being
 *   hidden on smaller screens; only the fixed pixel heights shrink.
 * - Type scale and spacing step down at each breakpoint.
 */

const images = {
  col1Top:
    "https://picsum.photos/seed/trendzone-orange/500/560",
  col1Bottom:
    "https://picsum.photos/seed/trendzone-mustard/500/220",
  col2:
    "https://picsum.photos/seed/trendzone-green-coat/500/760",
  col3:
    "https://picsum.photos/seed/trendzone-yellow-hat/500/560",
  col4:
    "https://picsum.photos/seed/trendzone-blue/500/760",
  col5Top:
    "https://picsum.photos/seed/trendzone-sunglasses/500/560",
  col5Bottom:
    "https://picsum.photos/seed/trendzone-dark-green/500/220",
};

const avatars = [
  "https://picsum.photos/seed/trendzone-avatar1/64/64",
  "https://picsum.photos/seed/trendzone-avatar2/64/64",
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="w-full bg-gradient-to-b from-blue-950 via-slate-950 to-black text-white"
    >
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-16 lg:px-10">
        {/* Top row: video badge / headline / avatars */}
        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
          <div className="flex items-center justify-between sm:contents">
            {/* Spinning "watch this video" badge */}
            <div className="flex justify-start text-white sm:order-1">
              <div className="group relative flex h-16 w-16 items-center justify-center text-white sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full text-white animate-[spin_9s_linear_infinite]"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-white text-[9px] tracking-[0.15em] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      Learn about us through this video &nbsp;•&nbsp;
                    </textPath>
                  </text>
                </svg>
                <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/70 sm:h-8 sm:w-8 lg:h-9 lg:w-9">
                  <Play size={12} className="ml-0.5 fill-white" strokeWidth={0} />
                </span>
              </div>
            </div>

            {/* Avatar stack */}
            <div className="flex items-center justify-end gap-0 sm:order-3 sm:items-start">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white object-cover sm:h-11 sm:w-11"
                  />
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-black text-white sm:h-11 sm:w-11">
                  <Plus size={14} className="sm:hidden" />
                  <Plus size={16} className="hidden sm:block" />
                </span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-center font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:order-2 sm:text-[2.2rem] sm:leading-[1.05] md:text-5xl lg:text-6xl">
            Elevate Your Style With
            <br />
            Bold Fashion
          </h1>
        </div>

        {/* Image grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {/* Column 1 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="h-40 overflow-hidden rounded-2xl bg-neutral-200 xs:h-48 sm:h-72 sm:rounded-3xl lg:h-[280px]">
              <img
                src={images.col1Top}
                alt="Model in bold orange streetwear"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-20 overflow-hidden rounded-2xl bg-neutral-200 sm:h-28 sm:rounded-3xl lg:h-[140px]">
              <img
                src={images.col1Bottom}
                alt="Model in colorful jacket with sunglasses"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="h-[17.5rem] overflow-hidden rounded-2xl bg-neutral-200 sm:h-[26rem] sm:rounded-3xl lg:h-[436px]">
              <img
                src={images.col2}
                alt="Model in a green oversized coat"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="h-40 overflow-hidden rounded-2xl bg-neutral-200 sm:h-72 sm:rounded-3xl lg:h-[280px]">
              <img
                src={images.col3}
                alt="Model wearing a yellow hat and knit"
                className="h-full w-full object-cover"
              />
            </div>
            <button className="flex h-14 items-center justify-center gap-1 rounded-2xl bg-black px-2 text-center text-xs font-semibold text-white transition hover:bg-neutral-800 sm:h-28 sm:gap-1.5 sm:rounded-3xl sm:text-sm lg:h-[140px]">
              Explore Collections <ArrowUpRight size={14} className="shrink-0 sm:hidden" />
              <ArrowUpRight size={16} className="hidden shrink-0 sm:block" />
            </button>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <div className="h-[17.5rem] overflow-hidden rounded-2xl bg-neutral-200 sm:h-[26rem] sm:rounded-3xl lg:h-[436px]">
              <img
                src={images.col4}
                alt="Model in light blue cargo fit"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="h-40 overflow-hidden rounded-2xl bg-neutral-200 sm:h-72 sm:rounded-3xl lg:h-[280px]">
              <img
                src={images.col5Top}
                alt="Model wearing red heart sunglasses"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-20 overflow-hidden rounded-2xl bg-neutral-200 sm:h-28 sm:rounded-3xl lg:h-[140px]">
              <img
                src={images.col5Bottom}
                alt="Model in a dark green shirt"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom row: quote / featured article */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10">
          <div>
            <span className="text-3xl leading-none text-neutral-300">&#8220;</span>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-neutral-200">
              TrendZone&rsquo;s styles are fresh, bold, and exactly what I needed to
              upgrade my wardrobe. Loved the quality and vibe!
            </p>
            <p className="mt-3 font-['cursive'] text-xl italic text-amber-500">
              Rafi H.
            </p>
          </div>

          <div className="flex items-start justify-between gap-4 sm:justify-end sm:gap-16">
            <div className="flex items-start gap-3">
              <span className="text-3xl font-light text-neutral-200 sm:text-4xl">01</span>
              <div>
                <p className="mt-1 text-xs text-neutral-500">Lifestyle</p>
                <p className="mt-1 max-w-[220px] text-sm font-semibold leading-snug sm:text-base">
                  Set Up Your Fashion With The Latest Trends
                </p>
              </div>
            </div>
            <ArrowRight size={20} className="mt-1 shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}