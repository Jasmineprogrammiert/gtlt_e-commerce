import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function Footer() {
  return (
    <footer className="px-20 bg-gray-50 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/about">Our Products</Link></li>
                <li><Link href="/about">Our Approach</Link></li>
                <li><Link href="/about">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Learn</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/learn">Our Science</Link></li>
                <li><Link href="/learn">Blog</Link></li>
                <li><Link href="/learn">News</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/customer-service">Contact Us</Link></li>
                <li><Link href="/customer-service">Log In</Link></li>
                <li><Link href="/customer-service">Error Report</Link></li>
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
            <p className="text-gray-700 mt-5">Sign up to get our special offers and news</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full pl-1 pr-4 py-2 bg-transparent border-none focus:outline-none"
              />
              <button className="home-btn xl:static">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h5 className="mb-2 font-semibold text-sm">Disclaimer</h5>
        <p className="text-gray-600 text-xs">
          Please refer to the instructions on the packaging for product details. The images are for reference only, and the actual product should prevail. The effectiveness of this product may vary depending on differentphysical conditions, age, and lifestyle factors. This information is for reference only and is not intended for diagnosis or treatment. This product is not registered under thePharmacy and Poisons Ordinanceor the Chinese Medicine Ordinance. Any claims made for this product have not been evaluated for registration purposes. This product is not intended for the diagnosis, treatment, or prevention of any disease.
        </p>
      </div>
      <hr className="my-4" />
      <p className="text-gray-60 text-sm text-center">
        Copyright &copy; {new Date().getFullYear()} Gutolution. All rights reserved.
      </p>
    </footer>
  )
}