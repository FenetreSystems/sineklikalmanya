export default function OlcuyeOzelUretim() {
  const steps = [
    {
      step: "1",
      title: "Ölçü Alın",
      description: "Pencere ölçülerinizi milimetre hassasiyetle alın.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      step: "2",
      title: "Sipariş Verin",
      description: "WhatsApp üzerinden ölçülerinizi paylaşın.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      step: "3",
      title: "Üretim Başla",
      description: "Özel ölçülerinize göre üretim başlar.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      step: "4",
      title: "Demonte Paket",
      description: "Kolay gönderim için demonte olarak paketlenir.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      step: "5",
      title: "Kargola",
      description: "Almanya&apos;ya güvenli kargo ile gönderilir.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    },
    {
      step: "6",
      title: "Kapınıza Gelsin",
      description: "4-8 günde adresinize teslim edilir.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <section id="olcuye-ozel" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Ölçüye Özel Üretim Süreci
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          Her pencere <strong>özel ölçüye</strong> göre üretilir. <em>Sıfır hata</em> ile <u>kesin uyum</u> sağlanır.
        </p>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-sm leading-relaxed">
          <strong>Almanya sineklik</strong> ihtiyaçlarınız için milimetre hassasiyetinde ölçüye özel üretim yapıyoruz. <em>Sineklik Almanya</em> olarak tüm <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerinde Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya şehirlerine gönderim garantisi sunuyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#83bd81] text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
              <div className="text-[#83bd81] mb-3 mt-2 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-bold text-[#404e5e] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-[#404e5e] mb-4">Ölçü Alma ve Üretim Detayları</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Ölçü Alma Rehberi</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Almanya sineklik</strong> siparişlerinizde pencere ölçülerinizi milimetre hassasiyetle almanız gerekiyor. Genişlik, yükseklik ve montaj tipini WhatsApp üzerinden bizimle paylaşın. <em>Sineklik Almanya</em> olarak size doğru ölçü alma konusunda destek sağlıyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Montaj Seçenekleri</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tüm <u>sineklik</u> ve perde sistemleri tavan montajı, duvar montajı veya pencere kasasına monte edilebilir. Berlin, Münih, Hamburg gibi Almanya şehirlerindeki evleriniz için uygun montaj çözümlerimiz mevcuttur.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Üretim Aşaması</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Sipariş onayından sonra <strong>plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemleriniz özel ölçülerinize göre üretilir. Üretim süresi genellikle 2-3 iş günüdür.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Paketleme ve Gönderim</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ürünleriniz demonte olarak güvenli paketlenir. Köln, Frankfurt, Stuttgart, Düsseldorf, Dortmund, Essen, Leipzig, Hannover, Nürnberg dahil tüm Almanya şehirlerine 4-8 günde kargo ile teslim edilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
