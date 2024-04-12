import ProductDetail from './ProductDetail'
import HealthScores from './HealthScores'

export default async function ProductsLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    <ProductDetail />
    <HealthScores />
    </>
  )
}