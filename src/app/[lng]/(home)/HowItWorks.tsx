import Image from 'next/image'
import { data } from './Data/HowItWorksData'

export default function HowItWorks() {
  return (
    <>
    <section className="px-10 py-16 lg:p-20 relative items-stretch bg-[#f2f2ee]">
      <h2 className="text-3xl lg:text-5xl mb-10">Simple, Discreet and Professional</h2>
      <h3 className="text-xl lg:text-3xl mb-16">Here{`'`}s
        <span className="italic tracking-wide font-medium"> how it works</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <Image
              src={item.imgLink}
              alt="1st Image"
              className="w-40 h-40 object-cover rounded-full"
              priority
              width={800}
              height={800}
            />
            <p className="mt-8 text-xl xl:text-2xl leading-relaxed">{item.statement}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}