import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Almanya Sineklik | Üreticinden",
  description: "Türkiye'den Almanya'ya 4-8 günde kapınıza sineklik, plise perde, jaluzi perde teslimat. Demonte paketlenmiş, ölçüye özel üretim. Üreticiden en uygun fiyat.",
  keywords: "Almanya sineklik, plise sineklik, plise perde, jaluzi perde, honeycomb perde, zip perde, Almanya pencere sinekliği",
  authors: [{ name: "Sineklik Almanya" }],
  openGraph: {
    title: "Almanya Sineklik | Üreticinden",
    description: "Türkiye'den Almanya'ya 4-8 günde kapınıza sineklik, plise perde, jaluzi perde teslimat. Demonte paketlenmiş, ölçüye özel üretim.",
    url: "https://sineklikalmanya.com.tr",
    siteName: "Sineklik Almanya",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://sineklikalmanya.com.tr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
