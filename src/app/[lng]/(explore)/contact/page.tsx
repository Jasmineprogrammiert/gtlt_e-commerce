export default function Contact() {
  return (
    <>
    <div className="px-5 py-16 md:p-20 md:min-h-screen flex items-center justify-center">
      <div className="md:max-w-lg w-full space-y-8">
        <div>
          <h2 className="home-h2 home-h2-2 text-center">Contact Us</h2>
          <p className="mt-8 mb-5 md:mt-8 md:mb-10 text-lg md:text-base text-gray-900">We{`'`}d love to hear from you! Reach out using the details below.</p>
        </div>
        <div>
          <h3 className="mt-6 text-lg font-medium md:font-semibold max-md:tracking-wide text-gray-800">Address</h3>
          <p className="text-lg">123 Main Street, City, Country</p>
        </div>
        <div>
          <h3 className="mt-6 text-lg font-medium md:font-semibold max-md:tracking-wide text-gray-800">Business Hours</h3>
          <p className="text-lg">Monday - Friday: 9:00 AM - 5:00 PM</p>
        </div>
        <div>
          <h3 className="mt-6 text-lg font-medium md:font-semibold max-md:tracking-wide text-gray-800">Email</h3>
          <p className="text-lg">info@example.com</p>
        </div>
        <div>
          <h3 className="mt-6 text-lg font-medium md:font-semibold max-md:tracking-wide text-gray-800">Phone</h3>
          <p className="text-lg">(123) 456-7890</p>
        </div>
      </div>
    </div>
    </>
  )
}