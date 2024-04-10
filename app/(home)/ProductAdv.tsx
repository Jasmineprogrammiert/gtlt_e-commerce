
import Image from 'next/image'
import Link from 'next/link'
import { data } from './ProductAdvData'

export default function ProductAdv() {
  return (
    <>
    <section className="px-20 pb-20 xl:pb-32 bg-gray-50">
      <h2 className="home-h2">Product Advantages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {data.map(adv => (
        <div key={adv.id} className="bg-gray-100 mt-10 pb-5 xl:pb-8 rounded-lg flex flex-col items-center text-center">
            <Image
              src={adv.imgLink}
              alt={adv.title}
              className="w-full h-44 xl:h-52 object-cover rounded"
              width={500}
              height={500}
            />
            <h3 className="text-xl font-medium mt-5 mb-2 xl:mt-9 xl:mb-4 px-2 xl:px-0 text-cyan-600">{adv.title}</h3>
            <p className="xl:text-lg p-1">{adv.description}</p>
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