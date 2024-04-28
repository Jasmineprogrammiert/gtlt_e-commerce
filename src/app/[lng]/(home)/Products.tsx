import { products } from './Data/ProductsData'
import ProductsCard from './components/ProductsCard'

export default function Products() {
  return (
    <>
    <div className="px-10 pt-10 md:px-20 md:pt-20 bg-gray-50 flex flex-col items-stretch">
      <div className="md:flex mb-20">
        <div className="w-full md:w-1/2 md:flex items-center">
          <h2 className="home-h2 home-h2-2">Health Solutions</h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-2xl xl:leading-9">
            In order to personalize your nutrition recommendations and health products, you{`'`}ll start with one of our Intelligence tests. Based on millions of data points analyzed from your gene expressions, your action plan will focus on the root causes of microbial imbalance and inflammation.
          </p>
        </div>
      </div>
      <div className="flex-1 mb-10">
        {products.map((p, i) => (
          <ProductsCard p={p} key={i} />
        ))}
      </div>
    </div>
    </>
  )
}