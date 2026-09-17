import React from "react";

const items = [
  "Free shipping over $75",
  "New drops every Friday",
  "Easy 30-day returns",
];

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-ink py-2 text-center font-mono text-[11px] tracking-wide text-white">
      {items.join("   ·   ")}
    </div>
  );
}
