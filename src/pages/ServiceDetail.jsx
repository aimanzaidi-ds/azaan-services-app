import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { company } from "../data/company.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = company.serviceCategories.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="section flex min-h-[40vh] flex-col items-start justify-center">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-3 text-3xl font-medium text-ink">We couldn't find that service</h1>
        <Link to="/services" className="btn-primary mt-6">
          View all services
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.name} — Azaan Services</title>
        <meta name="description" content={service.shortDescription} />
        <link rel="canonical" href={`https://www.azaanservices.com/services/${service.slug}`} />
      </Helmet>

      <section className="border-b border-ink/10 bg-paper">
        <div className="section max-w-2xl">
          <nav aria-label="Breadcrumb" className="text-xs text-slate">
            <Link to="/services" className="hover:text-ink">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{service.name}</span>
          </nav>
          <p className="eyebrow mt-4">Service</p>
          <h1 className="mt-3 text-4xl font-medium text-ink">{service.name}</h1>
          <p className="mt-4 leading-relaxed text-ink-text/75">{service.shortDescription}</p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-brass/10">
        <div className="section flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium text-ink">Hiring for this role type?</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-text/70">
              Tell us the requirement and we'll come back with next steps.
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
