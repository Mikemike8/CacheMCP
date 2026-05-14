import { assets, OptimizedImage, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />

      <main className="page-shell" id="main-content" tabIndex={-1}>
        <PageHero title="About Us" image={assets.aboutHero} className="about-hero" />

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
          <figure className="video-preview" aria-label="Cache 42 dining room video preview">
            <OptimizedImage image={assets.aboutVideo} alt="" sizes="(max-width: 760px) 90vw, 1039px" />
            <span aria-hidden="true" />
          </figure>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
