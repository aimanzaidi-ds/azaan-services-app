import LegalPage from "../components/layout/LegalPage.jsx";
import { company } from "../data/company.js";

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" updated="21 August 2026">
      <p>
        The information provided on this website is for general informational purposes only. While
        we aim to keep information accurate and current, Azaan Services makes no representations or
        warranties of any kind, express or implied, about the completeness, accuracy, reliability,
        or availability of the website or the information it contains.
      </p>

      <div>
        <h2 className="font-display text-lg text-ink">No guarantee of employment</h2>
        <p className="mt-2">
          Azaan Services facilitates connections between candidates and hiring companies. We do not
          guarantee employment, interviews, or specific outcomes for any candidate, nor do we
          guarantee that any hiring company will fill a role through our services.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">Third-party links</h2>
        <p className="mt-2">
          This website may contain links to external sites that are not provided or maintained by
          Azaan Services. We do not guarantee the accuracy or completeness of any information on
          these external sites.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg text-ink">Contact</h2>
        <p className="mt-2">
          Questions about this disclaimer can be directed to{" "}
          <a href={`mailto:${company.contact.email}`} className="text-brass-dark hover:underline">
            {company.contact.email}
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
