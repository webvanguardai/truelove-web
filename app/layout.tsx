import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "True Love Creative — Web & Graphic Design Studio · Dubai",
  description: "True Love Creative is a high-end web and graphic design studio based in Dubai. Premium digital experiences, brand identity and creative direction.",
  openGraph: {
    title: "True Love Creative",
    description: "High-end digital experiences. Est. 2015 · Dubai.",
    url: "https://truelovecreative.es",
    siteName: "True Love Creative",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={syne.variable}>
      <body>{children}</body>
    </html>
  );
}
