"use client";
import "@/styles/globals.css"; // Global stil dosyasını import et
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  )
}
