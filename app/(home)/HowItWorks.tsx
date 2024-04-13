import Image from 'next/image'
import { data } from './HowItWorksData'

export default function HowItWorks() {
  return (
    <>
    <section className="p-20 relative items-stretch howItWorks">
      <h2 className="text-5xl mb-10">Simple, Discreet and Professional</h2>
      <h3 className="text-3xl mb-16">Here{`'`}s
        <span className="italic tracking-wide font-medium"> how it works</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <Image
              src={item.imgLink}
              alt="1st Image"
              className="w-36 h-36 object-cover rounded-full"
              priority
              width={800}
              height={800}
            />
            <p className="mt-8 text-2xl leading-relaxed">{item.statement}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}