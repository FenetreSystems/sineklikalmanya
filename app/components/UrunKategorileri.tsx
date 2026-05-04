export default function UrunKategorileri() {
  const products = [
    {
      name: "Sineklik",
      altTypes: ["Sabit Sineklik", "Yan Kaydırmalı", "Kepenk Sineklik", "Pencere Sinekliği", "Kapı Sinekliği"],
      description: "Yüksek kaliteli fiberglas tül ve alüminyum çerçeve ile üretilen sineklik sistemlerimiz, Almanya standartlarına uygun dayanıklılık ve uzun ömür sunar. Pencere ve kapılar için tam uyum garantisi sağlar.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: "Plise Sineklik",
      altTypes: ["Tavan Montajlı", "Duvar Montajlı", "Köşe Montajlı", "Katlanır Sistem"],
      description: "Katlanır mekanizması sayesinde alan tasarrufu sağlayan plise sineklik sistemlerimiz, estetik görünümü ile fonksiyonelliği birleştirir. Tavan, duvar ve köşe montaj seçenekleri mevcuttur.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    },
    {
      name: "Plise Perde",
      altTypes: ["Sıfır Boşluk", "Tek Kumaş", "Çift Kumaş", "Yalıtımlı"],
      description: "Sıfır boşluk teknolojisi ile tam yalıtım sağlayan plise perde sistemlerimiz, enerji verimliliği artırır. Tek, çift kumaş ve yalıtımlı seçenekleri ile ısı ve ses yalıtımı sunar.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Jaluzi Perde",
      altTypes: ["16mm Jaluzi", "25mm Jaluzi", "50mm Jaluzi", "Ahşap Jaluzi"],
      description: "Profesyonel görünümü ile iş yerleri ve modern evler için ideal jaluzi perde sistemlerimiz, ışık kontrolü sağlar. 16mm, 25mm, 50mm ve ahşap jaluzi seçenekleri mevcuttur.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    {
      name: "Honeycomb Perde",
      altTypes: ["Tek Hücre", "Çift Hücre", "Triple Hücre", "Motorlu"],
      description: "Arı peteği yapısı ile üstün yalıtım performansı sunan honeycomb perde sistemlerimiz, enerji tasarrufu sağlar. Tek, çift ve triple hücre seçenekleri ile maksimum yalıtım sunar.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      )
    },
    {
      name: "Zip Perde",
      altTypes: ["Mekanik Zip", "Motorlu Zip", "Tavan Zip", "Köşe Zip"],
      description: "Zip mekanizması ile rüzgar geçirmez kumaş yapısı sunan zip perde sistemlerimiz, geniş açıklıklar için idealdir. Mekanik ve motorlu seçenekleri ile kolay kullanım sağlar.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="urunler" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-6">
            Ürün Kategorilerimiz
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
            Her pencere için <strong>özel ölçüde premium çözümler</strong>. Almanya&apos;nın her şehrine <em>kaliteli</em>, <u>dayanıklı</u> ve uzun ömürlü ürünler gönderiyoruz.
          </p>
          <p className="text-gray-600 max-w-5xl mx-auto text-base leading-relaxed">
            <strong>Almanya sineklik</strong> ihtiyaçlarınız için geniş ürün yelpazemiz ile hizmetinizdeyiz. <em>Sineklik Almanya</em> olarak 10 yılı aşkın üretim deneyimimiz ile <strong>sineklik</strong>, <strong>plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerini en uygun fiyatlarla sunuyoruz. Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf, Dortmund, Essen, Leipzig, Hannover, Nürnberg ve tüm Almanya şehirlerine gönderim yapıyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100">
              <div className="text-[#83bd81] mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-[#404e5e] mb-3">{product.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.altTypes.map((type, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-[#83bd81] rounded-full mr-2"></span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h3 className="text-2xl font-bold text-[#404e5e] mb-8 text-center">Ürün Detayları ve Premium Özellikler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Sineklik Sistemleri</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                <strong>Almanya sineklik</strong> pazarında en çok tercih edilen ürünlerimiz arasında sabit sineklik, yan kaydırmalı sineklik, kepenk sinekliği, pencere sinekliği ve kapı sinekliği yer alıyor. Tüm <em>sineklik</em> modellerimiz yüksek kaliteli fiberglas tül ve alüminyum çerçeve ile üretiliyor. UV ışınlarına dayanıklı, hava geçirgen ve uzun ömürlü malzemeler kullanıyoruz. <strong>Sineklik ustaları</strong> ve <strong>sineklik montajı yapan profesyoneller</strong> için kolay kurulum sağlayan demonte paketleme yapıyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Plise Sistemler</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Plise sineklik</strong> ve <strong>plise perde</strong> sistemlerimiz tavan montajlı, duvar montajlı, köşe montajlı ve katlanır sistem seçenekleriyle sunuluyor. <em>Sineklik Almanya</em> olarak sıfır boşluk, tek kumaş, çift kumaş ve yalıtımlı modellerimizle enerji verimliliği sağlıyoruz. Isı yalıtımı özelliği ile kışın ısı kaybını, yazın serinleme maliyetlerini azaltıyoruz.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Perde Sistemleri</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                <strong>Jaluzi perde</strong>, <strong>honeycomb perde</strong> ve <strong>zip perde</strong> sistemlerimiz modern ve fonksiyonel çözümler sunuyor. 16mm, 25mm, 50mm jaluzi seçenekleri, tek hücre, çift hücre, triple hücre honeycomb modelleri ve mekanik veya motorlu zip perde seçenekleri mevcuttur. <strong>Sineklik satışı yapan işletmeler</strong> için toptan fiyat avantajları sunuyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Ölçüye Özel Üretim ve Garanti</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tüm <u>sineklik</u> ve perde sistemleri Almanya&apos;nın her şehrine gönderilmek üzere milimetre hassasiyetinde ölçüye özel olarak üretiliyor. Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf, Dortmund, Essen, Leipzig, Hannover, Nürnberg dahil tüm şehirlere 4-8 günde teslimat garantisi veriyoruz. 2 yıl garanti ve müşteri memnuniyeti önceliğimizdir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
