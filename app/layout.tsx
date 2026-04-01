import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "True Love Creative — Web & Graphic Design Studio · Est. 2015 · Dubai",
  description: "True Love Creative is a high-end web and graphic design studio based in Dubai. Premium digital experiences, brand identity and creative direction. From Dubai to the world.",
  keywords: ["web design dubai", "graphic design studio", "brand identity dubai", "creative agency", "true love creative", "truelovecreative.es"],
  openGraph: {
    title: "True Love Creative",
    description: "High-end digital experiences. Minimalist design, premium execution. Est. 2015 · Dubai.",
    url: "https://truelovecreative.es",
    siteName: "True Love Creative",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Love Creative",
    description: "High-end digital experiences. Minimalist design, premium execution.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
