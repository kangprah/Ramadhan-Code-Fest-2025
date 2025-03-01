import { Suspense } from 'react';
import ImsakiyahSchedule from '@/components/ImsakiyahSchedule';
import Loading from '@/components/Loading';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold ramadan-header mb-12 text-center">
            JADWAL IMSAKIYAH 1446H/2025M
          </h1>
        </div>
        <Suspense fallback={<Loading />}>
          <ImsakiyahSchedule />
        </Suspense>
        <Footer />
      </div>
    </main>
  );
}