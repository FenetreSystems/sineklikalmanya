import Header from "./components/Header";
import Hero from "./components/Hero";
import GuvenBar from "./components/GuvenBar";
import UrunKategorileri from "./components/UrunKategorileri";
import NedenUreticiden from "./components/NedenUreticiden";
import OlcuyeOzelUretim from "./components/OlcuyeOzelUretim";
import KarsilastirmaTablosu from "./components/KarsilastirmaTablosu";
import KullanimAlanlari from "./components/KullanimAlanlari";
import MalzemeKalitesi from "./components/MalzemeKalitesi";
import RenkSecenekleri from "./components/RenkSecenekleri";
import ProjeTopluUretim from "./components/ProjeTopluUretim";
import BayilikAlani from "./components/BayilikAlani";
import Bolgeler from "./components/Bolgeler";
import MusteriYorumlari from "./components/MusteriYorumlari";
import FiyatFaktorleri from "./components/FiyatFaktorleri";
import SSS from "./components/SSS";
import Kurumsal from "./components/Kurumsal";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import WhatsAppFloat from "./components/WhatsAppFloat";
import SchemaJsonLd from "./components/SchemaJsonLd";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SchemaJsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <GuvenBar />
        <UrunKategorileri />
        <NedenUreticiden />
        <OlcuyeOzelUretim />
        <KarsilastirmaTablosu />
        <KullanimAlanlari />
        <MalzemeKalitesi />
        <RenkSecenekleri />
        <ProjeTopluUretim />
        <BayilikAlani />
        <Bolgeler />
        <MusteriYorumlari />
        <FiyatFaktorleri />
        <SSS />
        <Kurumsal />
        <FinalCTA />
      </main>
      <Footer />
      <MobileNav />
      <WhatsAppFloat />
    </div>
  );
}
