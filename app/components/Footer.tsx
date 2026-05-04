export default function Footer() {
  return (
    <footer className="bg-[#404e5e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Sineklik Almanya</h3>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Türkiye&apos;den Almanya&apos;ya kaliteli sineklik ve perde sistemleri. 10 yılı aşkın deneyim ile ölçüye özel üretim, hızlı teslimat.
            </p>
            <p className="text-white/70 text-xs leading-relaxed">
              <strong>Almanya sineklik</strong> sistemlerinde uzmanlaşmış üretici olarak <em>Sineklik Almanya</em> markasıyla Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf ve tüm Almanya şehirlerine <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemleri gönderiyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center">
                <span className="text-[#83bd81] mr-2">📞</span>
                Telefon: +90 540 336 3873
              </li>
              <li className="flex items-center">
                <span className="text-[#83bd81] mr-2">💬</span>
                WhatsApp: +90 540 336 3873
              </li>
              <li className="flex items-center">
                <span className="text-[#83bd81] mr-2">📍</span>
                Berlin, Almanya
              </li>
            </ul>
            <p className="text-white/70 text-xs mt-4 leading-relaxed">
              WhatsApp üzerinden 7/24 ulaşabilirsiniz. <u>Sineklik</u> siparişleriniz için kolay iletişim imkanı sunuyoruz. <strong>Sineklik ustaları</strong> ve <strong>sineklik montaj ekipleri</strong> için özel destek sağlıyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#urunler" className="text-white/80 hover:text-white transition-colors">Ürünler</a>
              </li>
              <li>
                <a href="#bayilik" className="text-white/80 hover:text-white transition-colors">Bayilik Fırsatı</a>
              </li>
              <li>
                <a href="#bolgeler" className="text-white/80 hover:text-white transition-colors">Hizmet Bölgeleri</a>
              </li>
              <li>
                <a href="#kurumsal" className="text-white/80 hover:text-white transition-colors">Hakkımızda</a>
              </li>
            </ul>
            <p className="text-white/70 text-xs mt-4 leading-relaxed">
              <strong>Plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> modellerimizi inceleyebilirsiniz.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kategoriler</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#urunler" className="text-white/80 hover:text-white transition-colors">Almanya Sineklik</a>
              </li>
              <li>
                <a href="#urunler" className="text-white/80 hover:text-white transition-colors">Sineklik Modelleri</a>
              </li>
              <li>
                <a href="#urunler" className="text-white/80 hover:text-white transition-colors">Plise Perde Sistemleri</a>
              </li>
              <li>
                <a href="#urunler" className="text-white/80 hover:text-white transition-colors">Jaluzi ve Honeycomb</a>
              </li>
            </ul>
            <p className="text-white/70 text-xs mt-4 leading-relaxed">
              <strong>Sineklik satışı yapan işletmeler</strong> için toptan fiyat avantajları mevcuttur.
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p className="mb-2">© 2026 Sineklik Almanya. Tüm hakları saklıdır.</p>
          <p><strong>Almanya sineklik</strong> ve <em>Sineklik Almanya</em> markası ile kaliteli hizmet.</p>
        </div>
      </div>
    </footer>
  );
}
