export default function MalzemeKalitesi() {
  const materials = [
    {
      name: "Alüminyum",
      description: "Hafif, dayanıklı ve paslanmaz."
    },
    {
      name: "Fiberglas Tül",
      description: "Hava geçirgen, dayanıklı."
    },
    {
      name: "Polimer",
      description: "Esnek, uzun ömürlü."
    },
    {
      name: "Paslanmaz Çelik",
      description: "Korozyona dayanıklı."
    }
  ];

  return (
    <section id="malzeme-kalitesi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Malzeme Kalitesi
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          <strong>En kaliteli</strong> malzemeler kullanılır. <em>Uzun ömürlü</em> ve <u>dayanıklı</u> ürünler.
        </p>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-sm leading-relaxed">
          <strong>Almanya sineklik</strong> sistemlerinde kullanılan malzemeler en üst kalite standartlarına sahiptir. <em>Sineklik Almanya</em> olarak alüminyum, fiberglas tül, polimer ve paslanmaz çelik malzemelerle üretim yapıyoruz. Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya şehirlerine gönderim yapıyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-bold text-[#404e5e] mb-2">{material.name}</h3>
              <p className="text-sm text-gray-600">{material.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-r from-[#83bd81]/10 to-[#404e5e]/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-[#404e5e] mb-4">Malzeme Özellikleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Alüminyum Çerçeve</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Almanya sineklik</strong> sistemlerinde kullanılan alüminyum çerçeveler hafif, dayanıklı ve paslanmaz özelliktedir. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg gibi şehirlerdeki evleriniz için uzun ömürlü <u>sineklik</u> çözümleri sunuyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Fiberglas Tül</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yüksek kaliteli fiberglas tül hava geçirgen, dayanıklı ve UV ışınlarına karşı dayanıklıdır. <strong>Plise sineklik</strong> ve <strong>sabit sineklik</strong> modellerimizde kullanılır.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Polimer Bileşenler</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Esnek ve uzun ömürlü polimer bileşenler <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong> ve <strong>zip perde</strong> sistemlerinde kullanılır. Köln, Frankfurt, Stuttgart, Düsseldorf gibi şehirlerdeki modern evler için idealdir.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Paslanmaz Çelik</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Korozyona dayanıklı paslanmaz çelik bileşenler uzun ömür garantisi sunar. Dortmund, Essen, Leipzig, Hannover, Nürnberg dahil tüm Almanya şehirlerine gönderim yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
