export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#83bd81] to-[#404e5e] min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <svg className="w-20 h-20 md:w-24 md:h-24 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block">Almanya Sineklik</span>
          <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 font-medium text-green-100">
            Üreticiden Kapınıza Gelsin
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-5xl mx-auto leading-relaxed font-medium">
          <strong className="text-white">Almanya sineklik</strong> ihtiyaçlarınız için Türkiye&apos;den direkt üreticiden en kaliteli ve en uygun fiyatlı çözümler sunuyoruz. <strong className="text-white">Sineklik Almanya</strong> olarak yılların deneyimine sahip üretim hattımızdan <em>plise sineklik</em>, <em>plise perde</em>, <em>jaluzi perde</em>, <em>honeycomb perde</em> ve <em>zip perde</em> sistemlerini <u>4-8 günde</u> kapınıza ulaştırıyoruz. Demonte paketlenmiş, milimetre hassasiyetinde ölçüye özel üretim ile tam uyum garantisi ve uzun ömürlü kullanım sağlıyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href="https://wa.me/905403363873?text=Almanya%20Sineklik%20Siparişi%20Hakkında%20Detaylı%20Bilgi%20Almak%20İstiyorum" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#83bd81] text-white font-bold rounded-full hover:bg-[#6faa6d] transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp ile Sipariş
          </a>
          <a 
            href="#urunler" 
            className="inline-flex items-center px-8 py-4 bg-[#404e5e] text-white font-bold rounded-full hover:bg-[#2d3a47] transition-all transform hover:scale-105 text-lg"
          >
            Ürünleri İncele
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-12">
          <a href="#urunler" className="text-white/90 hover:text-white transition-colors font-medium">Almanya Sineklik</a>
          <span className="text-white/50">•</span>
          <a href="#urunler" className="text-white/90 hover:text-white transition-colors font-medium">Sineklik Modelleri</a>
          <span className="text-white/50">•</span>
          <a href="#bayilik" className="text-white/90 hover:text-white transition-colors font-medium">Bayilik Fırsatı</a>
          <span className="text-white/50">•</span>
          <a href="#bolgeler" className="text-white/90 hover:text-white transition-colors font-medium">Hizmet Bölgeleri</a>
          <span className="text-white/50">•</span>
          <a href="#olcuye-ozel" className="text-white/90 hover:text-white transition-colors font-medium">Ölçüye Özel Üretim</a>
          <span className="text-white/50">•</span>
          <a href="#kullanim-alanlari" className="text-white/90 hover:text-white transition-colors font-medium">Kullanım Alanları</a>
          <span className="text-white/50">•</span>
          <a href="#malzeme-kalitesi" className="text-white/90 hover:text-white transition-colors font-medium">Malzeme Kalitesi</a>
          <span className="text-white/50">•</span>
          <a href="#fiyat-faktorleri" className="text-white/90 hover:text-white transition-colors font-medium">Fiyat Faktörleri</a>
          <span className="text-white/50">•</span>
          <a href="#karsilastirma-tablosu" className="text-white/90 hover:text-white transition-colors font-medium">Karşılaştırma Tablosu</a>
          <span className="text-white/50">•</span>
          <a href="#renk-secenekleri" className="text-white/90 hover:text-white transition-colors font-medium">Renk Seçenekleri</a>
          <span className="text-white/50">•</span>
          <a href="#musteri-yorumlari" className="text-white/90 hover:text-white transition-colors font-medium">Müşteri Yorumları</a>
          <span className="text-white/50">•</span>
          <a href="#proje-toplu-uretim" className="text-white/90 hover:text-white transition-colors font-medium">Proje Toplu Üretim</a>
          <span className="text-white/50">•</span>
          <a href="#sss" className="text-white/90 hover:text-white transition-colors font-medium">SSS</a>
          <span className="text-white/50">•</span>
          <a href="#kurumsal" className="text-white/90 hover:text-white transition-colors font-medium">Hakkımızda</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-5xl font-bold mb-2">4-8</div>
            <div className="text-base md:text-lg font-medium">Günde Hızlı Teslimat</div>
            <p className="text-white/70 text-sm mt-2">Türkiye'den Almanya'ya güvenli kargo</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-5xl font-bold mb-2">%100</div>
            <div className="text-base md:text-lg font-medium">Ölçüye Özel Üretim</div>
            <p className="text-white/70 text-sm mt-2">Milimetre hassasiyetinde tam uyum</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <div className="text-5xl font-bold mb-2">Üretici</div>
            <div className="text-base md:text-lg font-medium">Doğrudan Fiyat Avantajı</div>
            <p className="text-white/70 text-sm mt-2">Aracı olmadan en uygun fiyat</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
            <strong>Almanya sineklik</strong> piyasasında 10 yılı aşkın deneyimimiz ile en kaliteli ve en uygun fiyatlı çözümler sunuyoruz. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf, Dortmund, Essen, Leipzig, Hannover, Nürnberg ve tüm Almanya şehirlerine <u>sineklik</u> gönderimi yapıyoruz. Pencere sinekliği, kapı sinekliği, plise sineklik, plise perde, jaluzi perde, honeycomb perde, zip perde gibi birçok ürün çeşidimiz mevcuttur.
          </p>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            Ürünlerimiz Almanya standartlarına uygun olarak üretilmekte olup, yüksek dayanıklılık, uzun ömür ve estetik görünüm garantisi sunmaktadır. <strong>Sineklik ustaları</strong>, <strong>sineklik satış noktaları</strong> ve <strong>sineklik montajı yapan profesyoneller</strong> için özel bayilik fırsatlarımız mevcuttur.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
