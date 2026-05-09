import Link from "next/link";
import { assets, OptimizedImage, SiteFooter, SiteHeader } from "./components/SiteChrome";

export default function LandingPage() {
  return (
    <main className="page-shell">
      <SiteHeader active="home" />

      <section className="landing-hero" aria-labelledby="landing-title">
        <OptimizedImage image={assets.landingHero} alt="" sizes="100vw" priority />
        <div className="hero-overlay" />
        <div className="landing-hero-content">
          <p className="hero-eyebrow">Cache 42 Downtown Express</p>
          <h1 id="landing-title">
            Bold Caribbean Flavor
            <br />
            in the Heart of Memphis
          </h1>
          <p className="hero-tagline">Where Flavor Meets Style.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/book-a-table">
              Book a Table
            </Link>
            <Link className="button button-dark" href="/menu">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="intro-panel">
        <h2>A Vibrant Caribbean Dining Experience</h2>
        <p>
          Located in the heart of Memphis, Cache 42 Downtown Express brings the bold flavors of Caribbean
          cuisine to the city. Inspired by West Indian traditions, the menu features signature dishes like Jerk
          Chicken, Curried Goat, and fresh seafood, alongside handcrafted Caribbean-inspired cocktails and
          refreshing drinks. Together, these vibrant flavors create a unique and memorable dining experience.
        </p>
        <div className="intro-actions">
          <Link className="button button-outline-dark" href="/book-a-table">
            Make a Reservation
          </Link>
          <Link className="button button-outline-dark" href="/menu">
            Our Menu
          </Link>
        </div>
      </section>

      <section className="split-story" aria-label="Restaurant story and events">
        <OptimizedImage
          image={assets.storyExterior}
          alt="Cache 42 storefront"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <article>
          <h2>Our Story</h2>
          <p>
            Located in the heart of Memphis, Cache 42 Downtown Express brings the bold flavors of Caribbean
            cuisine to the city. Inspired by West Indian traditions, our menu features fresh ingredients,
            signature dishes, and handcrafted cocktails designed to create a vibrant and memorable dining
            experience.
          </p>
          <Link className="button button-outline-gold" href="/about">
            Learn More
          </Link>
        </article>
        <article>
          <h2>Events at Cache 42</h2>
          <p>
            There’s always something happening at Cache 42 Downtown Express. Throughout the week, we host events
            that bring together great food, handcrafted drinks, music, and a vibrant atmosphere in the heart of
            Memphis.
          </p>
          <Link className="button button-outline-gold" href="/events">
            View Events
          </Link>
        </article>
        <OptimizedImage
          image={assets.eventsInterior}
          alt="Cache 42 lounge interior"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </section>

      <section className="instagram-section">
        <h2>Follow Us @cache42_downtown</h2>
        <div className="instagram-grid">
          {assets.instagramGrid.map((image, index) => (
            <OptimizedImage
              image={image}
              alt=""
              key={image.src}
              className={`instagram-${index + 1}`}
              sizes="(max-width: 760px) 90vw, 326px"
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
