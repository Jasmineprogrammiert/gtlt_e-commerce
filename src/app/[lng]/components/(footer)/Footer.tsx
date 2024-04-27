import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram'
import { TFunction } from 'i18next'
import { languages } from '@/src/i18n/settings'

type FooterProps = {
  t: ((key: string) => string) & TFunction<"translation", undefined>;
  lng: string;
}
export default async function Footer({ lng }: FooterProps) {
  return (
    <footer className="px-20 bg-gray-50 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm">
              <h3 className="mb-2 font-medium">About Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/mission">Mission</Link></li>
                <li><Link href="/news">News</Link></li>
              </ul>
            </div>
            <div className="text-sm">
              <h3 className="mb-2 font-medium">Shop and Learn</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/tech">Approach</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="text-sm">
              <h3 className="mb-2 font-medium">More</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/login">Login</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col justify-between h-full">
            <Link 
              href="https://www.instagram.com/gutolution/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <InstagramIcon className="w-10 h-10" />
            </Link>
            <p className="text-gray-700 text-sm">Sign up to get our special offers and news</p>
            <div className="flex text-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full pl-1 pr-4 py-2 bg-transparent border-none focus:outline-none"
              />
              <button className="home-btn footer-btn xl:static">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h5 className="mb-2 text-sm font-medium">Disclaimer</h5>
        <p className="text-gray-600 text-xs">
          Please refer to the instructions on the packaging for product details. The images are for reference only, and the actual product should prevail. The effectiveness of this product may vary depending on differentphysical conditions, age, and lifestyle factors. This information is for reference only and is not intended for diagnosis or treatment. This product is not registered under thePharmacy and Poisons Ordinanceor the Chinese Medicine Ordinance. Any claims made for this product have not been evaluated for registration purposes. This product is not intended for the diagnosis, treatment, or prevention of any disease.
        </p>
      </div>

      <hr className="my-4" />
      <div className="flex justify-between">
        <div className="text-start flex">
          <p className="text-gray-600 text-xs mr-10">
            Copyright &copy; {new Date().getFullYear()} Gutolution. All rights reserved. 
          </p>
          <Link href='/refund' className="text-gray-600 text-xs mr-1">
            Refund Policy
          </Link>
          <span className="text-gray-600 text-xs mr-1"> | </span>
          <Link href='/terms' className="text-gray-600 text-xs">
             Terms of Service
          </Link>
        </div>
        <div className="text-gray-600 text-xs text-end">
          {languages
            .filter(l => lng !== l)
            .map((l, index) => {
              let languageName;
              if (l === 'en') {
                languageName = 'English';
              } else if (l === 'zh-Hant') {
                languageName = '繁體中文';
              } else if (l === 'zh-CN') {
                languageName = '简体中文';
              } else { // Use the language code itself if not one of the specified cases
                languageName = l;
              }
              return (
                <span key={l}>
                  {index > 0 && " | "}
                  <Link href={`/${l}`}>{languageName}</Link>
                </span>
              );
            })}
        </div>
      </div>
    </footer>
  )
}