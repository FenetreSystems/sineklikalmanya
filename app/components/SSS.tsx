export default function SSS() {
  const faqs = [
    {
      question: "Teslimat süresi ne kadar?",
      answer: "Siparişten sonra 4-8 günde kapınıza ulaştırılır."
    },
    {
      question: "Ölçü nasıl alınır?",
      answer: "WhatsApp üzerinden destek alabilirsiniz. Videolu anlatım göndeririz."
    },
    {
      question: "Kurulum kolay mı?",
      answer: "Evet, demonte paketlenir. Basit montaj talimatı eklenir."
    },
    {
      question: "Garanti var mı?",
      answer: "Tüm ürünlerimiz 2 yıl garantilidir."
    },
    {
      question: "İade mümkün mü?",
      answer: "Üretim hatası varsa iade kabul edilir."
    },
    {
      question: "Ödeme nasıl yapılır?",
      answer: "WhatsApp üzerinden havale/EFT veya kredi kartı ile ödeme."
    }
  ];

  return (
    <section id="sss" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Sıkça Sorulan Sorular
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          <strong>Merak edilen</strong> soruları yanıtlıyoruz. <em>Daha fazla</em> bilgi için <u>WhatsApp</u>'tan iletişime geçin.
        </p>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-sm leading-relaxed">
          <strong>Almanya sineklik</strong> hakkında sıkça sorulan soruları yanıtlıyoruz. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg, Köln, Frankfurt ve tüm Almanya şehirlerindeki müşterilerimize <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerinde detaylı bilgi sunuyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-[#404e5e] mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-r from-[#83bd81]/10 to-[#404e5e]/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-[#404e5e] mb-4">Daha Fazla Bilgi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Teslimat ve Kurulum</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Almanya sineklik</strong> teslimat süresi 4-8 gündür. <em>Sineklik Almanya</em> olarak Berlin, Münih, Hamburg gibi şehirlerdeki müşterilerimize demonte paketlenmiş ürün gönderiyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Ölçü Alma Desteği</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                WhatsApp üzerinden videolu ölçü alma desteği sunuyoruz. <u>Sineklik</u>, <strong>plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemlerinde doğru ölçü alma rehberi sağlıyoruz.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-3">Garanti ve İade</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Tüm ürünlerimiz 2 yıl garantilidir. Köln, Frankfurt, Stuttgart, Düsseldorf gibi şehirlerdeki müşterilerimize garanti ve iade desteği sunuyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-3">Ödeme Seçenekleri</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                WhatsApp üzerinden havale/EFT veya kredi kartı ile ödeme kabul ediyoruz. Dortmund, Essen, Leipzig, Hannover, Nürnberg dahil tüm Almanya şehirlerine gönderim yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
