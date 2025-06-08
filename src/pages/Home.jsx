import { useState } from "react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section - Full Screen */}
      <div className="h-screen flex items-center justify-center relative">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Hero Content - Discover Button */}
        <div className="relative z-10">
          <button 
            className="bg-transparent border-b-2 border-white text-white hover:border-[#D4A574] hover:text-[#D4A574] transition-all duration-300 pb-2 text-sm font-medium tracking-wider"
            onClick={() => {
              // Scroll to content section
              const element = document.getElementById('content-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            DISCOVER HERE
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div id="content-section" className="bg-[rgba(0,0,0,0.8)] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
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

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          {/* Services Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#D4A574] mb-4">Layanan Kami</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4A574] to-[#B8935A] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Pallet Standar",
                  desc: "Pallet dengan ukuran dan spesifikasi standar industri",
                  icon: "📦"
                },
                {
                  title: "Pallet Custom",
                  desc: "Desain pallet sesuai kebutuhan spesifik perusahaan Anda",
                  icon: "🔧"
                },
                {
                  title: "Pallet Ekspor",
                  desc: "Pallet dengan sertifikat ISPM-15 untuk kebutuhan ekspor",
                  icon: "🌍"
                },
                {
                  title: "Konsultasi",
                  desc: "Konsultasi gratis untuk solusi pallet terbaik",
                  icon: "💡"
                }
              ].map((service, index) => (
                <div key={index} className="bg-[rgba(0,0,0,0.3)] p-6 rounded-lg hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300 border border-[rgba(212,165,116,0.2)] hover:border-[#D4A574]">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h4 className="text-lg font-semibold text-[#D4A574] mb-3 text-center">{service.title}</h4>
                  <p className="text-gray-300 text-sm text-center">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "15+", label: "Tahun Pengalaman", icon: "📅" },
                { number: "500+", label: "Klien Puas", icon: "👥" },
                { number: "1000+", label: "Proyek Selesai", icon: "✅" },
                { number: "99%", label: "Tingkat Kepuasan", icon: "⭐" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-[rgba(0,0,0,0.3)] p-6 rounded-lg">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-[#D4A574] mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#D4A574] mb-4">Testimoni Klien</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4A574] to-[#B8935A] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "PT. Logistik Nusantara",
                  text: "Rekayasa Mas memberikan solusi pallet terbaik untuk kebutuhan warehouse kami. Kualitas produk sangat memuaskan dan pengiriman selalu tepat waktu.",
                  role: "Warehouse Manager"
                },
                {
                  name: "CV. Ekspor Jaya",
                  text: "Pallet ekspor dengan sertifikat ISPM-15 dari Rekayasa Mas membantu kelancaran ekspor produk kami ke berbagai negara. Highly recommended!",
                  role: "Export Manager"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-[rgba(0,0,0,0.3)] p-6 rounded-lg border-l-4 border-[#D4A574]">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-[#D4A574] font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#D4A574] to-[#B8935A] p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Siap Untuk Berkolaborasi?
              </h3>
              <p className="text-amber-100 mb-6 text-lg">
                Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#8B6F47] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Konsultasi Sekarang
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#8B6F47] transition-all duration-200">
                  Lihat Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}