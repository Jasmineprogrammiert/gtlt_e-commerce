import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/src/i18n/client'

type PageProps = { lng: string };
export default function HeroCarousel1 ({ lng }: PageProps) {
  const { t } = useTranslation(lng, 'home');
  return (
    <>
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-col lg:w-2/5">
        <h1 className="text-6xl font-bold mb-12">
          {t("Herocarousel1.title_1.title_1_1")}
          <span className="theme-color">{t("Herocarousel1.title_1.title_1_2")}</span> 
          {t("Herocarousel1.title_1.title_1_3")}
          <span className="theme-color">{t("Herocarousel1.title_1.title_1_4")}</span>
        </h1>
        <p className="text-2xl leading-relaxed font-medium">
          {t("Herocarousel1.title_2.title_2_1")}
          <span className="theme-color">{t("Herocarousel1.title_2.title_2_2")}</span>
          {t("Herocarousel1.title_2.title_2_3")}
          <span className="theme-color">{t("Herocarousel1.title_2.title_2_4")}</span> 
          {t("Herocarousel1.title_2.title_2_5")}
        </p>
      </div>
      
      <div className="flex lg:w-3/5 -mt-20">
        <div className="ml-0 relative left-12 top-12 z-10 overflow-hidden rounded-lg drop-shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1620755848138-dd2cbb2781c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwcGxlbWVudHxlbnwwfDF8MHx8fDI%3D"
            alt="Great Photo"
            className="h-full w-full object-cover object-center"
            priority
            width={500}
            height={500}
          />
        </div>
        <div className="overflow-hidden rounded-lg drop-shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1620755848138-dd2cbb2781c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwcGxlbWVudHxlbnwwfDF8MHx8fDI%3D"
            alt="Great Photo"
            className="h-full w-full object-cover object-center"
            priority
            width={500}
            height={500}
          />
        </div>
      </div>

      <button className="home-btn hero-btn">
        <Link href="/products">
          <h1>{t("common.button")}</h1>
        </Link>
      </button> 
    </div>
    </>
  )
}