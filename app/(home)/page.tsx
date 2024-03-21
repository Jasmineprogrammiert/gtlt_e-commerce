import Hero from './Hero'
import Testimonial from './Testimonial'
import Products from './Products'
import ProductAdv from './ProductAdv'
import HowItWorks from './HowItWorks'
import TestIncludes from './TestIncludes'
import TechShowcase from './TechShowcase'
import Problems from './Problems'
import MediaCoverage from './MediaCoverage'
import Hero2 from './Hero2'

export default function Home() {
  return (
    <>
    <div className="bg-white">
      <Hero />

      <Testimonial />
      <Products />

      <ProductAdv />
      <HowItWorks />

      <TestIncludes />
      <TechShowcase />
      <Problems />
      <MediaCoverage />

      {/* <Hero2 /> */}
    </div>
    </>
  );
}