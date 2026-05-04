export default function Bolgeler() {
  const regions = [
    {
      city: "Berlin",
      districts: ["Mitte", "Pankow", "Charlottenburg", "Spandau", "Steglitz", "Tempelhof"],
      description: "Başkent Berlin'in tüm ilçelerine sineklik gönderimi yapıyoruz. Mitte, Pankow, Charlottenburg dahil tüm bölgelere 4-8 günde teslimat."
    },
    {
      city: "Münih",
      districts: ["Altstadt", "Ludwigsvorstadt", "Maxvorstadt", "Schwabing", "Sendling", "Giesing"],
      description: "Bavyera'nın başkenti Münih'e hızlı ve güvenli gönderim. Altstadt, Schwabing dahil tüm ilçelere hizmet veriyoruz."
    },
    {
      city: "Hamburg",
      districts: ["Altona", "Eimsbüttel", "Nord", "Wandsbek", "Bergedorf", "Harburg"],
      description: "Hamburg liman şehrine tüm sineklik sistemleri gönderimi. Altona, Eimsbüttel dahil tüm bölgelere hızlı teslimat."
    },
    {
      city: "Köln",
      districts: ["Altstadt", "Ehrenfeld", "Nippes", "Sülz", "Kalk", "Mülheim"],
      description: "Köln katedral şehrine özel ölçü sineklik çözümleri. Altstadt, Ehrenfeld dahil tüm ilçelere profesyonel hizmet."
    },
    {
      city: "Frankfurt",
      districts: ["Altstadt", "Sachsenhausen", "Nordend", "Bornheim", "Bockenheim", "Gallus"],
      description: "Frankfurt finans merkezine profesyonel sineklik sistemleri. Altstadt, Sachsenhausen dahil tüm bölgelere gönderim."
    },
    {
      city: "Stuttgart",
      districts: ["Mitte", "Bad Cannstatt", "Feuerbach", "Vaihingen", "Zuffenhausen"],
      description: "Stuttgart otomotiv şehrine modern sineklik çözümleri. Mitte, Feuerbach dahil tüm ilçelere hızlı teslimat."
    },
    {
      city: "Düsseldorf",
      districts: ["Altstadt", "Pempelfort", "Oberkassel", "Flingern", "Gerresheim"],
      description: "Düsseldorf moda şehrine estetik sineklik sistemleri. Altstadt, Oberkassel dahil tüm bölgelere hizmet veriyoruz."
    },
    {
      city: "Dortmund",
      districts: ["Innenstadt", "Hörde", "Aplerbeck", "Brackel", "Scharnhorst"],
      description: "Dortmund sanayi şehrine dayanıklı sineklik sistemleri. Innenstadt, Hörde dahil tüm ilçelere gönderim yapıyoruz."
    },
    {
      city: "Essen",
      districts: ["Stadtmitte", "Rüttenscheid", "Borbeck", "Altenessen", "Kray"],
      description: "Essen kültür şehrine uygun fiyatlı sineklik çözümleri. Stadtmitte, Rüttenscheid dahil tüm bölgelere teslimat."
    },
    {
      city: "Leipzig",
      districts: ["Zentrum", "Südvorstadt", "Gohlis", "Plagwitz", "Connewitz"],
      description: "Leipzig ticaret şehrine hızlı gönderim sineklik sistemleri. Zentrum, Südvorstadt dahil tüm ilçelere hizmet."
    },
    {
      city: "Hannover",
      districts: ["Mitte", "Nordstadt", "Südstadt", "Vahrenwald", "List"],
      description: "Hannover fuar şehrine profesyonel sineklik çözümleri. Mitte, Nordstadt dahil tüm bölgelere hızlı teslimat."
    },
    {
      city: "Nürnberg",
      districts: ["Altstadt", "Gostenhof", "St. Johannis", "Südstadt", "Nordstadt"],
      description: "Nürnberg tarihi şehrine özel ölçü sineklik sistemleri. Altstadt, Gostenhof dahil tüm ilçelere gönderim yapıyoruz."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-6">
            Almanya Hizmet Bölgeleri
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
            <strong>Almanya'nın her şehrine</strong> <em>sineklik</em> gönderimi yapıyoruz. <u>4-8 günde</u> kapınıza ulaştırıyoruz.
          </p>
          <p className="text-gray-600 max-w-5xl mx-auto text-base leading-relaxed">
            <strong>Almanya sineklik</strong> hizmeti olarak Berlin, Münih, Hamburg, Köln, Frankfurt, Stuttgart, Düsseldorf, Dortmund, Essen, Leipzig, Hannover, Nürnberg ve tüm Almanya şehirlerine <strong>sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemleri gönderiyoruz. <em>Sineklik Almanya</em> olarak her şehrin ilçelerine detaylı hizmet sunuyoruz. <strong>Sineklik ustaları</strong>, <strong>sineklik satış noktaları</strong> ve <strong>sineklik montajı yapan profesyoneller</strong> için özel bayilik fırsatları mevcuttur.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regions.map((region, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 border-t-4 border-[#83bd81]">
              <h3 className="text-xl font-bold text-[#404e5e] mb-3">{region.city}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{region.description}</p>
              <div className="flex flex-wrap gap-2">
                {region.districts.map((district, i) => (
                  <span key={i} className="text-xs bg-[#83bd81]/10 text-[#404e5e] px-3 py-1 rounded-full font-medium">
                    {district}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h3 className="text-2xl font-bold text-[#404e5e] mb-8 text-center">Diğer Almanya Şehirleri ve Hizmet Ağı</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Geniş Hizmet Ağı</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                <strong>Almanya sineklik</strong> hizmetimiz ile Bremerhaven, Bremen, Dresden, Duisburg, Erfurt, Freiburg, Gelsenkirchen, Halle, Kassel, Kiel, Lübeck, Magdeburg, Mannheim, Oldenburg, Potsdam, Rostock, Saarbrücken, Wiesbaden, Wuppertal ve diğer tüm Almanya şehirlerine gönderim yapıyoruz. <em>Sineklik Almanya</em> olarak tüm şehirlerde <u>sineklik</u>, <strong>plise sineklik</strong>, <strong>plise perde</strong>, <strong>jaluzi perde</strong>, <strong>honeycomb perde</strong>, <strong>zip perde</strong> sistemleri için 4-8 günde teslimat garantisi veriyoruz.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Profesyonel Hizmet</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Her şehirde <strong>sineklik ustaları</strong>, <strong>sineklik satış noktaları</strong> ve <strong>sineklik montajı yapan profesyoneller</strong> ile iş birliği yapıyoruz. Bayilik ağımızı genişletmek için yeni iş ortakları arıyoruz.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Hızlı Teslimat</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Türkiye'den Almanya'ya güvenli kargo ile 4-8 günde teslimat garantisi sunuyoruz. Demonte paketlenmiş ürünleriniz güvenli şekilde kapınıza ulaştırılır.
              </p>
              <h4 className="font-semibold text-[#404e5e] mb-4 text-lg">Teknik Destek</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                WhatsApp üzerinden 7/24 teknik destek sağlıyoruz. Ölçü alma, kurulum ve ürün seçimi konusunda danışmanlık hizmeti sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
