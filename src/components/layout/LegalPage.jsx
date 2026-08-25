import { Helmet } from "react-helmet-async";

export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <Helmet>
        <title>{title} — Azaan Services</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="section max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-3xl font-medium text-ink">{title}</h1>
        <p className="mt-2 text-xs text-slate">Last updated: {updated}</p>
        <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-ink-text/80">
          {children}
        </div>
      </section>
    </>
  );
}
