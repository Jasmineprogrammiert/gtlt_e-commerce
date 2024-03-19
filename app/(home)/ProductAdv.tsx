import Image from 'next/image'
import productAdv from '../../public/assets/productAdv-1.png'

interface ProductAdv {
  id: number;
  title: string;
  description: string;
}

const data: ProductAdv[] = [
  {
    id: 1,
    title: 'Simple and Convient Home Testing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta hic expedita inventore excepturi. Inventore maiores ducimus eveniet.',
  },
  {
    id: 2,
    title: 'Next-Generation Sequencing Testing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta hic expedita inventore excepturi. Inventore maiores ducimus eveniet.',
  },
  {
    id: 3,
    title: 'Scientific Research & AI Recommendations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta hic expedita inventore excepturi. Inventore maiores ducimus eveniet.',
  },
  {
    id: 4,
    title: 'Personalizaed Health & Wellness Plan',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta hic expedita inventore excepturi. Inventore maiores ducimus eveniet.',
  },
];

export default function ProductAdv() {
  return (
    <section className="px-20 py-3 bg-green-50 productAdv">
      <h2 className="home-h2">Product Advantages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map(adv => (
          <div key={adv.id} className="bg-white p-4 rounded-lg flex flex-col items-center">
            <Image
              src={productAdv}
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