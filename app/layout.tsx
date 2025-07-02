
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';


import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CODEX LABS - Conectando Talentos',
  description: 'Plataforma freelancer para programadores, marketers e designers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-950 text-slate-200`}>
        <Header />
        <main className="container mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}