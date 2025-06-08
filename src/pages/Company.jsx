import React from "react";
// import { Award, Users, Calendar, Target } from "lucide-react";

export default function Company() {
  return (
    <div className="text-white p-6 md:p-10 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
          Tentang Perusahaan
        </h2>
        <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-1 w-24 mb-6"></div>
        
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl text-gray-200">
          REKAYASA MAS adalah perusahaan yang bergerak di bidang spesialisasi wood pallet 
          dengan komitmen untuk memberikan produk berkualitas tinggi kepada berbagai industri. 
          Kami telah melayani kebutuhan pallet kayu untuk logistik, warehouse, dan distribusi 
          dengan standar internasional.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { icon: Calendar, number: "15+", label: "Tahun Pengalaman" },
          { icon: Users, number: "500+", label: "Klien Puas" },
          { icon: Award, number: "1000+", label: "Proyek Selesai" },
          { icon: Target, number: "99%", label: "Tingkat Kepuasan" }
        ].map(({ icon: Icon, number, label }, index) => (
          <div key={index} className="text-center bg-[rgba(0,0,0,0.3)] p-6 rounded-lg">
            <Icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{number}</div>
            <div className="text-sm text-gray-300">{label}</div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Visi Misi */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Visi & Misi</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-white">Visi</h4>
            <p className="text-gray-300 leading-relaxed">
              Menjadi perusahaan pallet kayu terdepan di Indonesia yang dikenal 
              karena kualitas, inovasi, dan layanan pelanggan yang unggul.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-3 text-white">Misi</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                Menyediakan pallet kayu berkualitas tinggi dengan harga kompetitif
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                Memberikan layanan pelanggan yang responsif dan profesional
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                Menggunakan bahan baku ramah lingkungan dan berkelanjutan
              </li>
            </ul>
          </div>
        </div>

        {/* Keunggulan */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Keunggulan Kami</h3>
          
          <div className="space-y-4">
            {[
              {
                title: "Material Berkualitas",
                desc: "Menggunakan kayu pilihan yang telah melalui proses pengeringan optimal"
              },
              {
                title: "Standar Internasional",
                desc: "Produk sesuai dengan standar ISPM-15 untuk ekspor internasional"
              },
              {
                title: "Customisasi",
                desc: "Dapat memproduksi pallet sesuai dengan spesifikasi dan kebutuhan klien"
              },
              {
                title: "Pengiriman Tepat Waktu",
                desc: "Sistem logistik yang efisien untuk memastikan pengiriman sesuai jadwal"
              }
            ].map(({ title, desc }, index) => (
              <div key={index} className="bg-[rgba(0,0,0,0.3)] p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center bg-gradient-to-r from-amber-600 to-amber-500 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">
          Siap Berkolaborasi dengan Kami?
        </h3>
        <p className="text-amber-100 mb-6">
          Hubungi tim kami untuk konsultasi dan penawaran terbaik
        </p>
        <button className="bg-white text-amber-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
          Hubungi Sekarang
        </button>
      </div>
    </div>
  );
}