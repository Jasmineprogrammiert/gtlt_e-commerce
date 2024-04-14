import { useEffect } from 'react'
import Link from 'next/link'
import { client } from '@/app/lib/sanity'
import { fullProduct } from '@/app/interface'
import ImgGallery from './ImgGallery'
// styles
import { Star } from '@mui/icons-material'
import { Truck } from 'lucide-react'
import AddToBag from '../../components/AddToBag'

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
      name,
      "category": category->name,
      subtitle_1,
      description_1,
      subtitle_2,
      description_2,
      price,
      price_id,
      images,
      "slug": slug.current,
  }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = 'force-dynamic';

export default async function ProductPage({
  params,
}: {
  params: {slug: string};
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="p-20">
      <div className="grid grid-cols-2 gap-10 xl:gap-14">
        <ImgGallery images={data.images} />

        <div className="">
          <h2 className="text-2xl xl:text-3xl font-medium mb-2.5">
            {data.name}
          </h2>
          <span className="text-lg">
            {data.category}
          </span>
          <div className="text-sm flex items-center gap-5 mt-1.5 text-gray-800">
            <Link href="/products">
              <span className="text-sm">4.2</span>
              <Star className="h-4 w-4" />
            </Link>
            <span>14 Ratings</span>
          </div>

          <hr className="bg-gray-950 my-5" />

          <h3 className="text-lg font-medium text-gray-950 mb-1.5">
            {data.subtitle_1}
          </h3>
          <p className="text-base text-gray-700">
            {data.description_1}
          </p>
          <h3 className="text-lg font-medium text-gray-950 mb-1.5 mt-5">
            {data.subtitle_2}
          </h3>
          <p className="text-base text-gray-700 mb-5">
            {data.description_2}
          </p>
          {/* <span className="text-sm text-gray-700">
            <Link href="/shipping" className="underline">
              Shipping
            </Link> calculated at Checkout
          </span> */}
          <span className="text-sm text-gray-700">
            Shipping calculated at Checkout
          </span>

          <hr className="border-dashed bg-gray-950 my-5" />

          <div className="flex items-end gap-3">
            <span className="text-xl font-medium text-gray-800">
              ${data.price}
            </span>
            <span className="text-base mb-0.5 text-red-500 line-through">
              ${data.price + 30}
            </span>
          </div>

          <hr className="border-dashed bg-gray-950 my-5" />

          {/* <div className="mb-6 flex items-center gap-2 text-gray-500">
            <Truck className="w-6 h-6" />
            <span className="text-sm">2-4 Day Shipping</span>
          </div> */}

          <div className="flex gap-3">
            <AddToBag
              currency="HKD"
              description_1={data.description_1}
              image={data.images[0]}
              name={data.name}
              price={data.price}
              price_id={data.price_id}
              key={data._id}
            />
          </div>
        </div>
      </div>
    </div>
  )
}