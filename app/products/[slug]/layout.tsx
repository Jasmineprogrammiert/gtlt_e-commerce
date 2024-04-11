import ProductDetail from './ProductDetail'

export default async function ProductsLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    <ProductDetail />
    </>
  )
}