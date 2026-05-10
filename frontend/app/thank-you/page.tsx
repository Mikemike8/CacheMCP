import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function ThankYouPage() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="form-confirmation" aria-labelledby="confirmation-title">
        <p className="eyebrow">Submission Received</p>
        <h1 id="confirmation-title">Thank You</h1>
        <p>
          Your message has been sent to Cache 42. The team will review your details and follow up as soon as
          possible.
        </p>
        <div className="confirmation-actions">
          <Link className="button button-gold" href="/">
            Back Home
          </Link>
          <Link className="button button-outline-dark" href="/book-a-table">
            Book Another Table
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
