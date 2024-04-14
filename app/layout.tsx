import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './medias.css'
// components
import { createClient } from '@/utils/supabase/server'
import Provider from './components/Provider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ShoppingCartModal from './components/ShoppingCartModal'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUTolution | Transform your gut health",
  description: "GUTolution | Transform your gut health",
  
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar user={user} />
          <ShoppingCartModal />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}