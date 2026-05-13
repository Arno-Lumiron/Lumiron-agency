import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lumiron · Agence IA sur-mesure',
  description:
    'Lumiron conçoit et déploie des agents IA, outils sur mesure et intégrations métier pour les entreprises qui veulent gagner en productivité.',
  openGraph: {
    title: 'Lumiron · Agence IA sur-mesure',
    description:
      'Agents conversationnels, outils sur-mesure et intégrations métier. Live en 4 semaines, hébergé en France, conforme RGPD.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${instrumentSerif.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
