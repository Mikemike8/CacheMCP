import { assets, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

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
          <figure className="video-preview" aria-label="Cache 42 dining room video">
            <video autoPlay loop muted playsInline preload="metadata" poster={assets.aboutVideo.src}>
              <source
                src="/assets/optimized/Logo_Animation_A_low-angle_medium_shot_shows_a_person_in_a_black_96LsVFLh.mp4"
                type="video/mp4"
              />
            </video>
          </figure>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
