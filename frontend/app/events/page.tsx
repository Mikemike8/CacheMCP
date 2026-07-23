import { assets, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";
import eventsContent from "../../content/events.json";

const events = eventsContent.events;

export default function EventsPage() {
  return (
    <>
      <SiteHeader active="events" />

      <main className="page-shell" id="main-content" tabIndex={-1}>
        <PageHero title="Events" image={assets.eventsHero} className="events-hero" />

        <section className="events-section">
          <h2>Upcoming Events</h2>
          <p>
            There’s always something happening at Cache 42. Join us throughout the week for live music, themed
            nights, and vibrant experiences that bring together food, culture, and nightlife.
          </p>
          <div className="event-grid">
            {events.map((event) => (
              <article className="event-card" key={event.title}>
                <img
                  src={event.image}
                  alt={event.imageAlt || `${event.title} event at Cache 42`}
                  width="720"
                  height="540"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3>{event.title}</h3>
                  <p className="event-date">
                    <img src={assets.calendar} alt="" width="100" height="100" loading="lazy" decoding="async" />
                    {event.date}
                  </p>
                  <p className="event-time">
                    <img src={assets.eventsClock} alt="" width="100" height="100" loading="lazy" decoding="async" />
                    {event.time}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="events-note">
            For the latest events and updates, follow us on Instagram and Facebook{" "}
            <strong>@cache42_downtown</strong>
          </p>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
