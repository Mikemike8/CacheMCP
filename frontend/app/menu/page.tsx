import { assets, OptimizedImage, PageHero, SiteFooter } from "../components/SiteChrome";

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

export default function MenuPage() {
  return (
    <main className="page-shell">
      <PageHero title="Menu" image={assets.menuHero} active="menu" className="menu-hero" />

      <section className="menu-section menu-section-light">
        <MenuList title="Brunch" items={brunch} accent="red" />
        <OptimizedImage image={assets.menuBrunch} alt="Brunch plate" sizes="(max-width: 760px) 90vw, 499px" />
      </section>

      <section className="menu-section menu-section-dark">
        <OptimizedImage image={assets.menuLunch} alt="Lunch plate" sizes="(max-width: 760px) 90vw, 383px" />
        <MenuList title="Lunch" items={lunch} accent="white" />
      </section>

      <section className="menu-section menu-section-light">
        <MenuList title="Dinner" items={dinner} accent="red" />
        <OptimizedImage image={assets.menuDinner} alt="Dinner plate" sizes="(max-width: 760px) 90vw, 499px" />
      </section>

      <div className="menu-cta">
        <a className="button button-gold" href="#">
          View Full Menu
        </a>
      </div>

      <SiteFooter />
    </main>
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
