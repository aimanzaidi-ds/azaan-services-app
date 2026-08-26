import LegalPage from "../components/layout/LegalPage.jsx";
import { company } from "../data/company.js";

// NOTE: This is a standard-form draft covering typical recruitment-consultancy
// data practices (contact form data, resumes/CVs if collected, cookies/analytics).
// It is not a substitute for legal review — have a lawyer confirm this matches
// actual data practices before publishing.

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="21 August 2026">
      <p>
        This Privacy Policy explains how Azaan Services ("we", "us", "our") collects, uses, and
        protects information you share with us through this website, by phone, or by WhatsApp.
      </p>

      <div>
        <h2 className="font-display text-lg text-ink">Information we collect</h2>
        <p className="mt-2">
          When you submit an enquiry through our contact form, we collect your name, company name
          (if provided), email address, phone number, the service you're enquiring about, and any
          message you include. If you contact us to discuss a job placement, we may also collect
          resume/CV details and related career information you choose to share.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">How we use your information</h2>
        <p className="mt-2">
          We use the information you provide to respond to your enquiry, discuss recruitment or
          placement opportunities, and — where relevant — share your details with hiring companies
          you've asked us to represent you to. We do not sell your personal information.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">Data retention</h2>
        <p className="mt-2">
          We retain enquiry and candidate information for as long as reasonably necessary to
          provide our services, or as required by law. You can request deletion of your data at
          any time by contacting us.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">Cookies</h2>
        <p className="mt-2">
          This website may use essential cookies required for basic functionality. We do not use
          third-party advertising cookies.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">Your rights</h2>
        <p className="mt-2">
          You may request access to, correction of, or deletion of your personal data by
          contacting us at{" "}
          <a href={`mailto:${company.contact.email}`} className="text-brass-dark hover:underline">
            {company.contact.email}
          </a>
          .
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
