import ProductDetail from './ProductDetail'

export default async function ProductsLayout({ children }) {
  
  return (
    <>
    {children}
    <ProductDetail />
    </>
  )
}
