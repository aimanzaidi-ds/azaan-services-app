import { clients } from "../../data/company.js";

// "Companies we've worked with" — real names only, sourced from the client's
// own confirmed marketing material and official Facebook page. Static data,
// no server required.
export default function ClientsStrip() {
  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="section">
        <p className="eyebrow">Companies we've worked with</p>
        <h2 className="mt-3 max-w-xl text-2xl font-medium text-ink">
          Recruitment partners across corporate, travel, and technology
        </h2>

        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {clients.map((name) => (
            <li
              key={name}
              className="flex h-24 items-center justify-center rounded-card border border-ink/10 bg-paper px-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
            >
              <span className="text-center font-display text-base leading-tight text-ink-text/70 transition-colors hover:text-ink">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
