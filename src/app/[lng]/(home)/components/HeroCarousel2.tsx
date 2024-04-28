import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/src/i18n/client'

type PageProps = { lng: string };
export default function HeroCarousel2 ({ lng }: PageProps) {
  const { t } = useTranslation(lng, 'home');
  return (
    <>
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-col md:w-2/5">
        <h1 className="text-5xl font-medium mb-12 md:text-6xl md:font-bold xl:leading-[4.5rem]">
          {t("Herocarousel1.title_1.title_1_1")}
          <span className="theme-color">{t("Herocarousel1.title_1.title_1_2")}</span> 
          {t("Herocarousel1.title_1.title_1_3")}
          <span className="theme-color">{t("Herocarousel1.title_1.title_1_4")}</span>
        </h1>
        <p className="text-xl leading-tight md:text-2xl md:leading-relaxed md:font-medium">
          {t("Herocarousel1.title_2.title_2_1")}
          <span className="theme-color">{t("Herocarousel1.title_2.title_2_2")}</span>
          {t("Herocarousel1.title_2.title_2_3")}
          <span className="theme-color">{t("Herocarousel1.title_2.title_2_4")}</span> 
          {t("Herocarousel1.title_2.title_2_5")}
        </p>
      </div>
      <div className="flex mt-18 md:w-3/5 md:-mt-20">
        <div className="w-40 left-0 ml-0 relative top-12 z-10 overflow-hidden rounded-lg drop-shadow-xl md:w-full md:left-12">
          <Image
            src="https://images.unsplash.com/photo-1620755848138-dd2cbb2781c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwcGxlbWVudHxlbnwwfDF8MHx8fDI%3D"
            alt="Great Photo"
            className="h-full w-full object-cover object-center"
            priority
            width={500}
            height={500}
          />
        </div>
        <div className="w-40 overflow-hidden rounded-lg drop-shadow-xl md:w-full">
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
      <button className="home-btn max-md:mt-16 max-md:ml-48 max-md:z-10 md:top-[75%] md:z-0">
        <Link href="/products">
          <h1>{t("common.button")}</h1>
        </Link>
      </button> 
    </div>
    </>
  )
}