import Image from 'next/image'
import { data } from './ProductAdvData'
import productAdvImg from '../../public/assets/productAdv-1.png'

export default function ProductAdv() {
  return (
    <section className="px-20 py-3 bg-green-50 productAdv">
      <h2 className="home-h2">Product Advantages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map(adv => (
          <div key={adv.id} className="bg-white p-4 rounded-lg flex flex-col items-center">
            <Image
              src={productAdvImg}
              alt={adv.title}
              className="w-24 h-24 object-cover rounded-full"
              priority
              width={500}
              height={500}
            />
            <h3 className="text-lg font-bold mt-4">{adv.title}</h3>
            <p className="text-sm text-gray-800 mt-1">{adv.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}