// 3 column card

import Image from 'next/image'
import productAdv from '../../public/assets/productAdv-1.png'

export default function TestIncludes() {
  return (
    <>
    <section className="px-20 bg-orange-50">
      <h2 className="home-h2">Included in every test</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center">
          <Image
            src={productAdv}
            alt="1st Image"
            className="w-24 h-24 object-cover rounded-full"
            priority
            width={500}
            height={500}
          />
          <h3 className="text-lg font-bold mt-4">Up to 50+ Health Scores</h3>
          <p className="text-gray-800">
            Your results will reveal the relationship between the beneficial and harmful activities in your microbiome and their impact on crucial aspects of your health.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg flex flex-col items-center">
          <Image
            src={productAdv}
            alt="1st Image"
            className="w-24 h-24 object-cover rounded-full"
            priority
            width={500}
            height={500}
          />
          <p className="text-gray-800">
            Discover which foods, often perceived as healthy, may not align with your current needs and which foods can actually be beneficial. Remember, it{`'`}s all about personalization.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg flex flex-col items-center">
          <Image
            src={productAdv}
            alt="1st Image"
            className="w-24 h-24 object-cover rounded-full"
            priority
            width={500}
            height={500}
          />
          <p className="text-gray-800">
            Linked to your health scores, we’ll recommend a list of ingredients that can work together synergistically with your food list to address inflammation, microbial imbalances, and the functions that need support.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}