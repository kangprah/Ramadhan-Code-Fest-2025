import './globals.css';
import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const tajawal = Tajawal({ 
  weight: ['400', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-tajawal'
});

export const metadata: Metadata = {
  title: 'Jadwal Imsakiyah 1446H/2025M',
  description: 'Jadwal Imsakiyah untuk seluruh wilayah di Indonesia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} ${tajawal.variable}`}>{children}</body>
    </html>
  );
}