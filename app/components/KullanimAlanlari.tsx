export default function KullanimAlanlari() {
  const areas = [
    {
      name: "Evler",
      description: "Her oda için uygun çözümler."
    },
    {
      name: "Ofisler",
      description: "Profesyonel görünüm."
    },
    {
      name: "Oteller",
      description: "Toplu alım indirimleri."
    },
    {
      name: "Restoranlar",
      description: "Hijyenik ortam sağlar."
    },
    {
      name: "Hastaneler",
      description: "Steril ve güvenli."
    },
    {
      name: "Okullar",
      description: "Ekonomik çözümler."
    }
  ];

  return (
    <section id="kullanim-alanlari" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Kullanım Alanları
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          <strong>Her mekan</strong> için <em>uygun</em> çözümler sunuyoruz. <u>Almanya&apos;nın</u> her yerinde kullanılır.
        </p>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-sm leading-relaxed">
          <strong>Almanya sineklik</strong> sistemleri her türlü mekan için uygundur. <em>Sineklik Almanya</em> olarak evler, ofisler, oteller, restoranlar, hastaneler ve okullarda kullanılan <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerini Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya şehirlerine gönderiyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-[#83bd81]">
              <h3 className="text-lg font-bold text-[#404e5e] mb-2">{area.name}</h3>
              <p className="text-sm text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-[#404e5e] mb-4">Mekan Bazlı Çözümler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Konut Çözümleri</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Almanya sineklik</strong> sistemleri evlerde mutfak, yatak odası, salon ve balkon pencereleri için idealdir. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg gibi şehirlerdeki konutlar için <u>sineklik</u>, <strong>plise sineklik</strong> ve <strong>plise perde</strong> çözümleri sunuyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Ticari Çözümler</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ofisler, mağazalar ve ticari mekanlar için profesyonel görünümlü <strong>jaluzi perde</strong> ve <strong>zip perde</strong> sistemleri mevcuttur. Köln, Frankfurt, Stuttgart, Düsseldorf gibi iş merkezlerinde kullanıma uygundur.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Hizmet Sektörü</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Oteller, restoranlar, hastaneler ve kafeler için hijyenik ve estetik çözümler sunuyoruz. <strong>Honeycomb perde</strong> sistemleri enerji verimliliği sağlar. Dortmund, Essen, Leipzig, Hannover, Nürnberg dahil tüm şehirlere gönderim yapıyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Eğitim Kurumları</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Okullar ve eğitim kurumları için ekonomik ve dayanıklı <strong>sineklik</strong> çözümlerimiz mevcuttur. Toplu alımlarda özel fiyat avantajları sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
