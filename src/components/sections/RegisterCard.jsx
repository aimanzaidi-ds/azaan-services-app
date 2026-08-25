import { useEffect, useState } from "react";
import { company } from "../../data/company.js";

// Signature element: a quiet, cycling "placement register" card.
// Uses only real service category names — no fabricated names, numbers, or stats.
export default function RegisterCard() {
  const entries = company.serviceCategories;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % entries.length), 3200);
    return () => clearInterval(id);
  }, [entries.length]);

  const current = entries[index];

  return (
    <div
      className="w-full max-w-sm rounded-card border border-ink/10 bg-paper p-6 shadow-card"
      role="group"
      aria-label="Rotating example of Azaan Services' placement categories"
    >
      <div className="flex items-center justify-between border-b border-ink/10 pb-3">
        <span className="eyebrow">Placement Register</span>
        <span className="font-mono text-[11px] text-slate">
          {String(index + 1).padStart(2, "0")} / {String(entries.length).padStart(2, "0")}
        </span>
      </div>
      <dl className="mt-4 space-y-3">
        <div>
          <dt className="text-xs uppercase tracking-wide text-slate">Category</dt>
          <dd className="mt-1 font-display text-lg text-ink" aria-live="polite">
            {current.name}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-slate">Focus</dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-text/80">
            {current.shortDescription}
          </dd>
        </div>
      </dl>
      <div className="mt-5 flex items-center gap-2 border-t border-ink/10 pt-4 text-xs text-verified">
        <span className="h-1.5 w-1.5 rounded-full bg-verified" aria-hidden="true" />
        Actively sourcing candidates
      </div>
    </div>
  );
}
