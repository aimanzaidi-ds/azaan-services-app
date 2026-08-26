import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { company } from "../data/company.js";
import GoogleReviews from "../components/sections/GoogleReviews.jsx";

/* ================= CLIENT LOGOS ================= */

const clientLogos = {
  HCL: "/logos/hcl.png",
  MakeMyTrip: "/logos/makemytrip.png",
  "Aon Hewitt": "/logos/aon.png",
  "Yatra.com": "/logos/yatra.png",
  Snapdeal: "/logos/snapdeal.png",
  Paytm: "/logos/paytm.png",
  NIIT: "/logos/niit.png",
  "InterGlobe Technologies": "/logos/interglobe.png",
  "HDFC Bank": "/logos/hdfc.png",
  "American Express": "/logos/american-express.png",
  Goibibo: "/logos/goibibo.png",
  "Carlson Wagonlit Travel": "/logos/cwt.png",
  Egencia: "/logos/egencia.png",
  Expedia: "/logos/expedia.png",
  Fareportal: "/logos/fareportal.png",
  "dnata Travel": "/logos/dnata.png",
};

/* ================= STAT ICON ================= */

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

/* ================= ABOUT PAGE ================= */

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Azaan Services</title>

        <meta
          name="description"
          content="Azaan Services is a recruitment and placement consultancy based in East of Kailash, New Delhi, supporting corporate, IT, travel, e-commerce, banking, and BPO hiring."
        />

        <link
          rel="canonical"
          href="https://www.azaanservices.com/about"
        />
      </Helmet>

      {/* ================= ABOUT HERO ================= */}

      <section className="border-b border-ink/10 bg-paper">
        <div className="section max-w-2xl">
          <p className="eyebrow">About Azaan Services</p>

          <h1 className="mt-3 text-4xl font-medium text-ink">
            A recruitment consultancy that starts with the brief, not the
            database.
          </h1>

          <p className="mt-5 leading-relaxed text-ink-text/75">
            Azaan Services is a recruitment and placement consultancy based
            in East of Kailash, New Delhi. We work with hiring companies
            across corporate, IT &amp; non-IT, travel &amp; aviation,
            e-commerce, banking &amp; financial, and ITES/BPO sectors —
            taking on the sourcing, screening, and coordination work involved
            in filling a role.
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
            team it sits in, what success looks like, and what's realistic
            given the market. Candidates are sourced and screened against that
            brief before a shortlist ever reaches you.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">
            Who we work with
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-ink-text/70">
            We support hiring teams of varying sizes, from single specialist
            hires to recurring volume recruitment, across the sectors listed
            on our{" "}
            <Link
              to="/services"
              className="text-brass-dark hover:underline"
            >
              services page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}

      <section className="border-t border-ink/10 bg-paper">
        <div className="section max-w-3xl">
          <p className="eyebrow">Our Story</p>

          <h2 className="mt-3 text-3xl font-medium text-ink">
            Building recruitment partnerships since 2012
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-text/70">
            <p>
              Azaan Services has been supporting organisations with
              recruitment and placement solutions since 2012. Over the years,
              we have developed practical experience in understanding hiring
              requirements, identifying suitable candidates, and supporting
              organisations throughout the recruitment process.
            </p>

            <p>
              With 14+ years of industry experience, our approach is built
              around understanding the requirement first and then connecting
              businesses with the right talent. From individual specialist
              positions to recurring recruitment requirements, we work closely
              with hiring teams to deliver a structured and dependable
              recruitment experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="border-t border-ink/10 bg-paper">
        <div className="section">
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4">

            {/* Google */}
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

            {/* Experience */}
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

          <h2 className="mt-3 max-w-2xl text-2xl font-medium text-ink">
            Recruitment partners across corporate, travel, and technology
          </h2>

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

            {Object.entries(clientLogos).map(([name, logo]) => (
              <li
                key={name}
                className="flex h-32 items-center justify-center rounded-card border border-ink/10 bg-paper px-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="h-20 w-auto max-w-[210px] object-contain"
                  loading="lazy"
                />
              </li>
            ))}

          </ul>
        </div>
      </section>

      {/* ================= GOOGLE REVIEWS ================= */}

      <GoogleReviews />

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