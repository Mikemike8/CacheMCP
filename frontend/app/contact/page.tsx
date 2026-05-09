import { assets, HoursList, OptimizedImage, PageHero, SiteFooter, SocialLinks } from "../components/SiteChrome";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHero title="Contact Us" image={assets.contactHero} active="contact" className="contact-hero" />

      <section className="contact-section">
        <form className="contact-form">
          <h2>Get in Touch</h2>
          <div className="contact-name-row">
            <input aria-label="First name" placeholder="First Name" />
            <input aria-label="Last name" placeholder="Last Name" />
          </div>
          <input aria-label="Email address" placeholder="Email Address" type="email" />
          <input aria-label="Subject" placeholder="Subject" />
          <textarea aria-label="Message" placeholder="Message" rows={7} />
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
