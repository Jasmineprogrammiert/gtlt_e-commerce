// 4-column Products.tsx

import Link from 'next/link'
import Image from 'next/image'
import { simplifiedProduct } from '@/app/interface'
import { client } from '@/app/lib/sanity'
import { ArrowRight } from 'lucide-react'

async function getData() {
  const query= `*[_type == 'product'][0...4] | order(_createdAt desc) {
    _id,
      name,
      price,
      'category': category->name,
      'imgUrl': images[0].asset->url,
      'slug': slug.current
  }`
  const data = await client.fetch(query);
  
  return data;
}

export default async function Products() {
  const data: simplifiedProduct[] = await getData();
  return (
    <>
    <section className="px-20 py-3 bg-sky-50 products">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Our Signature Products
        </h2>
        <Link className="flex items-center gap-x-1 transition-transform transform hover:-translate-x-1 font-medium" href="/products">
          See All <ArrowRight />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map(product => (
          <Link href={`/products/${product.slug}`} key={product._id} className="relative">
            <div className="aspect-square w-full overflow-hidden rounded-md lg:h-80">
              <Image
                src={product.imgUrl}
                alt="Product image"
                className="w-full h-full object-cover object-center"
                width={300}
                height={300}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div className="text-sm max-w-44 xl:max-w-none">
                <h3 className="font-medium">{product.name}</h3>
                <p className="mt-1 text-gray-800">
                  {product.category}
                </p>
              </div>
              <p className="text-sm font-medium">
                {'$'}{product.price.toString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </>
  )
}