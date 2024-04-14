import FrequentlyAsked from '@/app/components/FrequentlyAsked'

export default async function ProductsLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    <FrequentlyAsked />
    </>
  )
}