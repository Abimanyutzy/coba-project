import React from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const scrollToContent = () => {
    // Scroll ke bagian bawah halaman
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Hero Section */}
      <div className="flex items-center justify-center h-full relative">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Welcome to <span className="text-amber-400">REKAYASA MAS</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Spesialis pallet kayu berkualitas tinggi untuk kebutuhan industri Anda
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={scrollToContent}
            className="group text-white text-sm font-semibold border-b-2 border-white hover:border-amber-400 hover:text-amber-400 transition-all duration-300 pb-1 inline-flex items-center space-x-2"
          >
            <span>DISCOVER HERE</span>
            <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-[rgba(0,0,0,0.7)] text-white p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-400">Kualitas Terjamin</h3>
              <p className="text-gray-300">
                Kami menggunakan kayu pilihan dengan standar kualitas internasional
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-400">Pengalaman Berpuluh Tahun</h3>
              <p className="text-gray-300">
                Tim profesional dengan pengalaman bertahun-tahun di industri pallet
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-400">Harga Kompetitif</h3>
              <p className="text-gray-300">
                Solusi pallet berkualitas dengan harga yang bersaing di pasaran
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}