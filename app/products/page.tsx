import Image from 'next/image'
import Link from 'next/link'
import { simplifiedProduct } from '@/app/interface'
import { client } from '@/app/lib/sanity'

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
  const data: simplifiedProduct[] = await getData()

  return (
    <div className="px-20 py-20 bg-gray-50">
      <h2 className="text-5xl mb-10">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {data.map(product => (
          <div key={product._id} className="group relative">
            <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200 group-hover:opacity-80">
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
            <div className="mx-0.5 my-3">
              <h3 className="text-xl">
                <Link href={`/products/${product.slug}`}>
                  {product.name}
                </Link>
              </h3>
              <p className="text-lg font-medium text-gray-800">
                ${product.price}
              </p>

              <p className="text-lg mt-1 text-gray-600">
                {product.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}