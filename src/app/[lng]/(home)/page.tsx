import Hero from './Hero'
import Testimonial from './Testimonial'
import Products from './Products'
import ProductAdv from './ProductAdv'
import HowItWorks from './HowItWorks'
import TestIncludes from './TestIncludes'
import TechShowcase from './TechShowcase'
import Testimonial2 from './Testimonial2'

export const dynamic = 'force-dynamic';

export default function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {

  return (
    <>
    <div className="bg-white">
      <Hero lng={lng} />
      <Testimonial />
      <Products />
      <ProductAdv />
      <HowItWorks />
      <TestIncludes />
      <TechShowcase />
      <Testimonial2 />
    </div>
    </>
  )
}