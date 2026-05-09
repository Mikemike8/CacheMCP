import { assets, PageHero, SiteFooter } from "../components/SiteChrome";

export default function BookTablePage() {
  return (
    <main className="page-shell">
      <PageHero title="Book a Table" image={assets.bookHero} className="book-hero" />

      <section className="booking-intro">
        <h2>Your Table Awaits</h2>
        <p>
          Reserve your spot and enjoy bold flavors, handcrafted cocktails, and a vibrant atmosphere in the heart
          of Memphis.
        </p>
      </section>

      <section className="reservation-section" aria-label="Reservation form">
        <form id="reservation-form" className="reservation-form">
          <FormField label="Name" id="name" autoComplete="name" />
          <FormField label="Email" id="email" type="email" autoComplete="email" />
          <FormField label="Phone" id="phone" type="tel" autoComplete="tel" />

          <label className="field">
            <span>Guests</span>
            <span className="input-shell">
              <select id="guests" name="guests" aria-label="Guests" defaultValue="">
                <option value="" disabled />
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
                <option>5 guests</option>
                <option>6 guests</option>
              </select>
              <img className="field-icon" src={assets.arrow} alt="" aria-hidden="true" />
            </span>
          </label>

          <FormField label="Date" id="date" icon={assets.calendar} />
          <FormField label="Time" id="time" icon={assets.clock} />

          <label className="field field-wide">
            <span>Special Requests</span>
            <textarea id="requests" name="requests" rows={7} />
          </label>

          <button type="submit" className="submit-button">
            Book Now
          </button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}

function FormField({
  label,
  id,
  type = "text",
  autoComplete,
  icon,
}: {
  label: string;
  id: string;
  type?: string;
  autoComplete?: string;
  icon?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <span className="input-shell">
        <input id={id} name={id} type={type} autoComplete={autoComplete} />
        {icon ? <img className="field-icon" src={icon} alt="" aria-hidden="true" /> : null}
      </span>
    </label>
  );
}
