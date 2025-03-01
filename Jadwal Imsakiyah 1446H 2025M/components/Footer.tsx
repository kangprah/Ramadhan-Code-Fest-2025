'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container mt-12 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section">
            <h3 className="text-xl font-tajawal font-bold text-[#5c3d2e] mb-4">Tentang Jadwal Imsakiyah</h3>
            <p className="text-[#5c3d2e] mb-4">
              Aplikasi ini menyediakan jadwal imsakiyah yang akurat untuk seluruh wilayah di Indonesia 
              selama bulan Ramadhan 1446H/2025M.
            </p>
            <p className="text-[#5c3d2e]">
              Sumber data pada aplikasi ini adalah API EQuran.id dengan data resmi dari Bimas Islam Kemenag RI.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="text-xl font-tajawal font-bold text-[#5c3d2e] mb-4">Informasi Penting</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-[#b85c38]">•</span>
                <span className="text-[#5c3d2e]">Waktu yang ditampilkan adalah waktu setempat</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#b85c38]">•</span>
                <span className="text-[#5c3d2e]">Disarankan untuk berhenti makan 10 menit sebelum waktu imsak</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#b85c38]">•</span>
                <span className="text-[#5c3d2e]">Waktu berbuka puasa adalah waktu maghrib</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#b85c38]">•</span>
                <span className="text-[#5c3d2e]">Jadwal dapat berbeda beberapa menit tergantung lokasi spesifik</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="text-xl font-tajawal font-bold text-[#5c3d2e] mb-4">Doa Berbuka Puasa</h3>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e0a96d]">
              <p className="text-right mb-2 text-[#5c3d2e] font-tajawal text-lg">
                اَللّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ بِرَحْمَتِكَ يَا اَرْحَمَ الرَّحِمِيْنَ
              </p>
              <p className="text-[#5c3d2e] italic">
                &quot;Allahumma laka shumtu wa bika amantu wa &apos;ala rizqika afthartu. Birrahmatika yaa arhamar roohimin.&quot;
              </p>
              <p className="text-[#5c3d2e] text-sm mt-2">
                &quot;Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, dan dengan rezeki-Mu aku berbuka. Dengan rahmat-Mu, wahai Tuhan Yang Maha Pengasih dan Penyayang.&quot;
              </p>
              <p className="text-[#5c3d2e] text-xs mt-2 italic">
                Doa ini berdasarkan hadits yang diriwayatkan oleh HR. Bukhari
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-[#e0a96d] text-center">
          <p className="text-[#5c3d2e]">
            © {currentYear} Jadwal Imsakiyah 1446H/2025M. Dibuat dengan ❤️ untuk umat Muslim Indonesia.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <img 
              src="https://cdn.discordapp.com/attachments/1299418032136917075/1345443508881985546/lantern.png?ex=67c49169&is=67c33fe9&hm=26aad3a8c4904ea8e1ddaf9544251636facee4e8c9838b5a613ff756062f0b1a&" 
              alt="Lantern" 
              className="w-8 h-8 opacity-70"
            />
            <img 
              src="https://cdn.discordapp.com/attachments/1299418032136917075/1345442888644956271/dates.png?ex=67c490d5&is=67c33f55&hm=65103b3abc8eded28c45b760fd2406d1b3cc16b581c78cea1acb0d7ab1d62edc&" 
              alt="Dates" 
              className="w-8 h-8 opacity-70"
            />
            <img 
              src="https://cdn.discordapp.com/attachments/1299418032136917075/1345442388943831130/mosque.png?ex=67c4905e&is=67c33ede&hm=f62a613c32ab513a16833984bc6de435b26ca1482efbbb9beea7319d409f2001&" 
              alt="Mosque" 
              className="w-8 h-8 opacity-70"
            />
          </div>
          <div className="mt-4">
            <a href="https://github.com/kangprah/Jadwal-Imsakiyah" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                alt="GitHub" 
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}