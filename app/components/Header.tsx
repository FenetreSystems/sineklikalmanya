"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`text-2xl font-bold ${
              isScrolled ? "text-[#404e5e]" : "text-white"
            }`}
          >
            Sineklik Almanya
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#urunler"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-[#404e5e] hover:text-[#83bd81]" : "text-white/90 hover:text-white"
              }`}
            >
              Ürünler
            </a>
            <a
              href="#bayilik"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-[#404e5e] hover:text-[#83bd81]" : "text-white/90 hover:text-white"
              }`}
            >
              Bayilik
            </a>
            <a
              href="#bolgeler"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-[#404e5e] hover:text-[#83bd81]" : "text-white/90 hover:text-white"
              }`}
            >
              Bölgeler
            </a>
            <a
              href="#kurumsal"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-[#404e5e] hover:text-[#83bd81]" : "text-white/90 hover:text-white"
              }`}
            >
              Hakkımızda
            </a>
            <a
              href="https://wa.me/905403363873?text=Almanya%20Sineklik%20Siparişi%20Hakkında%20Bilgi%20Almak%20İstiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#83bd81] text-white text-sm font-bold rounded-full hover:bg-[#6faa6d] transition-all"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
