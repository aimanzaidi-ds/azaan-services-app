import { useState } from "react";
import { Helmet } from "react-helmet-async";

const FALLBACK_FAQS = [
  {
    q: "How quickly can you start sourcing candidates?",
    a: "Once we have a clear brief — role, requirements, and timeline — sourcing typically begins within a day or two.",
  },
  {
    q: "Do you charge candidates for placement?",
    a: "Our consultancy fees are billed to hiring companies. Speak with us directly about your specific arrangement.",
  },
  {
    q: "Which industries do you place candidates in?",
    a: "Corporate, Travel & Aviation, IT & Non-IT, E-Commerce, Banking & Financial, and ITES/BPO roles.",
  },
  {
    q: "Do you handle volume hiring as well as single roles?",
    a: "Yes — we support both one-off specialist hires and recurring volume recruitment.",
  },
  {
    q: "How do I get started?",
    a: "Fill in the contact form with your requirement, or call/WhatsApp us directly — we'll respond with next steps.",
  },
];

export default function Faq() {
  const faqs = FALLBACK_FAQS;
  const [openIndex, setOpenIndex] = useState(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions — Azaan Services</title>
        <meta
          name="description"
          content="Answers to common questions about working with Azaan Services for recruitment and placement."
        />
        <link rel="canonical" href="https://www.azaanservices.com/faq" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <section className="border-b border-ink/10 bg-paper">
        <div className="section max-w-2xl">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 text-4xl font-medium text-ink">Frequently asked questions</h1>
        </div>
      </section>

      <section className="section max-w-2xl">
        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((f, i) => (
            <div key={f.q} className="py-5">
              <h2>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left font-display text-base text-ink"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {f.q}
                  <span className="ml-4 shrink-0 text-brass" aria-hidden="true">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
              </h2>
              {openIndex === i && (
                <p id={`faq-answer-${i}`} className="mt-3 text-sm leading-relaxed text-ink-text/70">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
