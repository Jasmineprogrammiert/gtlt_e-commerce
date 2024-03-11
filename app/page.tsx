import Hero from './components/(home)/Hero'
import Hero2 from './components/(home)/Hero2'
import Products from './components/(home)/Products'

export default function Home() {
  return (
    <>
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero2 />
      <Products />
      <Hero />
    </div>
    </>
  );
}
