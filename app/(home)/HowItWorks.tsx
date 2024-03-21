import Image from 'next/image'
import Link from 'next/link'
import productAdv from '../../public/assets/productAdv-1.jpg'

const statements = {
  s1: "Collect the sample at home and mail it to us",
  s2: "Get personalized microbiome reports and customized dietary recommendations",
  s3: "Take probiotics that are most stuitable for your gut",
};

export default function HowItWorks() {
  return (
    <>
    <section className="px-20 py-5 bg-lime-50 relative howItWorks">
      <h2 className="home-h2">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <Image
            src={productAdv}
            alt="1st Image"
            className="w-24 h-24 object-cover rounded-full"
            priority
            width={500}
            height={500}
          />
          <p className="mt-2 text-center">{statements.s1}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-2 text-center">{statements.s2}</p>
          <Image
            src={productAdv}
            alt="1st Image"
            className="w-24 h-24 object-cover rounded-full"
            priority
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={productAdv}
            alt="1st Image"
            className="w-24 h-24 object-cover rounded-full"
            priority
            width={500}
            height={500}
          />
          <p className="mt-2 text-center text-gray-800">{statements.s3}</p>
        </div>
      </div>
      
      <button className="absolute left-1/2 transform -translate-x-1/2 home-btn mt-8">
        <Link href="/products">Order Now</Link>
      </button> 
    </section>
    </>
  );
}