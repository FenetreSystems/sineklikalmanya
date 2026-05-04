export default function FiyatFaktorleri() {
  const factors = [
    {
      factor: "Ölçü",
      description: "Büyük ölçüler daha maliyetlidir."
    },
    {
      factor: "Model",
      description: "Her modelin fiyatı farklıdır."
    },
    {
      factor: "Malzeme",
      description: "Kaliteli malzemeler fiyatı etkiler."
    },
    {
      factor: "Özellikler",
      description: "Motorlu sistemler ek maliyet getirir."
    },
    {
      factor: "Adet",
      description: "Toplu alımda indirim uygulanır."
    },
    {
      factor: "Teslimat",
      description: "Konuma göre kargo ücreti değişir."
    }
  ];

  return (
    <section id="fiyat-faktorleri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Fiyatı Etkileyen Faktörler
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          <strong>Fiyatlar</strong> birçok faktöre göre değişir. <em>Şeffaf</em> fiyatlandırma <u>uygularız</u>.
        </p>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-sm leading-relaxed">
          <strong>Almanya sineklik</strong> fiyatları ölçü, model, malzeme, özellikler, adet ve teslimat bölgesine göre değişir. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya şehirlerine <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerinde şeffaf fiyatlandırma sunuyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factors.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-[#404e5e] mb-2">{item.factor}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-[#404e5e] mb-4">Fiyatlandırma Detayları</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Ölçü ve Model</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Almanya sineklik</strong> fiyatları pencere ölçülerine göre belirlenir. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg gibi şehirlerdeki evleriniz için <u>sineklik</u>, <strong>plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> modellerinde ölçüye özel fiyatlandırma sunuyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Malzeme ve Özellikler</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kaliteli malzemeler ve motorlu sistemler fiyatı etkiler. Alüminyum çerçeve, fiberglas tül, polimer bileşenler ve paslanmaz çelik kullanımı dayanıklılık sağlar.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Toplu Alım Avantajları</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Toplu alımlarda miktar bazlı indirim uygulanır. Köln, Frankfurt, Stuttgart, Düsseldorf gibi şehirlerdeki projeler için özel fiyatlandırma yapıyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Teslimat Bölgesi</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Konuma göre kargo ücreti değişir. Dortmund, Essen, Leipzig, Hannover, Nürnberg dahil tüm Almanya şehirlerine 4-8 günde gönderim yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
