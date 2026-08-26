import { clients } from "../../data/company.js";

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

function CompanyLogo({ name }) {
  const logo = clientLogos[name];

  if (!logo) {
    return (
      <span className="text-center font-display text-base text-ink-text/70">
        {name}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={`${name} logo`}
      className="max-h-20 w-auto max-w-[210px] object-contain"
      loading="lazy"
    />
  );
}

export default function ClientsStrip() {
  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="section">

        {/* Heading */}
        <p className="eyebrow">
          Companies we've worked with
        </p>

        <h2 className="mt-3 max-w-2xl text-2xl font-medium text-ink">
          Recruitment partners across corporate, travel, and technology
        </h2>

        {/* Company Logos */}
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

          {clients.map((name) => (
            <li
              key={name}
              className="
                flex
                h-32
                items-center
                justify-center
                rounded-card
                border
                border-ink/10
                bg-paper
                px-6
                shadow-card
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-cardHover
              "
            >
              <CompanyLogo name={name} />
            </li>
          ))}

        </ul>

      </div>
    </section>
  );
}