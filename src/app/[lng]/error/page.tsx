import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div className="p-10 md:p-20 text-center text-lg">
      <p>Sorry, something went wrong {`>.<`}</p>
      <p>Go back to the <Link href="/" className="text-cyan-600">home</Link> page.</p>
    </div>
  )
}