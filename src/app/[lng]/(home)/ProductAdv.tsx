
import Image from 'next/image'
import Link from 'next/link'
import { data } from './Data/ProductAdvData'

export default function ProductAdv() {
  return (
    <>
    <section className="px-10 pb-10 md:px-20 md:pb-20 xl:pb-32 bg-gray-50">
      <h2 className="home-h2 home-h2-2">Product Advantages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-8">
        {data.map(adv => (
          <div key={adv.id} className="bg-slate-100 my-5 pb-10 flex flex-col items-center text-center">
            <Image
              src={adv.imgLink}
              alt={adv.title}
              className="w-full h-44 xl:h-52 object-cover"
              width={500}
              height={500}
            />
            <h3 className="text-2xl px-4 mt-9 mb-5 xl:mt-12 xl:mb-8 text-cyan-600">{adv.title}</h3>
            <p className="text-lg px-4 md:px-3.5 xl:px-10">{adv.description}</p>
          </div>
        ))}
      </div>
      <button className="home-btn mt-10">
        <Link href="/products">
          All Products
        </Link>
      </button> 
    </section>
    </>
  )
}