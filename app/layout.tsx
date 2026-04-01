import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "True Love Creative — Web & Graphic Design Studio · Est. 2015 · Dubai",
  description: "True Love Creative is a high-end web and graphic design studio based in Dubai. Premium digital experiences, brand identity and creative direction. From Dubai to the world.",
  keywords: ["web design dubai", "graphic design studio", "brand identity dubai", "creative agency", "true love creative"],
  openGraph: {
    title: "True Love Creative",
    description: "High-end digital experiences. Minimalist design, premium execution. Est. 2015 · Dubai.",
    url: "https://truelovecreative.es",
    siteName: "True Love Creative",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body style={{ fontFamily: "var(--font-sans), 'Space Grotesk', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
