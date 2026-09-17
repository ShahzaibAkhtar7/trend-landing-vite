import React from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    n: "01",
    tag: "Lifestyle",
    title: "Set Up Your Fashion With The Latest Trends",
  },
  {
    n: "02",
    tag: "Guides",
    title: "How To Layer Color Without Overdoing It",
  },
  {
    n: "03",
    tag: "Behind The Seams",
    title: "Inside Our Spring Fabric Sourcing Trip",
  },
];

export default function Journal() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-blue-900">
        The Journal
      </p>
      <h2 className="mt-2 mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Stories from the studio
      </h2>

      <div className="divide-y divide-black/10 border-y border-black/10">
        {posts.map((post) => (
          <a
            key={post.n}
            href="#"
            className="group flex items-center justify-between gap-6 py-6"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="font-display text-3xl font-light text-neutral-300 sm:text-4xl">
                {post.n}
              </span>
              <div>
                <p className="font-mono text-xs text-neutral-500">
                  {post.tag}
                </p>
                <p className="mt-1 max-w-xs font-body text-base font-semibold leading-snug sm:max-w-md sm:text-lg">
                  {post.title}
                </p>
              </div>
            </div>
            <ArrowRight
              size={20}
              className="shrink-0 transition group-hover:translate-x-1"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
