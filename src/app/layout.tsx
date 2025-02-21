import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import ChatBot from '@/components/ui/ChatBot';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Car Service',
  description: 'Professional Car Service and Repair',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}
