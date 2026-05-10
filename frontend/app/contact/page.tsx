import { assets, HoursList, OptimizedImage, PageHero, SiteFooter, SocialLinks } from "../components/SiteChrome";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHero title="Contact Us" image={assets.contactHero} active="contact" className="contact-hero" />

      <section className="contact-section">
        <form
          className="contact-form"
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="form-hidden" aria-hidden="true">
            <label>
              Do not fill this out if you are human: <input name="bot-field" tabIndex={-1} />
            </label>
          </p>
          <h2>Get in Touch</h2>
          <div className="contact-name-row">
            <input aria-label="First name" name="first-name" placeholder="First Name" autoComplete="given-name" required />
            <input aria-label="Last name" name="last-name" placeholder="Last Name" autoComplete="family-name" required />
          </div>
          <input
            aria-label="Email address"
            name="email"
            placeholder="Email Address"
            type="email"
            autoComplete="email"
            required
          />
          <input aria-label="Subject" name="subject" placeholder="Subject" required />
          <textarea aria-label="Message" name="message" placeholder="Message" rows={7} required />
          <button type="submit">Submit</button>
        </form>

        <aside className="contact-card">
          <h2>Address</h2>
          <p>97 N Main St. Memphis, TN 38103-5002</p>
          <h2>Phone</h2>
          <p>(901) 632-1428</p>
          <h2>Email</h2>
          <p>cache42downtown@gmail.com</p>
          <h2>Opening Hours</h2>
          <HoursList />
          <div className="contact-social">
            <h2>Follow Us</h2>
            <SocialLinks small />
          </div>
        </aside>

        <div className="map-frame">
          <OptimizedImage
            image={assets.contactMap}
            alt="Map showing Cache 42 Downtown Express location"
            sizes="(max-width: 760px) 90vw, 1044px"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
