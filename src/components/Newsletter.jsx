import React from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-ink py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center sm:px-10">
        <div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Get first look at new drops
          </h2>
          <p className="mt-2 max-w-sm font-body text-sm text-white/60">
            One email a week. New arrivals, restocks, and the occasional
            styling tip — no spam.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-white/5 p-1.5 pl-5"
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="w-full bg-transparent font-body text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <button
            type="submit"
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-blue-950 via-slate-950 to-black px-5 py-2.5 font-body text-sm font-semibold text-white transition hover:bg-white/90"
          >
            Subscribe <ArrowRight size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
