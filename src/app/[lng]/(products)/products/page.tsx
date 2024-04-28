import Image from 'next/image'
import Link from 'next/link'
import { simplifiedProduct } from '../interface'
import { client } from '@/src/app/lib/sanity'

async function getData() {
  const query = `*[_type == 'product'] {
    _id,
      name,
      price,
      "imgUrl": images[0].asset->url,
      "category": category->name,
      "slug": slug.current,
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Products() {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className="px-10 py-16 md:p-20 bg-gray-50">
      <h2 className="text-3xl mb-5 md:text-5xl md:mb-10 xl:mb-12 tracking-wide">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 md:gap-y-10">
        {data.map(product => (
          <div key={product._id} className="group relative">
            <div className="w-[98%] xl:w-[92%] mx-auto aspect-square overflow-hidden rounded-md group-hover:opacity-80">
              {product.imgUrl ? 
                <Link href={`/products/${product.slug}`}>
                  <Image
                    src={product.imgUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center"
                    width={300}
                    height={300}
                  />
                </Link>
                : null}
            </div>
            <div className="mx-0.5 my-3 text-center items-center">
              <h3 className="text-xl xl:text-2xl font-medium">
                <Link href={`/products/${product.slug}`}>
                  {product.name}
                </Link>
              </h3>
              <p className="text-base xl:text-lg text-gray-800 mt-1.5 xl:mt-2">
                {product.category}
              </p>
              <p className="text-base xl:text-lg text-gray-800 mt-3 xl:mt-4">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}