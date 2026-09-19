import { SITE_URL } from "@/app/site";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const name = "Pagemeter";
const title = `${name} | Traffic-based pricing`;
const description =
  "Pick the pageviews you expect and see what you pay. Switch to yearly billing for 25% off, and start a 30-day trial with no credit card.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Pagemeter pricing panel with its pageviews slider and monthly total.",
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafbff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
