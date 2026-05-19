import { assets, OptimizedImage, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

const brunch = [
  ["Chicken & Waffles", "18"],
  ["Shrimp & Grits", "22"],
  ["Catfish & Grits", "25"],
  ["Cache Cajun Pasta", "22"],
  ["Turkey Ribs", "32"],
  ["Steak & Eggs", "35"],
  ["Lamb & Eggs", "35"],
];

const lunch = [
  ["Lobster Grilled Cheese", "15"],
  ["Oxtail Grilled Cheese", "17"],
  ["Deluxe Chicken Sandwich", "18"],
  ["Single Smash Burger", "11"],
  ["Double Smash Burger", "14"],
  ["Triple Smash Burger", "17"],
  ["Cache 42 Wings", "18"],
  ["Catfish Platter", "17"],
  ["Cache Cajun Pasta", "22"],
];

const dinner = [
  ["King Salmon & Shrimp", "42"],
  ["Surf & Tail", "68"],
  ["Oxtails", "38"],
  ["Cache Cajun Pasta", "22"],
  ["Ribeye", "42"],
  ["Turkey Ribs", "32"],
  ["Cache Flight", "35"],
];

const fullMenu = {
  title: "Full Menu",
  description: "Drink menu, bottle service, and catering menu combined into one PDF.",
  href: "/assets/menus/cache42-full-menu.pdf",
  image: "/assets/menus/cache42-drink-menu.jpg",
  width: 1149,
  height: 1369,
};

export default function MenuPage() {
  return (
    <>
      <SiteHeader active="menu" />

      <main className="page-shell" id="main-content" tabIndex={-1}>
        <PageHero title="Menu" image={assets.menuHero} className="menu-hero" />

        <section className="menu-section menu-section-light">
          <MenuList title="Dinner" items={dinner} accent="red" />
          <OptimizedImage image={assets.menuDinner} alt="Dinner plate" sizes="(max-width: 760px) 90vw, 499px" />
        </section>

        <section className="menu-section menu-section-dark">
          <OptimizedImage image={assets.menuLunch} alt="Lunch plate" sizes="(max-width: 760px) 90vw, 383px" />
          <MenuList title="Lunch" items={lunch} accent="white" />
        </section>

        <section className="menu-section menu-section-light">
          <MenuList title="Brunch" items={brunch} accent="red" />
          <OptimizedImage image={assets.menuBrunch} alt="Brunch plate" sizes="(max-width: 760px) 90vw, 499px" />
        </section>

        <section className="menu-downloads" aria-labelledby="menu-downloads-title">
          <p className="eyebrow">Explore More</p>
          <h2 id="menu-downloads-title">Full Menus</h2>
          <p>
            View the latest Cache 42 drink, bottle service, and catering menus together in one PDF for easy
            sharing or saving.
          </p>

          <article className="menu-download-card menu-download-card-featured">
            <a href={fullMenu.href} target="_blank" rel="noopener noreferrer" aria-label="Open full Cache 42 menu PDF">
              <img
                src={fullMenu.image}
                alt="Full Cache 42 menu preview"
                width={fullMenu.width}
                height={fullMenu.height}
                loading="lazy"
              />
            </a>
            <div>
              <h3>{fullMenu.title}</h3>
              <p>{fullMenu.description}</p>
              <a className="button button-gold" href={fullMenu.href} target="_blank" rel="noopener noreferrer">
                View Full Menu
              </a>
            </div>
          </article>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}

function MenuList({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[][];
  accent: "red" | "white";
}) {
  return (
    <div className={`menu-list menu-list-${accent}`}>
      <h2>{title}</h2>
      <ul>
        {items.map(([name, price]) => (
          <li key={name}>
            <span>{name}</span>
            <strong>{price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
