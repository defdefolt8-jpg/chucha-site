import type { Metadata } from "next";
import "./globals.css";

const title = "Чуча — груминг и зоо-отель в Краснодаре";
const description = "Бережный груминг, SPA-уход и комфортный зоо-отель для любимых питомцев в Краснодаре.";

export const metadata: Metadata = {
  metadataBase: new URL("https://chucha-pet.pages.dev"),
  title,
  description,
  icons: { icon: "/chucha-logo.jfif" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/og.png", width: 1680, height: 945, alt: "Чуча — искусство заботы" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
