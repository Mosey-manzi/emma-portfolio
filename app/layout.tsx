import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';

export const metadata: Metadata = {
  title: 'Emmanuel Ahimana — Contemporary Choreographer | Kigali, Rwanda',
  description: 'Official portfolio of Emmanuel Ahimana, contemporary choreographer and professional dancer based in Kigali, Rwanda. 10+ years of experience exploring resilience, spatial tension, inner transformation, and African movement heritage.',
  keywords: [
    'Emmanuel Ahimana',
    'Contemporary Choreographer',
    'Dance Rwanda',
    'Kigali Choreographer',
    'IREBE Dance',
    'Kwibuka 30 Dance',
    'Les Noces de Suzanne',
    'African Contemporary Dance',
    'Ecole des Sables'
  ],
  authors: [{ name: 'Emmanuel Ahimana' }],
  openGraph: {
    title: 'Emmanuel Ahimana — Contemporary Choreographer',
    description: 'Award-winning contemporary dance choreography, solos, mass ensembles, and cross-border collaborations based in Kigali, Rwanda.',
    url: 'https://emmanuelahimana.com',
    siteName: 'Emmanuel Ahimana Choreography',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0d0d10] text-[#f5f4f0] antialiased selection:bg-[#c8a96e] selection:text-[#0b0b0c] relative">
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
