import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './medias.css'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUTolution | Transform your gut health",
  description: "GUTolution | Transform your gut health",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}