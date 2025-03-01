'use client';

interface ImsakiyahItem {
  tanggal: number;
  imsak: string;
  subuh: string;
  terbit: string;
  dhuha: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
}

interface ImsakiyahData {
  provinsi: string;
  kabkota: string;
  hijriah: string;
  masehi: string;
  imsakiyah: ImsakiyahItem[];
}

interface ScheduleTableProps {
  data: ImsakiyahData;
}

export default function ScheduleTable({ data }: ScheduleTableProps) {
  return (
    <div className="mt-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-[#5c3d2e] mb-2">
          Jadwal Imsakiyah {data.hijriah}H/{data.masehi}M
        </h2>
        <p className="text-[#b85c38] font-medium">
          {data.provinsi}, {data.kabkota}
        </p>
        <div className="flex justify-center mt-4">
          <div className="w-24 h-1 bg-[#e0a96d] rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="ramadan-card p-4 text-center">
          <div className="mb-2">
            <img 
              src="https://cdn.discordapp.com/attachments/1299418032136917075/1345442388943831130/mosque.png?ex=67c4905e&is=67c33ede&hm=f62a613c32ab513a16833984bc6de435b26ca1482efbbb9beea7319d409f2001&" 
              alt="Imsak" 
              className="w-12 h-12 mx-auto mb-2"
            />
          </div>
          <p className="text-sm text-gray-600 mb-1">Waktu Imsak Hari Ini</p>
          <p className="text-xl font-bold text-[#b85c38]">{data.imsakiyah[0].imsak}</p>
        </div>
        
        <div className="ramadan-card p-4 text-center">
          <div className="mb-2">
            <img 
              src="https://cdn.discordapp.com/attachments/1299418032136917075/1345441957438160966/praying.png?ex=67c48ff7&is=67c33e77&hm=392787c091a41bd45e573fe7c386114f82d4d4ecb9b087db7675045a7a99597b&" 
              alt="Subuh" 
              className="w-12 h-12 mx-auto mb-2"
            />
          </div>
          <p className="text-sm text-gray-600 mb-1">Waktu Subuh Hari Ini</p>
          <p className="text-xl font-bold text-[#b85c38]">{data.imsakiyah[0].subuh}</p>
        </div>
        
        <div className="ramadan-card p-4 text-center">
          <div className="mb-2">
            <img 
              src="https://cdn.discordapp.com/attachments/1299418032136917075/1345441413755834489/iftar.png?ex=67c48f76&is=67c33df6&hm=2fbf2d29de5a91c4698a09ac0ab7100325e74cea46c6279e95663e1c56179b8f&" 
              alt="Maghrib" 
              className="w-12 h-12 mx-auto mb-2"
            />
          </div>
          <p className="text-sm text-gray-600 mb-1">Waktu Berbuka Hari Ini</p>
          <p className="text-xl font-bold text-[#b85c38]">{data.imsakiyah[0].maghrib}</p>
        </div>
      </div>

      <div className="table-container">
        <table className="min-w-full border border-[#e0a96d]">
          <thead>
            <tr>
              <th className="border border-[#5c3d2e]">Ramadhan</th>
              <th className="border border-[#5c3d2e]">Imsak</th>
              <th className="border border-[#5c3d2e]">Subuh</th>
              <th className="border border-[#5c3d2e]">Terbit</th>
              <th className="border border-[#5c3d2e]">Dhuha</th>
              <th className="border border-[#5c3d2e]">Dzuhur</th>
              <th className="border border-[#5c3d2e]">Ashar</th>
              <th className="border border-[#5c3d2e]">Maghrib</th>
              <th className="border border-[#5c3d2e]">Isya</th>
            </tr>
          </thead>
          <tbody>
            {data.imsakiyah.map((item) => (
              <tr key={item.tanggal}>
                <td className="border border-[#e0a96d] font-medium">{item.tanggal}</td>
                <td className="border border-[#e0a96d] prayer-time-value">{item.imsak}</td>
                <td className="border border-[#e0a96d] prayer-time-value">{item.subuh}</td>
                <td className="border border-[#e0a96d]">{item.terbit}</td>
                <td className="border border-[#e0a96d]">{item.dhuha}</td>
                <td className="border border-[#e0a96d] prayer-time-value">{item.dzuhur}</td>
                <td className="border border-[#e0a96d] prayer-time-value">{item.ashar}</td>
                <td className="border border-[#e0a96d] prayer-time-value">{item.maghrib}</td>
                <td className="border border-[#e0a96d] prayer-time-value">{item.isya}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
