export default function NedenUreticiden() {
  const reasons = [
    {
      title: "Aracı Yok",
      description: "Doğrudan üreticiden alışveriş ile aracı firmaların eklediği masrafları ortadan kaldırıyoruz. En rekabetçi fiyatları sunuyoruz.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Özel Ölçü",
      description: "Her pencere için milimetre hassasiyetinde kesin ölçü alıyoruz. Tam uyum garantisi ve sıfır hata ile üretim yapıyoruz.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Kalite Kontrol",
      description: "Üretimden teslimata kadar her aşamada titiz kalite kontrolü uyguluyoruz. Memnuniyet önceliğimizdir.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "2 Yıl Garanti",
      description: "Tüm ürünlerimiz 2 yıl garanti kapsamındadır. Güvenli alışveriş ve uzun ömürlü kullanım garantisi sunuyoruz.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-6">
            Neden Üreticiden Almalısınız?
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
            <strong>Aracılar olmadan</strong> <em>doğrudan</em> üreticiden alışveriş yapın. <u>Fiyat avantajı</u>, <strong>kalite garantisi</strong> ve profesyonel hizmet elde edersiniz.
          </p>
          <p className="text-gray-600 max-w-5xl mx-auto text-base leading-relaxed">
            <strong>Almanya sineklik</strong> alışverişlerinizde aracıları ortadan kaldırarak en uygun fiyatları sunuyoruz. <em>Sineklik Almanya</em> olarak doğrudan üreticiden tedarik ettiğimiz tüm <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerinde kalite kontrolünü kendi bünyemizde gerçekleştiriyoruz. <strong>Sineklik ustaları</strong>, <strong>sineklik satış noktaları</strong> ve <strong>sineklik montajı yapan profesyoneller</strong> için özel toptan fiyat avantajları sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-[#83bd81]/10 transition-all border border-gray-100">
              <div className="text-[#83bd81] mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-lg font-bold text-[#404e5e] mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#83bd81]/10 to-[#404e5e]/10 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-[#404e5e] mb-8 text-center">Üretici Avantajları ve Profesyonel Hizmetler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Fiyat Avantajı</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                <strong>Almanya sineklik</strong> piyasasında aracı firmaların eklediği masrafları ortadan kaldırarak doğrudan üretici fiyatları sunuyoruz. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf ve tüm Almanya şehirlerine <u>sineklik</u> gönderimlerinde en uygun fiyat garantisi veriyoruz. Üretim maliyetlerimizi optimize ederek <strong>sineklik ustaları</strong> ve <strong>sineklik satış noktaları</strong> için yüksek kar marjı sağlıyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Özel Üretim ve Hassasiyet</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tüm <strong>plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemleri milimetre hassasiyetle ölçüye özel olarak üretiliyor. Her pencere için tam uyum garantisi sağlıyoruz. <strong>Sineklik montajı yapan profesyoneller</strong> için kolay kurulum sağlayan demonte paketleme yapıyoruz.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Kalite Kontrol ve Standartlar</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Üretimden teslimata kadar her aşamada titiz kalite kontrolü uyguluyoruz. <strong>Almanya sineklik</strong> standartlarına uygun yüksek kaliteli fiberglas tül ve alüminyum çerçeve kullanıyoruz. UV ışınlarına dayanıklı, hava geçirgen ve uzun ömürlü malzemeler ile üretim yapıyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Garanti ve Teknik Destek</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tüm ürünlerimiz 2 yıl garanti kapsamındadır. <em>Sineklik Almanya</em> olarak teknik destek ve kurulum danışmanlığı hizmeti sunuyoruz. WhatsApp üzerinden 7/24 ulaşabilirsiniz. <strong>Sineklik ustaları</strong> ve <strong>sineklik montaj ekipleri</strong> için özel eğitim programlarımız mevcuttur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
