import { products } from './Data/ProductsData'
import ProductsCard from './components/ProductsCard'

export default function Products() {
  return (
    <>
    <div className="px-20 pt-20 bg-gray-50 flex flex-col items-stretch">
      <div className="flex mb-20">
        <div className="w-1/2 flex items-center">
          <h2 className="home-h2 mb-0">Health Solutions</h2>
        </div>
        <div className="w-1/2">
          <p className="text-2xl">
            In order to personalize your nutrition recommendations and health products, you{`'`}ll start with one of our Intelligence tests. Based on millions of data points analyzed from your gene expressions, your action plan will focus on the root causes of microbial imbalance and inflammation.
          </p>
        </div>
      </div>

      <div className="flex-1">
        {products.map((p, i) => (
          <ProductsCard p={p} key={i} />
        ))}
      </div>
    </div>
    </>
  )
}