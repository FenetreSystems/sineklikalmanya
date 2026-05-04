export default function KarsilastirmaTablosu() {
  return (
    <section id="karsilastirma-tablosu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Sineklik Modelleri Karşılaştırma
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          Her modelin <strong>avantajları</strong> ve <em>özellikleri</em> farklıdır. <u>İhtiyacınıza</u> en uygun modeli seçin.
        </p>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-sm leading-relaxed">
          <strong>Almanya sineklik</strong> pazarında farklı modeller karşılaştırması yaparak doğru seçimi yapabilirsiniz. <em>Sineklik Almanya</em> olarak sabit sineklik, plise sineklik, plise perde, jaluzi perde, honeycomb perde ve zip perde modellerini Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya şehirlerine gönderiyoruz.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-[#404e5e] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Model</th>
                <th className="px-6 py-4 text-left font-bold">Kullanım Alanı</th>
                <th className="px-6 py-4 text-left font-bold">Fiyat Aralığı</th>
                <th className="px-6 py-4 text-left font-bold">Dayanıklılık</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-[#404e5e]">Sabit Sineklik</td>
                <td className="px-6 py-4 text-gray-600">Sabit pencereler</td>
                <td className="px-6 py-4 text-gray-600">Ekonomik</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Yüksek</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-[#404e5e]">Plise Sineklik</td>
                <td className="px-6 py-4 text-gray-600">Tüm pencereler</td>
                <td className="px-6 py-4 text-gray-600">Orta</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Çok Yüksek</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-[#404e5e]">Plise Perde</td>
                <td className="px-6 py-4 text-gray-600">Güneş kontrolü</td>
                <td className="px-6 py-4 text-gray-600">Orta-Yüksek</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Yüksek</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-[#404e5e]">Jaluzi Perde</td>
                <td className="px-6 py-4 text-gray-600">Ofis ve ev</td>
                <td className="px-6 py-4 text-gray-600">Orta</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Yüksek</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-[#404e5e]">Honeycomb</td>
                <td className="px-6 py-4 text-gray-600">Yalıtım gerekli</td>
                <td className="px-6 py-4 text-gray-600">Yüksek</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Çok Yüksek</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-[#404e5e]">Zip Perde</td>
                <td className="px-6 py-4 text-gray-600">Geniş pencereler</td>
                <td className="px-6 py-4 text-gray-600">Yüksek</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Çok Yüksek</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-12 bg-gradient-to-r from-[#83bd81]/10 to-[#404e5e]/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-[#404e5e] mb-4">Model Seçim Rehberi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Ekonomik Çözümler</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Almanya sineklik</strong> ihtiyaçlarınız için ekonomik çözüm arıyorsanız sabit sineklik modeli en uygun seçenektir. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg gibi şehirlerdeki evleriniz için uygun fiyatlı <u>sineklik</u> çözümleri sunuyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Orta Sınıf Çözümler</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Plise sineklik</strong> ve <strong>jaluzi perde</strong> modelleri orta fiyat aralığında sunuluyor. Tüm pencereler için kullanılabilir ve yüksek dayanıklılık özelliği mevcuttur.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Premium Çözümler</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Plise perde</strong>, <strong>honeycomb perde</strong> ve <strong>zip perde</strong> modelleri premium segmentte yer alıyor. Köln, Frankfurt, Stuttgart, Düsseldorf gibi şehirlerdeki modern evler için idealdir.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Özel İhtiyaçlar</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yalıtım ihtiyacı için honeycomb perde, geniş pencereler için zip perde, güneş kontrolü için plise perde tercih edilebilir. Dortmund, Essen, Leipzig, Hannover, Nürnberg dahil tüm Almanya şehirlerine gönderim yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
