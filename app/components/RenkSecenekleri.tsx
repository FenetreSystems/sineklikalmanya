export default function RenkSecenekleri() {
  const colors = [
    { name: "Beyaz", hex: "#FFFFFF" },
    { name: "Krem", hex: "#F5F5DC" },
    { name: "Gri", hex: "#808080" },
    { name: "Kahverengi", hex: "#8B4513" },
    { name: "Siyah", hex: "#000000" },
    { name: "Antrasit", hex: "#36454F" }
  ];

  return (
    <section id="renk-secenekleri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Renk Seçenekleri
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          <strong>Her dekorasyon</strong> için <em>uygun</em> renkler. <u>İsteğe özel</u> renk üretimi de yapılır.
        </p>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-sm leading-relaxed">
          <strong>Almanya sineklik</strong> sistemlerinde geniş renk yelpazesi sunuyoruz. <em>Sineklik Almanya</em> olarak beyaz, krem, gri, kahverengi, siyah ve antrasit renklerde <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemleri üretiyoruz. Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya şehirlerine gönderim yapıyoruz.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {colors.map((color, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-full h-24 rounded-lg shadow-md mb-2 border border-gray-200"
                style={{ backgroundColor: color.hex }}
              ></div>
              <p className="text-sm font-semibold text-[#404e5e]">{color.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-[#404e5e] mb-4">Renk ve Dekorasyon Uyumu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Standart Renkler</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Almanya sineklik</strong> sistemlerinde beyaz, krem, gri, kahverengi, siyah ve antrasit gibi standart renk seçenekleri sunuyoruz. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg gibi şehirlerdeki evleriniz için dekorasyonunuza uygun <u>sineklik</u> renkleri sunuyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Özel Renk Üretimi</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                İsteğe özel renk üretimi yapıyoruz. <strong>Plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerinde RAL kodlarına göre özel renk üretimi mümkündür.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Modern Çözümler</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Modern evler için antrasit ve gri tonları idealdir. Köln, Frankfurt, Stuttgart, Düsseldorf gibi şehirlerdeki modern mimarilerde sıklıkla tercih edilir.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Klasik Çözümler</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Klasik evler için beyaz ve krem tonları uygundur. Dortmund, Essen, Leipzig, Hannover, Nürnberg dahil tüm Almanya şehirlerine gönderim yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
