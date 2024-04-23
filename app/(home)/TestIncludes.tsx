import Image from 'next/image'
import Link from 'next/link'

export default function TestIncludes() {
  return (
    <>
    <section className="p-20 text-white testIncludes">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <h2 className="text-5xl mb-10 tracking-wider xl:tracking-widest">Gut Microbiome<br /> Testing Package</h2>
          <p className="mb-6">
            This is an innovative testing service designed to help you understand the health of your gut. The package includes a simple gut sample collection tool and a detailed testing report which will show your gut microbiome composition and related health information.
          </p>
          <p className="mb-12">
            The testing principle is that we will analyze your gut sample, identify and count different types of microorganisms in the sample. We will use advanced sequencing technology and analysis tools to help you understand your gut microbiome composition, which will provide you with important information about your health and lifestyle.
          </p>
          <h2 className="text-3xl mb-6 tracking-wider xl:tracking-widest">Benefit Includes:</h2>
          <ol className="leading-relaxed mb-4 list-decimal list-inside">
            <li>
              Personalized nutrition and lifestyle recommendations to help you improve gut health and prevent chronic diseases.
            </li>
            <li>
              Help you understand potential health risks and take early measures to prevent them.
            </li>
            <li>
              Provide important data and support for academic research, promoting scientific progress and development.
            </li>
          </ol>
          <p className="mt-6 mb-12">
            Book your gut microbiome testing now to better understand your gut health and receive personalized health recommendations every day.<br /> Let your life be healthier and more energetic!
          </p>
          <button className="home-btn">
            <Link href="/tech">More Details</Link>
          </button> 
        </div>
        <div className="col-span-1">
          <Image
            src="https://images.unsplash.com/photo-1639772823849-6efbd173043c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFifGVufDB8MXwwfHx8Mg%3D%3D"
            alt="1st Image"
            className="w-full h-full object-cover rounded"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
    </>
  )
}