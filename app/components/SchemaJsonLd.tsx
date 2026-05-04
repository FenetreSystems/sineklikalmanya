export default function SchemaJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sineklik Almanya",
    "description": "Türkiye'den Almanya'ya sineklik, plise perde, jaluzi perde teslimatı. Ölçüye özel üretim, demonte paketlenmiş gönderim.",
    "url": "https://sineklikalmanya.com.tr",
    "telephone": "+905403363873",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      "addressRegion": "Berlin"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.5200",
      "longitude": "13.4050"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Germany"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Sa 09:00-18:00",
    "image": "https://sineklikalmanya.com.tr/og-image.jpg",
    "sameAs": [
      "https://wa.me/905403363873"
    ],
    "potentialAction": {
      "@type": "ContactAction",
      "telephone": "+905403363873",
      "contactType": "customer service"
    },
    "product": [
      {
        "@type": "Product",
        "name": "Sineklik",
        "description": "Almanya için yüksek kaliteli pencere sineklikleri"
      },
      {
        "@type": "Product",
        "name": "Plise Sineklik",
        "description": "Katlanır sineklik sistemleri"
      },
      {
        "@type": "Product",
        "name": "Plise Perde",
        "description": "Enerji verimliliği sağlayan plise perdeler"
      },
      {
        "@type": "Product",
        "name": "Jaluzi Perde",
        "description": "Alüminyum jaluzi perde sistemleri"
      },
      {
        "@type": "Product",
        "name": "Honeycomb Perde",
        "description": "Yalıtım sağlayan arı petek perdeler"
      },
      {
        "@type": "Product",
        "name": "Zip Perde",
        "description": "Mekanik zip sistemi perdeler"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
