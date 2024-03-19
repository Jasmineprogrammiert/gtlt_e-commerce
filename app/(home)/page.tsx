import Hero from './Hero'
import Testimonial from './Testimonial'
import Products from './Products'
import ProductAdv from './ProductAdv'
import HowItWorks from './HowItWorks'
import TestIncludes from './TestIncludes'
import Hero2 from './Hero2'

export default function Home() {
  return (
    <>
    {/* <div className="bg-white pb-6 sm:pb-8 lg:pb-12"> */}
    <div className="bg-white">
      <Hero />

      <Testimonial />
      <Products />

      <ProductAdv />
      <HowItWorks />
      
      <TestIncludes />
      {/* <Hero2 /> */}
    </div>
    </>
  );
}
