import { assets, PageHero, SiteFooter } from "../components/SiteChrome";

const events = [
  {
    title: "Saturday Brunch Block Party",
    date: "May 28, 2026",
    time: "12:00 A.M - 5:00 P.M.",
    image: assets.eventsCards[0],
  },
  {
    title: "Taste the Beat w/ Dj Babo",
    date: "Every Friday",
    time: "5:00 P.M. - 8:00 P.M.",
    image: assets.eventsCards[1],
  },
  {
    title: "R&B Block Party",
    date: "April 12, 2026",
    time: "4:00 P.M. - 10:00 P.M.",
    image: assets.eventsCards[2],
  },
];

export default function EventsPage() {
  return (
    <main className="page-shell">
      <PageHero title="Events" image={assets.eventsHero} active="events" className="events-hero" />

      <section className="events-section">
        <h2>Upcoming Events</h2>
        <p>
          There’s always something happening at Cache 42. Join us throughout the week for live music, themed
          nights, and vibrant experiences that bring together food, culture, and nightlife.
        </p>
        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <img src={event.image} alt="" />
              <div>
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p className="event-time">
                  <img src={assets.eventsClock} alt="" />
                  {event.time}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="events-note">
          For the latest events and updates, follow us on Instagram and Facebook{" "}
          <strong>@cache42downtown</strong>
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
