import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { company } from "../data/company.js";

export default function Services() {
  const services = company.serviceCategories;

  return (
    <>
      <Helmet>
        <title>Services — Azaan Services</title>
        <meta
          name="description"
          content="Recruitment and placement services from Azaan Services: corporate, IT & non-IT, travel & aviation, e-commerce, banking & financial, and ITES/BPO."
        />
        <link rel="canonical" href="https://www.azaanservices.com/services" />
      </Helmet>

      <section className="border-b border-ink/10 bg-paper">
        <div className="section max-w-2xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 text-4xl font-medium text-ink">Recruitment support across six core sectors</h1>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group rounded-card border border-ink/10 bg-paper p-6 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <h2 className="font-display text-lg text-ink">{s.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-text/70">{s.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brass-dark group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
