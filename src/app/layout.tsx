import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Iglesia Casa del Alfarero',
    template: '%s | Iglesia Casa del Alfarero',
  },
  description:
    'Bienvenidos a la Iglesia Casa del Alfarero en Powder Springs, GA. Somos una comunidad de fe hispana donde cada vida es moldeada por las manos del Gran Alfarero. Servicios Viernes 6:30 PM y Domingos 11:00 AM.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Iglesia Casa del Alfarero',
    description:
      'Comunidad de fe hispana en Powder Springs, GA. Servicios, ministerios, sermones y mas. Viernes 6:30 PM y Domingos 11:00 AM.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Iglesia Casa del Alfarero',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
