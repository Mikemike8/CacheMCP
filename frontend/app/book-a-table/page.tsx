import { assets, PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function BookTablePage() {
  return (
    <>
      <SiteHeader />

      <main className="page-shell" id="main-content" tabIndex={-1}>
        <PageHero title="Book a Table" image={assets.bookHero} className="book-hero" />

        <section className="booking-intro">
          <h2>Your Table Awaits</h2>
          <p>
            Reserve your spot and enjoy bold flavors, handcrafted cocktails, and a vibrant atmosphere in the heart
            of Memphis.
          </p>
        </section>

        <section className="reservation-section" aria-label="Reservation form">
          <form
            id="reservation-form"
            className="reservation-form"
            name="booking"
            method="POST"
            action="/thank-you/"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="booking" />
            <p className="form-hidden" aria-hidden="true">
              <label>
                Do not fill this out if you are human: <input name="bot-field" tabIndex={-1} />
              </label>
            </p>

            <FormField label="Name" id="name" autoComplete="name" required />
            <FormField label="Email" id="email" type="email" autoComplete="email" required />
            <FormField label="Phone" id="phone" type="tel" autoComplete="tel" required />

            <label className="field">
              <span>Guests</span>
              <span className="input-shell">
                <select id="guests" name="guests" aria-label="Guests" defaultValue="" required>
                  <option value="" disabled />
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5 guests</option>
                  <option>6 guests</option>
                </select>
                <img
                  className="field-icon"
                  src={assets.arrow}
                  alt=""
                  aria-hidden="true"
                  width="100"
                  height="100"
                  decoding="async"
                />
              </span>
            </label>

            <FormField label="Date" id="date" type="date" icon={assets.calendar} required />
            <FormField label="Time" id="time" type="time" icon={assets.clock} required />

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
    </>
  );
}

function FormField({
  label,
  id,
  type = "text",
  autoComplete,
  icon,
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  autoComplete?: string;
  icon?: string;
  required?: boolean;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <span className="input-shell">
        <input id={id} name={id} type={type} autoComplete={autoComplete} required={required} />
        {icon ? (
          <img
            className="field-icon"
            src={icon}
            alt=""
            aria-hidden="true"
            width="100"
            height="100"
            decoding="async"
          />
        ) : null}
      </span>
    </label>
  );
}
