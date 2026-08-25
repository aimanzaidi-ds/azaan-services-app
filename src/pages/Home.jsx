import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { company } from "../data/company.js";
import RegisterCard from "../components/sections/RegisterCard.jsx";
import ClientsStrip from "../components/sections/ClientsStrip.jsx";
import Gallery from "../components/sections/Gallery.jsx";
import GoogleReviews from "../components/sections/GoogleReviews.jsx";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand the brief",
    body: "We start by understanding the role, the team, and what success looks like — not just a job title.",
  },
  {
    step: "02",
    title: "Source & screen",
    body: "Candidates are sourced against the brief and screened before they ever reach your desk.",
  },
  {
    step: "03",
    title: "Shortlist & coordinate",
    body: "You receive a shortlist, and we coordinate interviews end-to-end.",
  },
  {
    step: "04",
    title: "Placement & follow-up",
    body: "Once a candidate is placed, we stay in touch to make sure the fit is working.",
  },
];

const BENEFITS = [
  {
    title: "Sector-specific screening",
    body: "Candidates are evaluated against the norms of your sector, not a generic checklist.",
  },
  {
    title: "Direct point of contact",
    body: "You work with a named consultant throughout, not a rotating queue of recruiters.",
  },
  {
    title: "Coordination handled for you",
    body: "Scheduling, follow-ups, and candidate communication are managed on your behalf.",
  },
];

const FAQ_PREVIEW = [
  {
    q: "How quickly can you start sourcing candidates?",
    a: "Once we have a clear brief — role, requirements, and timeline — sourcing typically begins within a day or two.",
  },
  {
    q: "Do you charge candidates for placement?",
    a: "Our consultancy fees are billed to hiring companies. Speak with us directly about your specific arrangement.",
  },
  {
    q: "Which industries do you place candidates in?",
    a: "Corporate, Travel & Aviation, IT & Non-IT, E-Commerce, Banking & Financial, and ITES/BPO roles.",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Azaan Services — Recruitment & Placement Consultancy, New Delhi</title>
        <meta
          name="description"
          content="Azaan Services provides corporate, IT, travel & aviation, e-commerce, banking, and BPO recruitment support for hiring companies in New Delhi."
        />
        <link rel="canonical" href="https://www.azaanservices.com/" />
      </Helmet>

      {/* Hero */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-content gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="eyebrow">Recruitment & Placement Consultancy</p>
            <h1 className="mt-4 text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Hiring, handled by people who treat every brief like it's the only one.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-text/75">
              Azaan Services sources, screens, and shortlists candidates across corporate, IT,
              travel &amp; aviation, e-commerce, banking, and BPO roles — so your team spends time
              interviewing, not searching.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Book a Free Consultation
              </Link>
              <a
                href={`https://wa.me/${company.contact.primaryWhatsapp}?text=${encodeURIComponent(
                  "Hi Azaan Services, I'd like to enquire about your recruitment services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <RegisterCard />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="max-w-2xl">
          <p className="eyebrow">About the firm</p>
          <h2 className="mt-3 text-3xl font-medium text-ink">
            A placement consultancy built around understanding the role, not just filling it.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-text/75">
            Based in East of Kailash, New Delhi, Azaan Services works as a recruitment partner for
            businesses hiring across corporate, IT, travel &amp; aviation, e-commerce, banking, and
            BPO functions — taking on the sourcing and screening work so hiring teams can focus on
            final decisions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-ink/10 bg-ink/[0.02]">
        <div className="section">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 max-w-xl text-3xl font-medium text-ink">Recruitment across six core sectors</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {company.serviceCategories.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-card border border-ink/10 bg-paper p-6 shadow-card transition-shadow hover:shadow-cardHover"
              >
                <h3 className="font-display text-lg text-ink">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-text/70">{s.shortDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brass-dark group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientsStrip />

      {/* Benefits */}
      <section className="section">
        <p className="eyebrow">Why hire through us</p>
        <h2 className="mt-3 max-w-xl text-3xl font-medium text-ink">What working with Azaan Services looks like</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title}>
              <h3 className="font-display text-lg text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-text/70">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-ink/10 bg-ink text-paper">
        <div className="section">
          <p className="eyebrow text-brass-light">Our process</p>
          <h2 className="mt-3 max-w-xl text-3xl font-medium text-paper">From brief to placement</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s) => (
              <li key={s.step} className="border-t border-paper/15 pt-4">
                <span className="font-mono text-xs text-brass-light">{s.step}</span>
                <h3 className="mt-2 font-display text-lg text-paper">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Gallery />

      <GoogleReviews />

      {/* FAQ preview */}
      <section className="section">
        <p className="eyebrow">Common questions</p>
        <h2 className="mt-3 max-w-xl text-3xl font-medium text-ink">Frequently asked</h2>
        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {FAQ_PREVIEW.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base text-ink">
                {f.q}
                <span className="ml-4 text-brass transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-text/70">{f.a}</p>
            </details>
          ))}
        </div>
        <Link to="/faq" className="mt-6 inline-block text-sm font-medium text-brass-dark hover:underline">
          View all FAQs →
        </Link>
      </section>

      {/* Final CTA */}
      <section className="border-t border-ink/10 bg-brass/10">
        <div className="section flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium text-ink sm:text-3xl">Ready to talk about a hire?</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-text/70">
              Tell us the role and we'll come back with next steps — no obligation.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
