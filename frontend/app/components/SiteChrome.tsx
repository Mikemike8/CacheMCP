import type { ImgHTMLAttributes } from "react";
import Link from "next/link";

type ResponsiveImageAsset = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
};

type OptimizedImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "height" | "sizes" | "src" | "srcSet" | "width"
> & {
  image: ResponsiveImageAsset;
  priority?: boolean;
  sizes: string;
};

const responsivePhoto = (
  name: string,
  widths: number[],
  width: number,
  height: number,
): ResponsiveImageAsset => ({
  src: `/assets/optimized/${name}-${widths[widths.length - 1]}.webp`,
  srcSet: widths.map((photoWidth) => `/assets/optimized/${name}-${photoWidth}.webp ${photoWidth}w`).join(", "),
  width,
  height,
});

export const assets = {
  logo: responsivePhoto("landing-logo", [170, 300], 300, 355),
  instagram: "/assets/landing-instagram.png",
  facebook: "/assets/landing-facebook.png",
  snapchat: "/assets/landing-snapchat.png",
  landingHero: responsivePhoto("landing-hero", [640, 960, 1280, 1600, 1920], 2840, 2840),
  storyExterior: responsivePhoto("story-exterior", [480, 720, 960, 1200, 1500], 1500, 1500),
  eventsInterior: responsivePhoto("events-interior", [640, 960, 1280, 1440], 1440, 1440),
  instagramGrid: [
    responsivePhoto("instagram-1", [360, 520, 720, 900], 1440, 1440),
    responsivePhoto("instagram-2", [360, 520, 720, 900], 1508, 1524),
    responsivePhoto("instagram-3", [360, 520, 720, 900], 3000, 4000),
    responsivePhoto("instagram-4", [360, 520, 720, 900], 1228, 1562),
    responsivePhoto("instagram-5", [360, 520, 720, 900], 1518, 1510),
    responsivePhoto("instagram-6", [360, 520, 720, 900], 1522, 1496),
  ],
  menuHero: responsivePhoto("menu-hero", [640, 960, 1212], 1212, 1562),
  menuBrunch: responsivePhoto("menu-brunch", [480, 720, 960, 1200], 1488, 1520),
  menuLunch: responsivePhoto("menu-lunch", [480, 720, 960, 1200], 1200, 1602),
  menuDinner: responsivePhoto("landing-hero", [640, 960, 1280, 1600, 1920], 2840, 2840),
  aboutHero: responsivePhoto("about-hero", [640, 960, 1280, 1440], 1440, 1440),
  aboutVideo: responsivePhoto("about-video", [640, 960, 1280, 1600], 2030, 1016),
  eventsHero: responsivePhoto("events-interior", [640, 960, 1280, 1440], 1440, 1440),
  eventsCards: [
    responsivePhoto("events-card-brunch", [360, 520, 720, 960], 1644, 1636),
    responsivePhoto("events-card-beat", [360, 520, 720, 960], 1648, 1628),
    responsivePhoto("events-card-rnb", [360, 520, 720, 960], 1642, 1642),
  ],
  eventsClock: "/assets/events-clock.png",
  contactHero: responsivePhoto("contact-hero", [640, 960, 1280, 1440], 1440, 1440),
  contactMap: responsivePhoto("contact-map", [640, 960, 1280, 1600], 2374, 1274),
  bookHero: responsivePhoto("book-hero", [640, 960, 1280, 1600], 1950, 974),
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

export function OptimizedImage({
  image,
  priority = false,
  sizes,
  loading,
  ...props
}: OptimizedImageProps) {
  return (
    <img
      {...props}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : (loading ?? "lazy")}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  );
}

export function SiteHeader({ active }: { active?: string }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <nav className="top-nav" aria-label="Main navigation">
          <Link className="brand-link" href="/" aria-label="Cache 42 home">
            <OptimizedImage image={assets.logo} alt="Cache 42" sizes="85px" loading="eager" />
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
    </>
  );
}

export function PageHero({
  title,
  image,
  className,
}: {
  title: string;
  image: ResponsiveImageAsset;
  className?: string;
}) {
  return (
    <section className={`page-hero ${className ?? ""}`} aria-labelledby="page-title">
      <OptimizedImage image={image} alt="" sizes="100vw" priority />
      <div className="hero-overlay" />
      <h1 id="page-title">{title}</h1>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <OptimizedImage image={assets.logo} alt="Cache 42" sizes="85px" />
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
  const socialLinks = [
    {
      href: "https://www.instagram.com/cache42_downtown/",
      label: "Cache 42 on Instagram",
      icon: assets.instagram,
    },
    {
      href: "https://www.facebook.com/cache42downtown/",
      label: "Cache 42 on Facebook",
      icon: assets.facebook,
    },
    {
      href: "https://www.snapchat.com/add/cache42downtown",
      label: "Cache 42 on Snapchat",
      icon: assets.snapchat,
    },
  ];

  return (
    <div className={small ? "social-links social-links-small" : "social-links"} aria-label="Social links">
      {socialLinks.map((link) => (
        <a href={link.href} aria-label={link.label} key={link.label} rel="noopener noreferrer" target="_blank">
          <img src={link.icon} alt="" width="90" height="90" loading="lazy" decoding="async" />
        </a>
      ))}
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
