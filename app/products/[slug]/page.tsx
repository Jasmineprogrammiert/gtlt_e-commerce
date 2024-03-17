import { client } from '@/app/lib/sanity'
import { fullProduct } from '@/app/interface'
// components
import ImgGallery from '@/app/(products)/ImgGallery';

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
      name,
      description,
      price,
      "category": category->name,
      images,
      "slug": slug.current,
  }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: {slug: string};
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImgGallery images={data.images} />
        </div>
      </div>
    </div>
  )
}
