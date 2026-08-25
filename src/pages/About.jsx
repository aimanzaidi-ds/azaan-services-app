import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { company, clients } from "../data/company.js";

function StatIcon({ type }) {
  if (type === "google") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3z" />
      </svg>
    );
  }

  if (type === "experience") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M8 4h8" />
        <path d="M9 4v3h6V4" />
        <path d="M6 7h12l-1 13H7L6 7z" />
        <path d="M9 11h6" />
        <path d="M9 15h6" />
      </svg>
    );
  }

  if (type === "justdial") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8.5 12h7" />
        <path d="M12 8.5v7" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M14 4h6v6" />
      <path d="M20 4l-8 8" />
      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Azaan Services</title>

        <meta
          name="description"
          content="Azaan Services is a recruitment and placement consultancy based in East of Kailash, New Delhi, with 14+ years of experience across corporate, IT, travel, e-commerce, banking, financial, and BPO hiring."
        />

        <link
          rel="canonical"
          href="https://www.azaanservices.com/about"
        />
      </Helmet>

      {/* ================= ABOUT AZAAN SERVICES ================= */}

      <section className="border-b border-ink/10 bg-paper">
        <div className="section max-w-3xl">
          <p className="eyebrow">About Azaan Services</p>

          <h1 className="mt-3 text-4xl font-medium text-ink">
            A recruitment consultancy that starts with the brief, not the
            database.
          </h1>

          <p className="mt-5 leading-relaxed text-ink-text/75">
            Azaan Services is a recruitment and placement consultancy based
            in East of Kailash, New Delhi, with over 14 years of experience
            in recruitment and placement solutions.
          </p>

          <p className="mt-4 leading-relaxed text-ink-text/75">
            Since 2012, we have worked with hiring companies across corporate,
            IT &amp; non-IT, travel &amp; aviation, e-commerce, banking &amp;
            financial, and ITES/BPO sectors. Our work covers sourcing,
            screening, shortlisting, and coordination to help organisations
            find the right talent for their requirements.
          </p>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}

      <section className="section grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl text-ink">
            How we work
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-ink-text/70">
            Every engagement starts with understanding the role itself — the
            team it sits in, what success looks like, and what is realistic
            given the market.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-ink-text/70">
            Candidates are sourced and screened against the requirement before
            a shortlist reaches the hiring team, helping make the recruitment
            process more focused and dependable.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">
            Who we work with
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-ink-text/70">
            We support hiring teams of varying sizes, from individual
            specialist positions to recurring volume recruitment requirements
            across multiple industries.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-ink-text/70">
            Explore our{" "}
            <Link
              to="/services"
              className="text-brass-dark hover:underline"
            >
              services page
            </Link>{" "}
            to learn more about the recruitment solutions we provide.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}

      <section className="border-t border-ink/10 bg-paper">
        <div className="section max-w-4xl">
          <p className="eyebrow">Our Story</p>

          <h2 className="mt-3 text-3xl font-medium text-ink">
            Building recruitment partnerships since 2012
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink-text/70">
            <p>
              Azaan Services began with a simple objective — to make the
              recruitment process more practical, responsive, and aligned with
              what organisations actually need. Since 2012, we have continued
              to build relationships with hiring teams while developing a
              deeper understanding of different industries and their
              recruitment requirements.
            </p>

            <p>
              Over the years, our experience has grown through working on
              diverse hiring requirements, from specialist positions to
              recurring recruitment and volume hiring. This has helped us
              understand that successful recruitment is not only about finding
              profiles, but about understanding the role, the organisation,
              and the people who will ultimately become part of the team.
            </p>

            <p>
              With <strong className="font-medium text-ink">
                14+ years of industry experience
              </strong>
              , we continue to focus on building dependable recruitment
              partnerships. Our approach combines practical market
              understanding, structured screening, and close coordination with
              hiring teams to create a recruitment experience that is clear,
              efficient, and focused on the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS / TRUST ================= */}

      <section className="border-t border-ink/10 bg-paper">
        <div className="section">
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4">

            {/* Google Rating */}

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff4ea] text-[#e57b19]">
                <StatIcon type="google" />
              </div>

              <div className="mt-5 text-3xl font-semibold text-ink">
                4.8
              </div>

              <p className="mt-2 text-sm text-ink-text/60">
                Google Rating
              </p>
            </div>

            {/* Years Experience */}

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff4ea] text-[#e57b19]">
                <StatIcon type="experience" />
              </div>

              <div className="mt-5 text-3xl font-semibold text-ink">
                14+
              </div>

              <p className="mt-2 text-sm text-ink-text/60">
                Years of Experience
              </p>
            </div>

            {/* Justdial */}

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff4ea] text-[#e57b19]">
                <StatIcon type="justdial" />
              </div>

              <div className="mt-5 text-3xl font-semibold text-ink">
                4.7/5
              </div>

              <p className="mt-2 text-sm text-ink-text/60">
                Justdial
              </p>

              <p className="mt-1 text-xs text-ink-text/50">
                352 votes
              </p>
            </div>

            {/* Facebook */}

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff4ea] text-[#e57b19]">
                <StatIcon type="facebook" />
              </div>

              <div className="mt-5 text-3xl font-semibold text-ink">
                5/5
              </div>

              <p className="mt-2 text-sm text-ink-text/60">
                Facebook
              </p>

              <p className="mt-1 text-xs text-ink-text/50">
                112 votes
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COMPANIES ================= */}

      <section className="border-t border-ink/10 bg-paper">
        <div className="section">
          <p className="eyebrow">
            Companies we've worked with
          </p>

          <h2 className="mt-3 max-w-xl text-2xl font-medium text-ink">
            Recruitment partners across corporate, travel, and technology
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-text/70">
            We have supported recruitment requirements for organisations
            across multiple sectors, helping hiring teams connect with
            suitable candidates for a wide range of roles.
          </p>

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

      

      {/* ================= CONTACT ================= */}

      <section className="border-t border-ink/10 bg-ink/[0.02]">
        <div className="section max-w-xl">
          <h2 className="font-display text-xl text-ink">
            Get in touch
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-ink-text/70">
            Based at {company.address.full}. Reach us at{" "}

            <a
              href={`mailto:${company.contact.email}`}
              className="text-brass-dark hover:underline"
            >
              {company.contact.email}
            </a>

            {" "}or{" "}

            <a
              href={`tel:${company.contact.primaryPhone.replace(
                /[^+\d]/g,
                ""
              )}`}
              className="text-brass-dark hover:underline"
            >
              {company.contact.primaryPhone}
            </a>
            .
          </p>

          <Link
            to="/contact"
            className="btn-primary mt-6 inline-flex"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}