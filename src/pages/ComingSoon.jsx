import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ComingSoon({ title }) {
  return (
    <>
      <Helmet>
        <title>{title} — Azaan Services</title>
      </Helmet>
      <section className="section flex min-h-[50vh] flex-col items-start justify-center">
        <p className="eyebrow">Page in progress</p>
        <h1 className="mt-3 text-3xl font-medium text-ink">{title}</h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-text/70">
          This page is being built. In the meantime, reach us directly.
        </p>
        <Link to="/contact" className="btn-primary mt-6">
          Contact Azaan Services
        </Link>
      </section>
    </>
  );
}
