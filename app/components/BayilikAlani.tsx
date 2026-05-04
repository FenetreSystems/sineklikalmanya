export default function BayilikAlani() {
  const benefits = [
    {
      title: "Üreticiden Doğrudan Tedarik",
      description: "Aracı kurumlar olmadan doğrudan üreticiden tedarik avantajı ile en rekabetçi fiyatları sunuyoruz. Türkiye'deki üretim hattımızdan Almanya pazarına doğrudan erişim sağlayarak, bayilerimiz için yüksek kar marjı oluşturuyoruz."
    },
    {
      title: "Yüksek Kar Marjı",
      description: "Almanya sineklik pazarında sektör ortalamasının üzerinde kar marjı sunuyoruz. Üretim maliyetlerimizi optimize ederek, bayilerimize %40-60 arası karlı satış imkanı sağlıyoruz."
    },
    {
      title: "Reklam ve Pazarlama Desteği",
      description: "Bayilerimiz için dijital pazarlama, sosyal medya reklamcılığı ve yerel SEO desteği sunuyoruz. Almanya sineklik anahtar kelimelerinde Google'da üst sıralarda görünmeniz için stratejik destek sağlıyoruz."
    },
    {
      title: "Kapsamlı Eğitim ve Teknik Destek",
      description: "Sineklik ustası ve montaj ekibiniz için detaylı eğitim programları sunuyoruz. Plise sineklik, plise perde, jaluzi perde, honeycomb perde ve zip perde sistemlerinin kurulumu hakkında teknik destek sağlıyoruz."
    },
    {
      title: "Özel Bölgesel Koruma",
      description: "Her bayimiz için belirli bir bölgeye özel koruma alanı tanımlıyoruz. Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf ve diğer Almanya şehirlerinde bölgesel haklarınızı koruyoruz."
    },
    {
      title: "Stok ve Lojistik Desteği",
      description: "Bayilerimiz için stok yönetimi ve hızlı lojistik desteği sunuyoruz. Türkiye'den Almanya'ya 4-8 günde teslimat garantisi ile müşterilerinize zamanında hizmet verebilirsiniz."
    }
  ];

  const targetAudiences = [
    {
      title: "Sineklik Ustaları",
      description: "Yılların deneyimine sahip sineklik ustaları için özel bayilik paketleri sunuyoruz. Montaj teknikleri, ölçü alma metodolojileri ve müşteri iletişimi konusunda kapsamlı eğitim veriyoruz."
    },
    {
      title: "Sineklik Satış Noktaları",
      description: "Pencere perde ve sineklik satışı yapan mağazalar için toptan fiyat avantajları sunuyoruz. Vitrin ürünleri, kataloglar ve satış destek materyalleri sağlıyoruz."
    },
    {
      title: "Montaj Ekipleri",
      description: "Profesyonel montaj ekipleri için özel bayilik fırsatları sunuyoruz. Proje bazlı işler, toplu konut projeleri ve inşaat firmaları ile çalışma imkanı sağlıyoruz."
    },
    {
      title: "İnşaat Firmaları",
      description: "Yeni bina projelerinde sineklik ve perde sistemleri tedarik eden inşaat firmaları için özel proje bazlı bayilikler sunuyoruz. Toplu üretim ve montaj desteği sağlıyoruz."
    }
  ];

  const cities = [
    "Berlin", "Münih", "Hamburg", "Köln", "Frankfurt", "Stuttgart", 
    "Düsseldorf", "Dortmund", "Essen", "Leipzig", "Hannover", "Nürnberg"
  ];

  return (
    <section id="bayilik" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#404e5e] mb-6">
            Almanya Sineklik Bayilik Fırsatı
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
            <strong>Üreticiden Doğrudan Bayilik</strong> ile Almanya sineklik pazarında başarılı bir iş kurun.
          </p>
          <p className="text-gray-600 max-w-5xl mx-auto text-base leading-relaxed">
            <em>Sineklik Almanya</em> olarak Türkiye'deki üretim hattımızdan Almanya pazarına doğrudan erişim sağlayan bayilik fırsatı sunuyoruz. Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf ve tüm Almanya şehirlerinde <strong>sineklik ustaları</strong>, <strong>sineklik satışı yapan işletmeler</strong> ve <strong>sineklik montajı yapan profesyoneller</strong> ile iş ortaklığı yapıyoruz. <strong>Plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong> ve <strong>zip perde</strong> sistemlerinde uzmanlaşmış üreticimiz olarak, bayilerimize rekabetçi fiyat avantajı, kapsamlı eğitim ve teknik destek sunuyoruz.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#404e5e] mb-8 text-center">Bayilik Avantajları</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border-l-4 border-[#83bd81] hover:shadow-xl transition-all">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#83bd81] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#404e5e] mb-2">{benefit.title}</h4>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-gradient-to-r from-[#83bd81]/10 to-[#404e5e]/10 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-[#404e5e] mb-8 text-center">Hedef Kitlemiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-[#404e5e] mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#83bd81]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {audience.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#404e5e] mb-8 text-center">Hizmet Bölgelerimiz</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {cities.map((city, index) => (
              <span key={index} className="px-6 py-3 bg-[#83bd81]/10 text-[#404e5e] rounded-full text-sm font-semibold hover:bg-[#83bd81]/20 transition-all">
                {city}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm max-w-4xl mx-auto">
            <strong>Almanya sineklik</strong> bayilik ağımız tüm Almanya şehirlerinde aktif olarak faaliyet göstermektedir. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf, Dortmund, Essen, Leipzig, Hannover, Nürnberg ve diğer tüm Almanya şehirlerinde <strong>sineklik ustaları</strong>, <strong>sineklik satış noktaları</strong> ve <strong>sineklik montaj ekipleri</strong> ile iş ortaklığı yapıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#404e5e] mb-6">Bayilik Başvuru Süreci</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#83bd81] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#404e5e] mb-2">Başvuru Formu Doldurun</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">WhatsApp üzerinden iletişime geçerek bayilik başvuru formunu doldurun. İş deneyiminiz, faaliyet bölgeniz ve hedeflerinizi paylaşın.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#83bd81] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#404e5e] mb-2">Değerlendirme Süreci</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Başvurunuz incelenir ve uygunluk durumunuz değerlendirilir. Bölgesel ihtiyaçlar ve kapasiteniz analiz edilir.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#83bd81] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#404e5e] mb-2">Sözleşme ve Eğitim</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Bayilik sözleşmesi imzalanır ve kapsamlı eğitim programına dahil olursunuz. Ürünler, montaj teknikleri ve satış stratejileri hakkında detaylı eğitim alırsınız.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#83bd81] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#404e5e] mb-2">Faaliyete Başlama</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Eğitiminizi tamamladıktan sonra kendi bölgenizde faaliyete başlarsınız. Sürekli teknik destek ve pazarlama desteği alırsınız.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#83bd81]/20 to-[#404e5e]/20 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-[#404e5e] mb-6">Hemen Başvurun</h3>
            <p className="text-gray-700 mb-8 text-base leading-relaxed">
              <strong>Almanya sineklik</strong> bayilik fırsatından yararlanmak için WhatsApp üzerinden bizimle iletişime geçin. Detaylı bilgi, başvuru formu ve özel teklif için hemen başvurun.
            </p>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya şehirlerindeki <strong>sineklik ustaları</strong>, <strong>sineklik satış noktaları</strong> ve <strong>sineklik montaj ekipleri</strong> ile iş ortaklığı arıyoruz. <strong>Plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong> ve <strong>zip perde</strong> sistemlerinde uzmanlaşmış üreticimiz olarak, bayilerimiz için yüksek kar marjı, kapsamlı eğitim ve teknik destek sunuyoruz.
            </p>
            <a 
              href="https://wa.me/905403363873?text=Bayilik%20Hakkında%20Detaylı%20Bilgi%20Almak%20İstiyorum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#83bd81] text-white font-bold rounded-full hover:bg-[#6faa6d] transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile Başvur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
