export default function MusteriYorumlari() {
  const reviews = [
    {
      name: "Ahmet Yılmaz",
      city: "Berlin",
      text: "Harika ürün, hızlı teslimat. Çok memnun kaldım.",
      rating: 5
    },
    {
      name: "Fatma Demir",
      city: "Münih",
      text: "Ölçü tam uydu. Kurulum çok kolaydı. Teşekkürler.",
      rating: 5
    },
    {
      name: "Mehmet Kaya",
      city: "Hamburg",
      text: "Fiyat çok uygun. Kalite beklediğimden iyi.",
      rating: 5
    },
    {
      name: "Ayşe Şahin",
      city: "Köln",
      text: "WhatsApp üzerinden kolay sipariş. Güvenilir.",
      rating: 5
    }
  ];

  const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  return (
    <section id="musteri-yorumlari" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Müşteri Yorumları
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          <strong>Müşterilerimiz</strong> bizden memnun. <em>Gerçek</em> yorumlar, <u>gerçek</u> memnuniyet.
        </p>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-sm leading-relaxed">
          <strong>Almanya sineklik</strong> müşterilerimizden olumlu geri bildirimler alıyoruz. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya şehirlerindeki müşterilerimize <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerinde memnuniyet garantisi sunuyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm">"{review.text}"</p>
              <div>
                <p className="font-semibold text-[#404e5e] text-sm">{review.name}</p>
                <p className="text-gray-500 text-xs">{review.city}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-r from-[#83bd81]/10 to-[#404e5e]/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-[#404e5e] mb-4">Müşteri Memnuniyeti</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Hızlı Teslimat</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Almanya sineklik</strong> müşterilerimiz 4-8 günde ürünlerine kavuşuyor. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg gibi şehirlerdeki müşterilerimize hızlı teslimat sağlıyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Kalite Garantisi</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tüm <u>sineklik</u> ve perde sistemlerinde kalite garantisi sunuyoruz. <strong>Plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> modellerimizde müşteri memnuniyeti önceliğimizdir.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Kolay İletişim</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                WhatsApp üzerinden kolay sipariş ve destek sunuyoruz. Köln, Frankfurt, Stuttgart, Düsseldorf gibi şehirlerdeki müşterilerimiz 7/24 ulaşabilir.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Uygun Fiyat</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Üreticiden doğrudan satış ile uygun fiyatlar sunuyoruz. Dortmund, Essen, Leipzig, Hannover, Nürnberg dahil tüm Almanya şehirlerine gönderim yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
