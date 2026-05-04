import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Almanya Sineklik | Üreticinden 4-8 Günde Teslimat",
  description: "Türkiye'den Almanya'ya 4-8 günde kapınıza sineklik, plise perde, jaluzi perde teslimat. Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya bölgelerine hizmet. Demonte paketlenmiş, ölçüye özel üretim.",
  keywords: "Almanya sineklik, plise sineklik, plise perde, jaluzi perde, honeycomb perde, zip perde, Almanya pencere sinekliği, Berlin sineklik, Münih sineklik, Hamburg sineklik",
  authors: [{ name: "Sineklik Almanya" }],
  openGraph: {
    title: "Almanya Sineklik | Üreticinden 4-8 Günde Teslimat",
    description: "Türkiye'den Almanya'ya 4-8 günde kapınıza sineklik, plise perde, jaluzi perde teslimat. Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya bölgelerine hizmet.",
    url: "https://sineklikalmanya.com.tr",
    siteName: "Sineklik Almanya",
    locale: "tr_TR",
    type: "website",
    countryName: "Germany",
  },
  alternates: {
    canonical: "https://sineklikalmanya.com.tr",
    languages: {
      'tr-TR': 'https://sineklikalmanya.com.tr',
      'de-DE': 'https://sineklikalmanya.com.tr',
      'en-DE': 'https://sineklikalmanya.com.tr',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
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
