import React, { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const links = ["New", "Men", "Women", "Accessories", "Lookbook"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight">
          TREND<span className="text-blue-800">ZONE</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-sm text-ink/70 transition hover:text-ink"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-ink/80 transition hover:text-ink">
            <Search size={19} />
          </button>
          <button aria-label="Cart" className="relative text-ink/80 transition hover:text-ink">
            <ShoppingBag size={19} />
            <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-800 text-[9px] text-white">
              2
            </span>
          </button>
          <button
            aria-label="Menu"
            className="text-ink/80 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 px-6 py-3 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="py-2 font-body text-sm text-ink/70 hover:text-ink"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
