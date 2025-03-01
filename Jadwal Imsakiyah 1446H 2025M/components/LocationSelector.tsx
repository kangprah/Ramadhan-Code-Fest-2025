'use client';

interface LocationSelectorProps {
  provinces: string[];
  cities: string[];
  selectedProvince: string;
  selectedCity: string;
  onProvinceChange: (province: string) => void;
  onCityChange: (city: string) => void;
}

export default function LocationSelector({
  provinces,
  cities,
  selectedProvince,
  selectedCity,
  onProvinceChange,
  onCityChange,
}: LocationSelectorProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
      </div>
      
      <h2 className="text-xl font-semibold text-center mb-6 text-[#5c3d2e]">
        Pilih Lokasi Anda
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="select-container">
          <label htmlFor="province" className="block text-sm font-medium text-[#5c3d2e] mb-2">
            Provinsi
          </label>
          <select
            id="province"
            value={selectedProvince}
            onChange={(e) => onProvinceChange(e.target.value)}
            className="w-full p-3 border border-[#e0a96d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b85c38] bg-white"
          >
            <option value="">Pilih Provinsi</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        <div className="select-container">
          <label htmlFor="city" className="block text-sm font-medium text-[#5c3d2e] mb-2">
            Kabupaten/Kota
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            disabled={!selectedProvince}
            className="w-full p-3 border border-[#e0a96d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b85c38] bg-white disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300"
          >
            <option value="">Pilih Kabupaten/Kota</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}