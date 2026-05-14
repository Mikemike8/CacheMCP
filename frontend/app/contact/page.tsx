import { assets, HoursList, OptimizedImage, PageHero, SiteFooter, SiteHeader, SocialLinks } from "../components/SiteChrome";
import { NetlifyForm } from "../components/NetlifyForm";

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />

      <main className="page-shell" id="main-content" tabIndex={-1}>
        <PageHero title="Contact Us" image={assets.contactHero} className="contact-hero" />

        <section className="contact-section">
          <NetlifyForm
            className="contact-form"
            formName="contact"
          >
            <p className="form-hidden" aria-hidden="true">
              <label>
                Do not fill this out if you are human: <input name="bot-field" tabIndex={-1} />
              </label>
            </p>
            <h2>Get in Touch</h2>
            <div className="contact-name-row">
              <label>
                <span className="sr-only">First name</span>
                <input name="first-name" placeholder="First Name" autoComplete="given-name" required />
              </label>
              <label>
                <span className="sr-only">Last name</span>
                <input name="last-name" placeholder="Last Name" autoComplete="family-name" required />
              </label>
            </div>
            <label>
              <span className="sr-only">Email address</span>
              <input name="email" placeholder="Email Address" type="email" autoComplete="email" required />
            </label>
            <label>
              <span className="sr-only">Subject</span>
              <input name="subject" placeholder="Subject" required />
            </label>
            <label>
              <span className="sr-only">Message</span>
              <textarea name="message" placeholder="Message" rows={7} required />
            </label>
            <button type="submit">Submit</button>
          </NetlifyForm>

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
    </>
  );
}
