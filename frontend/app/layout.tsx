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
      <body>{children}</body>
    </html>
  );
}
