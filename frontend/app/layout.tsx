import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cache 42 Downtown Express",
  description: "Bold Caribbean flavor in the heart of Memphis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NetlifyFormDefinitions />
        {children}
      </body>
    </html>
  );
}

function NetlifyFormDefinitions() {
  return (
    <div className="form-hidden" aria-hidden="true">
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" />
        <input name="first-name" />
        <input name="last-name" />
        <input name="email" type="email" />
        <input name="subject" />
        <textarea name="message" />
      </form>
      <form name="booking" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="booking" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" type="email" />
        <input name="phone" type="tel" />
        <select name="guests">
          <option>1 guest</option>
        </select>
        <input name="date" type="date" />
        <input name="time" type="time" />
        <textarea name="requests" />
      </form>
    </div>
  );
}
