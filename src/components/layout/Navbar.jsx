import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { company } from "../../data/company.js";

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [window.location?.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? "border-ink/10 bg-paper/90 backdrop-blur" : "border-transparent bg-paper"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8 lg:px-10" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2.5">
  <img
    src="/az logo.jpeg"
    alt="Azaan Services logo"
    className="h-9 w-9 rounded-md object-cover"
  />
  <span className="font-display text-lg font-semibold tracking-tight text-ink">
    Azaan Services
  </span>
</Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-ink" : "text-slate hover:text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${company.contact.primaryPhone.replace(/[^+\d]/g, "")}`}
            className="text-sm font-medium text-slate hover:text-ink"
            aria-label={`Call Azaan Services at ${company.contact.primaryPhone}`}
          >
            {company.contact.primaryPhone}
          </a>
          <Link to="/contact" className="btn-primary">
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-card p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-paper md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-card px-3 py-2.5 text-sm font-medium ${
                      isActive ? "bg-ink/5 text-ink" : "text-slate hover:bg-ink/5 hover:text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-ink/10 px-6 py-4">
            <a href={`tel:${company.contact.primaryPhone.replace(/[^+\d]/g, "")}`} className="btn-secondary">
              Call {company.contact.primaryPhone}
            </a>
            <Link to="/contact" className="btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
