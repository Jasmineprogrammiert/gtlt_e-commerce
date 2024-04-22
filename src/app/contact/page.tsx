import {useTranslations} from 'next-intl'

export default function Contact() {
  const t = useTranslations('Index')

  return (
    <>
    <div className="p-20 min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full space-y-8">
        <h1>{t('title')}</h1>;
        <div>
          <h2 className="home-h2 blog-h2 text-center">Contact Us</h2>
          <p className="mt-8 mb-10 text-base text-gray-900">We{`'`}d love to hear from you! Reach out using the details below.</p>
        </div>
        <div>
          <h3 className="mt-6 text-lg font-semibold">Address</h3>
          <p>123 Main Street, City, Country</p>
        </div>
        <div>
          <h3 className="mt-6 text-lg font-semibold">Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        </div>
        <div>
          <h3 className="mt-6 text-lg font-semibold">Email</h3>
          <p>info@example.com</p>
        </div>
        <div>
          <h3 className="mt-6 text-lg font-semibold">Phone</h3>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </div>
    </>
  )
}