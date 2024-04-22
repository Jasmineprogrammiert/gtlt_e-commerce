import Image from 'next/image'
import Link from 'next/link'
// assets
import product5 from '../../../../public/assets/product-5.jpg'
import product6 from '../../../../public/assets/product-6.jpg'

export default function HeroCarousel3() {
  return (
    <>
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-col lg:w-2/5">
        <h1 className="text-6xl font-bold mb-12">
          Gut is <span className="theme-color">The Solution</span> to your <span className="theme-color">Health</span>
        </h1>
        <p className="text-2xl leading-relaxed font-medium">
          Unlock your body{`'`}s potential: <span className="theme-color">explore</span> your unique gut microbiota and <span className="theme-color">personalize</span> your probiotics.
        </p>
      </div>

      <div className="flex lg:w-3/5 -mt-20">
        <div className="ml-0 relative left-12 top-12 z-10 overflow-hidden rounded-lg drop-shadow-xl">
          <Image
            src={product5}
            alt="Great Photo"
            className="h-full w-full object-cover object-center"
            priority
            width={500}
            height={500}
          />
        </div>
        <div className="overflow-hidden rounded-lg drop-shadow-xl">
          <Image
            src={product6}
            alt="Great Photo"
            className="h-full w-full object-cover object-center"
            priority
            width={500}
            height={500}
          />
        </div>
      </div>

      <button className="home-btn hero-btn">
        <Link href="/products">
          Shop Now
        </Link>
      </button> 
    </div>
    </>
  )
}