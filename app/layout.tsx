import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './medias.css'
// components
import Provider from './components/Provider'
import Navbar from './components/Navbar'
import FrequentlyAsked from './components/FrequentlyAsked'
import Footer from './components/Footer'
import ShoppingCartModal from './components/ShoppingCartModal'

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
        <Provider>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <FrequentlyAsked />
          <Footer />
        </Provider>
      </body>
    </html>
  )
}