import { Link } from "react-router-dom";
import { company } from "../../data/company.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-paper/80">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 sm:px-8 md:grid-cols-4 lg:px-10">

        {/* ================= BRAND ================= */}

        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/az logo.jpeg"
              alt="Azaan Services logo"
              className="h-9 w-9 rounded-md object-cover"
            />

            <p className="font-display text-xl font-semibold text-paper">
              Azaan Services
            </p>
          </div>

          <p className="mt-2 text-sm text-paper/60">
            {company.tagline}
          </p>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
            A recruitment and placement consultancy serving corporate, IT,
            travel &amp; aviation, e-commerce, banking, and BPO hiring needs
            from New Delhi.
          </p>
        </div>

        {/* ================= COMPANY ================= */}

        <div>
          <p className="eyebrow text-brass-light">
            Company
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-paper"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-paper"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/industries"
                className="hover:text-paper"
              >
                Industries
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                className="hover:text-paper"
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-paper"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}

        <div>
          <p className="eyebrow text-brass-light">
            Contact
          </p>

          <address className="mt-4 space-y-2 text-sm not-italic text-paper/70">

            <p>
              {company.address.full}
            </p>

            <p>
              <a
                href={`mailto:${company.contact.email}`}
                className="hover:text-paper"
              >
                {company.contact.email}
              </a>
            </p>

            {company.contact.phones.map((p) => (
              <p key={p.number}>
                <a
                  href={`tel:${p.number.replace(/[^+\d]/g, "")}`}
                  className="hover:text-paper"
                >
                  {p.number}
                </a>{" "}

                <span className="text-paper/40">
                  ({p.label})
                </span>
              </p>
            ))}

          </address>

          {/* ================= WHATSAPP TEXT LINK ================= */}

          <a
            href={`https://wa.me/${company.contact.primaryWhatsapp}?text=${encodeURIComponent(
              "Hi Azaan Services, I'd like to enquire about your recruitment services."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-verified hover:underline"
          >
            Chat on WhatsApp
          </a>

          {/* ================= SOCIAL ICONS ================= */}

          <div className="mt-5 flex items-center gap-3">

            {/* WhatsApp */}

            <a
              href={`https://wa.me/${company.contact.primaryWhatsapp}?text=${encodeURIComponent(
                "Hi Azaan Services, I'd like to enquire about your recruitment services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Azaan Services on WhatsApp"
              title="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/10 text-paper/70 transition hover:border-[#25D366] hover:text-[#25D366]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.47 3.43 1.36 4.9L2 22l5.22-1.36A10 10 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.3a8.25 8.25 0 0 1-4.2-1.15l-.3-.18-3.1.81.83-3.02-.2-.31A8.24 8.24 0 1 1 12.04 20.3Zm4.53-6.18c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.36-.78-1.86-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.13.17 1.76 2.68 4.26 3.76.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.15-.48-.28Z" />
              </svg>
            </a>

            {/* Facebook */}

            <a
              href="https://www.facebook.com/share/17tUrpezee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Azaan Services on Facebook"
              title="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/10 text-paper/70 transition hover:border-[#1877F2] hover:text-[#1877F2]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.5 21v-8h2.75l.41-3h-3.16V8.08c0-.87.24-1.46 1.49-1.46h1.59V3.94c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.06V10H7.64v3h2.64v8h3.22Z" />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:px-8 lg:px-10">

          <p>
            &copy; {year} Azaan Services. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-paper/80"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-paper/80"
            >
              Terms &amp; Conditions
            </Link>

            <Link
              to="/disclaimer"
              className="hover:text-paper/80"
            >
              Disclaimer
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}