import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '../styles/medias.css'
// other packages
import { dir } from 'i18next'
import { useTranslation } from '@/src/i18n'
import { createClient } from '@/utils/supabase/server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Analytics } from '@vercel/analytics/react'
// components
import Provider from './components/Provider'
import Navbar from './components/Navbar'
import Footer from './components/(footer)/Footer'
import ShoppingCartModal from './components/ShoppingCartModal'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUTolution | Transform your gut health",
  description: "GUTolution | Transform your gut health", 
}

export default async function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();
  // const supabase = createClient();
  // const { data: { user } } = await supabase.auth.getUser();
  const { t } = await useTranslation(lng, "footer");

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Provider>
          <Navbar user={user} />
          <ShoppingCartModal />
          {children}
          <Analytics />
          <Footer t={t} lng={lng} />
        </Provider>
      </body>
    </html>
  )
}