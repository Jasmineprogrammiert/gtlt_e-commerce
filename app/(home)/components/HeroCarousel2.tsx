import Image from 'next/image'
import Link from 'next/link'

export default function HeroCarousel2() {
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
            src="https://images.unsplash.com/photo-1620755848138-dd2cbb2781c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwcGxlbWVudHxlbnwwfDF8MHx8fDI%3D"
            alt="Great Photo"
            className="h-full w-full object-cover object-center"
            priority
            width={500}
            height={500}
          />
        </div>
        <div className="overflow-hidden rounded-lg drop-shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1620755848138-dd2cbb2781c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwcGxlbWVudHxlbnwwfDF8MHx8fDI%3D"
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