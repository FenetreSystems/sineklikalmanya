export default function GuvenBar() {
  const items = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Güvenli Ödeme",
      description: "SSL sertifikalı güvenli alışveriş"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Demonte Paket",
      description: "Kolay kurulum, güvenli gönderim"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Hızlı Teslimat",
      description: "4-8 günde kapınıza ulaştırır"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Üretici Fiyatı",
      description: "Aracı olmadan doğrudan satış"
    }
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-[#83bd81] mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#404e5e] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong>Almanya sineklik</strong> alışverişlerinizde güvenilir ve hızlı hizmet sunuyoruz. <em>Sineklik Almanya</em> olarak tüm <u>sineklik</u>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> ürünlerinizde SSL sertifikalı ödeme, demonte paketleme ve 4-8 günde teslimat garantisi sağlıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
