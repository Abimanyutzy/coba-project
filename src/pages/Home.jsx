import React from "react";

export default function Home() {
  const scrollToContent = () => {
    // Scroll ke bagian bawah halaman
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="h-full">
      {/* Main Hero Section - Full Screen */}
      <div className="h-screen flex items-center justify-center relative">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Hero Content - This will be handled by Layout component */}
        <div className="relative z-10">
          {/* Content is now handled by the DISCOVER HERE button in Layout */}
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-[rgba(0,0,0,0.8)] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4A574] mb-4">
              Mengapa Memilih Kami?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4A574] to-[#B8935A] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Dengan pengalaman bertahun-tahun di industri pallet kayu, kami berkomitmen 
              memberikan produk berkualitas tinggi untuk mendukung kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#D4A574] to-[#B8935A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#D4A574]">Kualitas Terjamin</h3>
              <p className="text-gray-300 leading-relaxed">
                Menggunakan kayu pilihan dengan standar kualitas internasional dan 
                proses produksi yang terkontrol ketat untuk hasil optimal.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#D4A574] to-[#B8935A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#D4A574]">Pengalaman Profesional</h3>
              <p className="text-gray-300 leading-relaxed">
                Tim ahli dengan pengalaman puluhan tahun di industri pallet, 
                siap memberikan solusi terbaik untuk kebutuhan spesifik Anda.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#D4A574] to-[#B8935A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#D4A574]">Harga Kompetitif</h3>
              <p className="text-gray-300 leading-relaxed">
                Solusi pallet berkualitas tinggi dengan harga yang bersaing, 
                memberikan nilai terbaik untuk investasi bisnis Anda.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#D4A574] to-[#B8935A] p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Siap Untuk Berkolaborasi?
              </h3>
              <p className="text-amber-100 mb-6 text-lg">
                Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
              </p>
              <button className="bg-white text-[#8B6F47] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}