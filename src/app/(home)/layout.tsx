import FrequentlyAsked from '../components/FrequentlyAsked'

export default function HomeLayout({
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