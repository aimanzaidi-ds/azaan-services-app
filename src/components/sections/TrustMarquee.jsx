// A slow, continuous scrolling line of trust signals — the firm's award and
// its named corporate clients. Pure CSS animation, duplicated content for a
// seamless loop, and paused on hover / for reduced-motion users.
const TRUST_ITEMS = [
  "★ Award-Winning Placement Firm - Indigo Airlines",
  "A-Class Vendor - Yatra.com , Carlson Wagonlit Travel , HCL",
  
];

export default function TrustMarquee() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <div className="overflow-hidden border-y border-paper/15 bg-ink py-3">
      <div
        className="marquee-track flex w-max items-center gap-10 motion-reduce:animate-none"
        aria-hidden="false"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-eyebrow text-paper/80"
          >
            <span className="h-1 w-1 rounded-full bg-brass-light" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
