import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import ChatBot from '@/components/ui/ChatBot';

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Car Spa - Premium Car Care",
  description: "Luxury car spa service with professional care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
