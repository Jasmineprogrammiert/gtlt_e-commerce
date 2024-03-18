import Hero from './Hero'
import Testimonial from './Testimonial'
import Products from './Products'
import Hero2 from './Hero2'

export default function Home() {
  return (
    <>
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Testimonial />
      <Products />
      {/* <Hero2 /> */}
    </div>
    </>
  );
}
