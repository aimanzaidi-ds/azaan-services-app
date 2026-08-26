import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { company } from "../data/company.js";

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve — Azaan Services</title>
        <meta
          name="description"
          content="Azaan Services supports hiring across corporate, IT & non-IT, travel & aviation, e-commerce, banking & financial, and ITES/BPO industries."
        />
        <link rel="canonical" href="https://www.azaanservices.com/industries" />
      </Helmet>

      <section className="border-b border-ink/10 bg-paper">
        <div className="section max-w-2xl">
          <p className="eyebrow">Industries we serve</p>
          <h1 className="mt-3 text-4xl font-medium text-ink">
            Recruitment support tailored to how each industry actually hires
          </h1>
          <p className="mt-4 leading-relaxed text-ink-text/75">
            Sourcing and screening approaches differ by sector — what matters for a BPO hire is
            different from a banking role. Here's where we focus.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {company.serviceCategories.map((s) => (
            <div key={s.slug} className="rounded-card border border-ink/10 bg-paper p-6 shadow-card">
              <h2 className="font-display text-lg text-ink">{s.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-text/70">{s.shortDescription}</p>
              <Link
                to={`/services/${s.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brass-dark hover:underline"
              >
                Related service →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-ink/[0.02]">
        <div className="section flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium text-ink">Don't see your industry listed?</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-text/70">
              Get in touch — we take on roles outside these categories case by case.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
