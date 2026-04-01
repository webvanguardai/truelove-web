import type { Metadata } from "next";
import { Playfair_Display, IM_Fell_English, Special_Elite } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--playfair",
  display: "swap",
});

const fell = IM_Fell_English({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--fell",
  display: "swap",
});

const elite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--elite",
  display: "swap",
});

export const metadata: Metadata = {
  title: "True Love Creative — Web & Graphic Design Studio · Dubai",
  description: "True Love Creative. High-end digital experiences. Est. 2015 · Dubai.",
  openGraph: { title: "True Love Creative", description: "High-end digital experiences. Est. 2015 · Dubai.", url: "https://truelovecreative.es", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${fell.variable} ${elite.variable}`}>
      <body>{children}</body>
    </html>
  );
}
