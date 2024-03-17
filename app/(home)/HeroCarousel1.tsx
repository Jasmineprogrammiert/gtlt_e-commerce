import Image from 'next/image'
import Link from 'next/link'
// assets
import heroImg1 from '../../public/assets/heroImg-1.jpg'
import heroImg2 from '../../public/assets/heroImg-2.jpg'
import product1 from '../../public/assets/product-1.jpg'
import product2 from '../../public/assets/product-2.jpg'

export default function HeroCarousel1() {
  return (
    <>
    <section>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col lg:w-2/5">
          <h1 className="text-6xl font-bold mb-12">
            Gut is <span className="logo-color">The Solution</span> to your <span className="logo-color">Health</span>
          </h1>
          <p className="text-2xl leading-relaxed font-medium">
            Unlock your body{`'`}s potential: <span className="logo-color">explore</span> your unique gut microbiota and <span className="logo-color">personalize</span> your probiotics.
          </p>
        </div>

        <div className="flex lg:w-3/5 -mt-20">
          <div className="ml-0 relative left-12 top-12 z-10 overflow-hidden rounded-lg drop-shadow-xl">
            <Image
              src={product1}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg drop-shadow-xl">
            <Image
              src={product2}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>
        </div>

        <button className="px-4 py-2 text-white font-semibold rounded-full hero-btn">
          Explore More
        </button>        
      </div>
    </section>
    </>
  )
}
