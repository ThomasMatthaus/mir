import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'optional' });

export const metadata: Metadata = {
  title: 'Мир Недвижимости - Агентство недвижимости',
  description: 'Профессиональные услуги по покупке и продаже недвижимости',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
