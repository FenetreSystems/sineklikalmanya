export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#83bd81]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Hemen Sipariş Verin
        </h2>
        <p className="text-xl text-white/90 mb-4 max-w-4xl mx-auto">
          <strong>WhatsApp</strong> üzerinden kolay sipariş. <em>Hızlı</em> teslimat, <u>kaliteli</u> ürünler, profesyonel hizmet.
        </p>
        <p className="text-white/80 mb-8 max-w-5xl mx-auto text-base leading-relaxed">
          <strong>Almanya sineklik</strong> ihtiyaçlarınız için hemen sipariş verin. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf ve tüm Almanya şehirlerine <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerinde 4-8 günde teslimat garantisi sunuyoruz. <strong>Sineklik ustaları</strong>, <strong>sineklik satış noktaları</strong> ve <strong>sineklik montajı yapan profesyoneller</strong> için özel bayilik fırsatları mevcuttur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href="https://wa.me/905403363873?text=Almanya%20Sineklik%20Siparişi%20Hakkında%20Detaylı%20Bilgi%20Almak%20İstiyorum" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-[#404e5e] font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            WhatsApp ile Sipariş
          </a>
          <a 
            href="tel:+905403363873"
            className="px-8 py-4 bg-[#404e5e] text-white font-bold rounded-full hover:bg-[#2d3a47] transition-all transform hover:scale-105 text-lg"
          >
            Hemen Ara
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">4-8</div>
            <p className="text-white/80 text-sm">Günde Teslimat</p>
            <p className="text-white/60 text-xs mt-1">Türkiye'den Almanya'ya</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">2 Yıl</div>
            <p className="text-white/80 text-sm">Garanti</p>
            <p className="text-white/60 text-xs mt-1">Tüm ürünlerde</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">7/24</div>
            <p className="text-white/80 text-sm">Destek</p>
            <p className="text-white/60 text-xs mt-1">WhatsApp ile ulaşın</p>
          </div>
        </div>
      </div>
    </section>
  );
}
