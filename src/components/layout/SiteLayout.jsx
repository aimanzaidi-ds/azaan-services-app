import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import TrustMarquee from "../sections/TrustMarquee.jsx";

export default function SiteLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to main content
      </a>
      <Navbar />
      <TrustMarquee />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
