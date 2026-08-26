import LegalPage from "../components/layout/LegalPage.jsx";
import { company } from "../data/company.js";

// NOTE: Standard-form draft for a recruitment consultancy. Needs legal review
// before publishing, particularly around fee arrangements and liability terms
// specific to how Azaan Services actually contracts with clients and candidates.

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions" updated="21 August 2026">
      <p>
        These Terms &amp; Conditions govern your use of the Azaan Services website and our
        recruitment and placement services. By using this website or engaging our services, you
        agree to these terms.
      </p>

      <div>
        <h2 className="font-display text-lg text-ink">Our services</h2>
        <p className="mt-2">
          Azaan Services acts as a recruitment and placement consultancy, connecting hiring
          companies with candidates across corporate, IT &amp; non-IT, travel &amp; aviation,
          e-commerce, banking &amp; financial, and ITES/BPO sectors. We source, screen, and
          coordinate candidates on behalf of client companies.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">No guarantee of placement</h2>
        <p className="mt-2">
          Submitting an enquiry or resume does not guarantee a job placement or a successful hire.
          Final hiring decisions rest with the client company.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">Accuracy of information</h2>
        <p className="mt-2">
          You agree to provide accurate and truthful information when submitting an enquiry or
          application. We reserve the right to decline to act on information we believe to be
          false or misleading.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">Website use</h2>
        <p className="mt-2">
          You agree not to misuse this website, including attempting to submit spam, malicious
          content, or automated bulk submissions through our contact form.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">Changes to these terms</h2>
        <p className="mt-2">
          We may update these terms from time to time. Continued use of this website after changes
          are posted constitutes acceptance of the updated terms.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">Contact</h2>
        <p className="mt-2">
          Azaan Services, {company.address.full}. Email:{" "}
          <a href={`mailto:${company.contact.email}`} className="text-brass-dark hover:underline">
            {company.contact.email}
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
