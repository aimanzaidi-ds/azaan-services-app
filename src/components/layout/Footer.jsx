import { Link } from "react-router-dom";
import { company } from "../../data/company.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-paper/80">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 sm:px-8 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
  <div className="flex items-center gap-2.5">
    <img
      src="/az logo.jpeg"
      alt="Azaan Services logo"
      className="h-9 w-9 rounded-md object-cover"
    />
    <p className="font-display text-xl font-semibold text-paper">Azaan Services</p>
  </div>
  <p className="mt-2 text-sm text-paper/60">{company.tagline}</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
            A recruitment and placement consultancy serving corporate, IT, travel &amp; aviation,
            e-commerce, banking, and BPO hiring needs from New Delhi.
          </p>
        </div>

        <div>
          <p className="eyebrow text-brass-light">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-paper">About Us</Link></li>
            <li><Link to="/services" className="hover:text-paper">Services</Link></li>
            <li><Link to="/industries" className="hover:text-paper">Industries</Link></li>
            <li><Link to="/faq" className="hover:text-paper">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-paper">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-brass-light">Contact</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-paper/70">
            <p>{company.address.full}</p>
            <p>
              <a href={`mailto:${company.contact.email}`} className="hover:text-paper">
                {company.contact.email}
              </a>
            </p>
            {company.contact.phones.map((p) => (
              <p key={p.number}>
                <a href={`tel:${p.number.replace(/[^+\d]/g, "")}`} className="hover:text-paper">
                  {p.number}
                </a>{" "}
                <span className="text-paper/40">({p.label})</span>
              </p>
            ))}
          </address>
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
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:px-8 lg:px-10">
          <p>&copy; {year} Azaan Services. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-paper/80">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-paper/80">Terms &amp; Conditions</Link>
            <Link to="/disclaimer" className="hover:text-paper/80">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
