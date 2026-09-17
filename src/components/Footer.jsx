import React from "react";
import { Instagram, Twitter, Youtube } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: ["New Arrivals", "Outerwear", "Knitwear", "Accessories", "Footwear"],
  },
  {
    title: "Help",
    links: ["Track Order", "Shipping & Returns", "Size Guide", "Contact Us"],
  },
  {
    title: "Studio",
    links: ["About TrendZone", "Careers", "The Journal", "Sustainability"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-extrabold text-white">
              TREND<span className="text-blue-800">ZONE</span>
            </p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed">
              Bold, color-forward clothing for people who dress on purpose.
              Designed in-studio, made to last.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 font-mono text-[11px] text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} TrendZone Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
