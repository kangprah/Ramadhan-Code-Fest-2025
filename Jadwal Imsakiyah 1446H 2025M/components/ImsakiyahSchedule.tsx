'use client';

import { useState, useEffect } from 'react';
import LocationSelector from './LocationSelector';
import ScheduleTable from './ScheduleTable';

interface ImsakiyahData {
  provinsi: string;
  kabkota: string;
  hijriah: string;
  masehi: string;
  imsakiyah: {
    tanggal: number;
    imsak: string;
    subuh: string;
    terbit: string;
    dhuha: string;
    dzuhur: string;
    ashar: string;
    maghrib: string;
    isya: string;
  }[];
}

interface ApiResponse {
  code: number;
  message: string;
  data: ImsakiyahData[];
}

export default function ImsakiyahSchedule() {
  const [provinces, setProvinces] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [scheduleData, setScheduleData] = useState<ImsakiyahData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch provinces on component mount
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch('/api/provinces');
        const data = await response.json();
        if (data.provinces) {
          setProvinces(data.provinces);
        }
      } catch (err) {
        setError('Failed to load provinces. Please try again later.');
        console.error('Error fetching provinces:', err);
      }
    };

    fetchProvinces();
  }, []);

  // Fetch cities when province changes
  useEffect(() => {
    if (!selectedProvince) {
      setCities([]);
      return;
    }

    const fetchCities = async () => {
      try {
        const response = await fetch(`/api/cities?province=${encodeURIComponent(selectedProvince)}`);
        const data = await response.json();
        if (data.cities) {
          setCities(data.cities);
        }
      } catch (err) {
        setError('Failed to load cities. Please try again later.');
        console.error('Error fetching cities:', err);
      }
    };

    fetchCities();
  }, [selectedProvince]);

  // Fetch schedule data when both province and city are selected
  useEffect(() => {
    if (!selectedProvince || !selectedCity) {
      return;
    }

    const fetchSchedule = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/imsakiyah', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            provinsi: selectedProvince,
            kabkota: selectedCity,
          }),
        });

        const data: ApiResponse = await response.json();
        
        if (data.code === 200 && data.data && data.data.length > 0) {
          setScheduleData(data.data[0]);
        } else {
          setError('No schedule data available for the selected location.');
        }
      } catch (err) {
        setError('Failed to load schedule data. Please try again later.');
        console.error('Error fetching schedule data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [selectedProvince, selectedCity]);

  const handleProvinceChange = (province: string) => {
    setSelectedProvince(province);
    setSelectedCity('');
    setScheduleData(null);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div className="ramadan-container p-6 md:p-8 relative">
      <img 
        src="https://cdn.discordapp.com/attachments/1299418032136917075/1345443508881985546/lantern.png?ex=67c49169&is=67c33fe9&hm=26aad3a8c4904ea8e1ddaf9544251636facee4e8c9838b5a613ff756062f0b1a&" 
        alt="Crescent" 
        className="crescent-decoration top-right"
      />
      <img 
        src="https://cdn.discordapp.com/attachments/1299418032136917075/1345442888644956271/dates.png?ex=67c490d5&is=67c33f55&hm=65103b3abc8eded28c45b760fd2406d1b3cc16b581c78cea1acb0d7ab1d62edc&" 
        alt="Crescent" 
        className="crescent-decoration bottom-left"
      />
      
      <LocationSelector
        provinces={provinces}
        cities={cities}
        selectedProvince={selectedProvince}
        selectedCity={selectedCity}
        onProvinceChange={handleProvinceChange}
        onCityChange={handleCityChange}
      />

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {loading && (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      )}

      {scheduleData && !loading && (
        <ScheduleTable data={scheduleData} />
      )}
    </div>
  );
}