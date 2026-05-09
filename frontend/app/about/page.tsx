import { assets, OptimizedImage, PageHero, SiteFooter } from "../components/SiteChrome";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHero title="About Us" image={assets.aboutHero} active="about" className="about-hero" />

      <section className="about-section">
        <h2>Caribbean Flavor in the Heart of Memphis</h2>
        <p>
          Located in the heart of Memphis, Cache 42 Downtown Express brings bold Caribbean flavors to the
          downtown dining scene. Inspired by traditional Caribbean cuisine, our menu features vibrant spices,
          fresh ingredients, and signature dishes like Jerk Chicken and Curried Goat, all prepared with care and
          authenticity. At Cache 42, we believe great food brings people together. We’ve created a welcoming
          space where guests can enjoy high-quality meals, refreshing cocktails, and a lively atmosphere. With
          vegetarian, vegan, and gluten-free options available, and a team ready to guide you through the menu,
          we aim to deliver an authentic and memorable Caribbean experience right here in Memphis.
        </p>
        <button className="video-preview" type="button" aria-label="Play Cache 42 video">
          <OptimizedImage image={assets.aboutVideo} alt="" sizes="(max-width: 760px) 90vw, 1039px" />
          <span />
        </button>
      </section>

      <SiteFooter />
    </main>
  );
}
