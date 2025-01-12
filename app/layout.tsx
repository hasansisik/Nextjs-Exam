"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="h-16 border-b flex items-center px-8">
          <div className="flex items-center gap-8 w-full">
            <Link href="/">
              <Image src="/4.png" alt="Logo" width={150} height={32} />
            </Link>            
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 ml-8">
              <Link href="/exam" onClick={handleMenuClick} className="hover:text-purple-600">Sınavlar</Link>
              <Link href="/lesson" onClick={handleMenuClick} className="hover:text-purple-600">Dersler</Link>
              <Link href="/query" onClick={handleMenuClick} className="hover:text-purple-600">Levhalar</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden ml-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b bg-white">
            <nav className="flex flex-col py-4 px-8">
              <Link href="/exam" onClick={handleMenuClick} className="py-2 hover:text-purple-600">Sınavlar</Link>
              <Link href="/lesson" onClick={handleMenuClick} className="py-2 hover:text-purple-600">Dersler</Link>
              <Link href="/query" onClick={handleMenuClick} className="py-2 hover:text-purple-600">Levhalar</Link>
            </nav>
          </div>
        )}
        
        {children}
      </body>
    </html>
  );
}
