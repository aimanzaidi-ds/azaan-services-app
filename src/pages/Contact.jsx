import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { company } from "../data/company.js";
import FormField from "../components/ui/FormField.jsx";
import { validateLeadForm } from "../lib/validation.js";

const INITIAL_VALUES = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  // Honeypot field — real users never fill this in; bots often do.
  website: "",
};

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service" },
  ...company.serviceCategories.map((s) => ({ value: s.slug, label: s.name })),
  { value: "other", label: "Other / not sure" },
];

function serviceLabel(slug) {
  return SERVICE_OPTIONS.find((o) => o.value === slug)?.label || slug;
}

function buildWhatsappMessage(values) {
  const lines = [
    "Hi Azaan Services, I'd like to enquire about your recruitment services.",
    "",
    `Name: ${values.name.trim()}`,
  ];
  if (values.company.trim()) lines.push(`Company: ${values.company.trim()}`);
  lines.push(`Email: ${values.email.trim()}`);
  lines.push(`Phone: ${values.phone.trim()}`);
  lines.push(`Service: ${serviceLabel(values.service)}`);
  lines.push("");
  lines.push(`Message: ${values.message.trim()}`);
  return lines.join("\n");
}

function buildMailtoLink(values) {
  const subject = encodeURIComponent(`Recruitment enquiry — ${values.name.trim()}`);
  const body = encodeURIComponent(buildWhatsappMessage(values));
  return `mailto:${company.contact.email}?subject=${subject}&body=${body}`;
}

// This is a static, server-free site: instead of posting to a backend, the
// form packages the enquiry into a pre-filled WhatsApp message (and offers a
// mailto fallback) so the person can send it straight to Azaan Services.
export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success
  const [lastMailto, setLastMailto] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Honeypot: if filled, silently pretend success without submitting.
    if (values.website) {
      setStatus("success");
      return;
    }

    const validationErrors = validateLeadForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const waMessage = buildWhatsappMessage(values);
    const waUrl = `https://wa.me/${company.contact.primaryWhatsapp}?text=${encodeURIComponent(waMessage)}`;
    setLastMailto(buildMailtoLink(values));
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStatus("success");
    setValues(INITIAL_VALUES);
  }

  return (
    <>
      <Helmet>
        <title>Contact Us — Azaan Services</title>
        <meta
          name="description"
          content="Get in touch with Azaan Services for recruitment and placement support. Call, WhatsApp, or send us your hiring requirement."
        />
        <link rel="canonical" href="https://www.azaanservices.com/contact" />
      </Helmet>

      <section className="border-b border-ink/10 bg-paper">
        <div className="section">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3 max-w-xl text-4xl font-medium text-ink">
            Tell us about the role you're hiring for
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-text/70">
            Share a few details and we'll open WhatsApp with your enquiry ready to send. For
            anything urgent, call or WhatsApp us directly.
          </p>
        </div>
      </section>

      <section className="section grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {status === "success" ? (
            <div
              role="status"
              className="rounded-card border border-verified/30 bg-verified/5 p-6"
            >
              <h2 className="font-display text-lg text-verified">WhatsApp opened</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-text/75">
                We've pre-filled your enquiry in WhatsApp — just hit send. If it didn't open,
                you can{" "}
                {lastMailto ? (
                  <a href={lastMailto} className="text-brass-dark hover:underline">
                    email us instead
                  </a>
                ) : (
                  "email us instead"
                )}
                .
              </p>
              <button
                type="button"
                className="btn-secondary mt-5"
                onClick={() => setStatus("idle")}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Honeypot field, hidden from real users via CSS + accessibility */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  id="name"
                  name="name"
                  label="Full name"
                  required
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  autoComplete="name"
                />
                <FormField
                  id="company"
                  name="company"
                  label="Company"
                  value={values.company}
                  onChange={handleChange}
                  error={errors.company}
                  autoComplete="organization"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
                <FormField
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Phone"
                  required
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  autoComplete="tel"
                  placeholder="98XXXXXXXX"
                />
              </div>

              <FormField
                id="service"
                name="service"
                as="select"
                label="Service you're enquiring about"
                required
                value={values.service}
                onChange={handleChange}
                error={errors.service}
                options={SERVICE_OPTIONS}
              />

              <FormField
                id="message"
                name="message"
                as="textarea"
                label="Tell us about the role"
                required
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                hint="Role, seniority, and timeline help us respond faster."
              />

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-card border border-ink/10 bg-ink/[0.02] p-6">
            <p className="eyebrow">Direct contact</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-slate">Address</dt>
                <dd className="mt-1 text-ink-text">{company.address.full}</dd>
              </div>
              <div>
                <dt className="text-slate">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${company.contact.email}`} className="text-brass-dark hover:underline">
                    {company.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate">Phone</dt>
                {company.contact.phones.map((p) => (
                  <dd key={p.number} className="mt-1">
                    <a href={`tel:${p.number.replace(/[^+\d]/g, "")}`} className="text-brass-dark hover:underline">
                      {p.number}
                    </a>{" "}
                    <span className="text-slate">({p.label})</span>
                  </dd>
                ))}
              </div>
            </dl>
            <a
              href={`https://wa.me/${company.contact.primaryWhatsapp}?text=${encodeURIComponent(
                "Hi Azaan Services, I'd like to enquire about your recruitment services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              Chat on WhatsApp
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
