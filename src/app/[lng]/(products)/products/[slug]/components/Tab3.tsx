import Image from 'next/image'

export default function Tab3() {
  return (
    <>
    <div className="mt-8 md:mt-16">
      <h2 className="text-3xl md:text-[2.5rem] xl:text-5xl tracking-wider text-center mb-7 md:mb-14">Subscription Plan Details</h2>
      <div className="tab3-container">
        <Image 
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D" 
          alt="Product Image" 
          width={150} 
          height={150} 
          className="max-md:hidden object-cover object-center h-full w-full tab3-image"
        />
        <div className="col-span-2 p-12">
          <h2>Month 1<br />Gut Health Test</h2>
          <h2>Day 1</h2>
          <p>
            We ship you a stool sample collection materials once your order is confirmed.
          </p>
          <h2>Day 5 - 10</h2>
          <p>
            You collect and return your stool sample to us. A survey is needed to be filled out to help us understand your health goals and lifestyle.
          </p>
          <h2>Day 11 - 30</h2>
          <p>
            Your sample is sent to our lab, where we analyze your gut microbiome and send you a detailed report. Each formula is carefully crafted from our inventory of over 80+ clinically validated probiotic and prebiotic strains to support your specific health needs.
          </p>
        </div>
      </div>
      <div className="tab3-container">
        <Image 
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D" 
          alt="Product Image" 
          width={150} 
          height={150} 
          className="max-md:hidden object-cover object-center h-full w-full tab3-image"
        />
        <div className="col-span-2 p-12">
          <h2>Month 2<br />Gut Health Test</h2>
          <h2>Day 1</h2>
          <p>
            We ship you a stool sample collection materials once your order is confirmed.
          </p>
          <h2>Day 5 - 10</h2>
          <p>
            You collect and return your stool sample to us. A survey is needed to be filled out to help us understand your health goals and lifestyle.
          </p>
          <h2>Day 11 - 30</h2>
          <p>
            Your sample is sent to our lab, where we analyze your gut microbiome and send you a detailed report. Each formula is carefully crafted from our inventory of over 80+ clinically validated probiotic and prebiotic strains to support your specific health needs.
          </p>
        </div>
      </div>
      <div className="tab3-container">
        <Image 
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D" 
          alt="Product Image" 
          width={150} 
          height={150} 
          className="max-md:hidden object-cover object-center h-full w-full tab3-image"
        />
        <div className="col-span-2 p-12">
          <h2>Month 3<br />Gut Health Test</h2>
          <h2>Day 1</h2>
          <p>
            We ship you a stool sample collection materials once your order is confirmed.
          </p>
          <h2>Day 5 - 10</h2>
          <p>
            You collect and return your stool sample to us. A survey is needed to be filled out to help us understand your health goals and lifestyle.
          </p>
          <h2>Day 11 - 30</h2>
          <p>
            Your sample is sent to our lab, where we analyze your gut microbiome and send you a detailed report. Each formula is carefully crafted from our inventory of over 80+ clinically validated probiotic and prebiotic strains to support your specific health needs.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}