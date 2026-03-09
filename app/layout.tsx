import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The LeapStack Marketing System",
  description:
    "Website Design & Marketing Systems For Local Service Businesses. Get and keep more customers on autopilot.",
  openGraph: {
    title: "The LeapStack Marketing System",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
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
