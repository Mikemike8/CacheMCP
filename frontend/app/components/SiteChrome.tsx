import Link from "next/link";

export const assets = {
  logo: "/assets/landing-logo.png",
  instagram: "/assets/landing-instagram.png",
  facebook: "/assets/landing-facebook.png",
  snapchat: "/assets/landing-snapchat.png",
  landingHero: "/assets/landing-hero.jpg",
  storyExterior: "/assets/story-exterior.jpg",
  eventsInterior: "/assets/events-interior.jpg",
  instagramGrid: [
    "/assets/instagram-1.jpg",
    "/assets/instagram-2.jpg",
    "/assets/instagram-3.jpg",
    "/assets/instagram-4.jpg",
    "/assets/instagram-5.jpg",
    "/assets/instagram-6.jpg",
  ],
  menuHero: "/assets/menu-hero.jpg",
  menuBrunch: "/assets/menu-brunch.jpg",
  menuLunch: "/assets/menu-lunch.jpg",
  menuDinner: "/assets/landing-hero.jpg",
  aboutHero: "/assets/about-hero.jpg",
  aboutVideo: "/assets/about-video.jpg",
  eventsHero: "/assets/events-interior.jpg",
  eventsCards: [
    "/assets/events-card-brunch.jpg",
    "/assets/events-card-beat.jpg",
    "/assets/events-card-rnb.jpg",
  ],
  eventsClock: "/assets/events-clock.png",
  contactHero: "/assets/contact-hero.jpg",
  contactMap: "/assets/contact-map.jpg",
  bookHero: "/assets/book-hero.jpg",
  calendar: "/assets/calendar.png",
  clock: "/assets/clock.png",
  arrow: "/assets/expand-arrow.png",
};

const navItems = [
  { label: "Menu", href: "/menu", key: "menu" },
  { label: "About Us", href: "/about", key: "about" },
  { label: "Events", href: "/events", key: "events" },
  { label: "Contact", href: "/contact", key: "contact" },
];

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <nav className="top-nav" aria-label="Main navigation">
        <Link className="brand-link" href="/" aria-label="Cache 42 home">
          <img src={assets.logo} alt="Cache 42" />
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link className={active === item.key ? "active" : undefined} href={item.href} key={item.key}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link className="reservation-link" href="/book-a-table">
          Book a Table
        </Link>
      </nav>
    </header>
  );
}

export function PageHero({
  title,
  image,
  active,
  className,
}: {
  title: string;
  image: string;
  active?: string;
  className?: string;
}) {
  return (
    <>
      <SiteHeader active={active} />
      <section className={`page-hero ${className ?? ""}`} aria-labelledby="page-title">
        <img src={image} alt="" />
        <div className="hero-overlay" />
        <h1 id="page-title">{title}</h1>
      </section>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={assets.logo} alt="Cache 42" />
          <SocialLinks />
        </div>

        <section className="footer-column">
          <h2>Location</h2>
          <p>
            97 N Main St. Memphis, TN
            <br />
            38103-5002
          </p>
        </section>

        <section className="footer-column hours-column">
          <h2>Hours</h2>
          <HoursList compact />
        </section>

        <section className="footer-column contact-column">
          <h2>Contact</h2>
          <p>Phone: (901) 632-1428</p>
          <p>Email: cache42downtown@gmail.com</p>
        </section>
      </div>
    </footer>
  );
}

export function SocialLinks({ small = false }: { small?: boolean }) {
  return (
    <div className={small ? "social-links social-links-small" : "social-links"} aria-label="Social links">
      <a href="#" aria-label="Instagram">
        <img src={assets.instagram} alt="" />
      </a>
      <a href="#" aria-label="Facebook">
        <img src={assets.facebook} alt="" />
      </a>
      <a href="#" aria-label="Snapchat">
        <img src={assets.snapchat} alt="" />
      </a>
    </div>
  );
}

export function HoursList({ compact = false }: { compact?: boolean }) {
  return (
    <dl className={compact ? "hours-list compact" : "hours-list"}>
      <div>
        <dt>Mon-Tue:</dt>
        <dd>Closed</dd>
      </div>
      <div>
        <dt>Wed-Thu:</dt>
        <dd>11-3 | 5-10</dd>
      </div>
      <div>
        <dt>Fri-Sat:</dt>
        <dd>11-3 | 5-12</dd>
      </div>
      <div>
        <dt>Sun:</dt>
        <dd>11-3 | 5-10</dd>
      </div>
    </dl>
  );
}
