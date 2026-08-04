import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
});

const title = "Чуча — груминг и зоо-отель в Краснодаре";
const description = "Бережный груминг, SPA-уход и комфортный зоо-отель для любимых питомцев в Краснодаре.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    icons: { icon: "/chucha-logo.jfif" },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ru_RU",
      images: [{ url: ogImage, width: 1680, height: 945, alt: "Чуча — искусство заботы" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
