import Image from 'next/image'
import Link from 'next/link'
import lab1 from '../../public/assets/lab-1.jpg'

export default function TestIncludes() {
  return (
    <section className="px-20 h-screen bg-emerald-50">
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="home-h2">Gut Microbiome Testing Package</h2>
          <p className="leading-relaxed mb-4">
            This is an innovative testing service designed to help you understand the health of your gut. The package includes a simple gut sample collection tool and a detailed testing report which will show your gut microbiome composition and related health information.
            <br /><br />
            The testing principle is that we will analyze your gut sample, identify and count different types of microorganisms in the sample. We will use advanced sequencing technology and analysis tools to help you understand your gut microbiome composition, which will provide you with important information about your health and lifestyle.
            <br /><br />
            The potential benefits of this testing package include:
          </p>
          <ol className="leading-relaxed mb-4">
            <li>
              1. Personalized nutrition and lifestyle recommendations to help you improve gut health and prevent chronic diseases
            </li>
            <li>
              2. Help you understand potential health risks and take early measures to prevent them
            </li>
            <li>
              3. Provide important data and support for academic research, promoting scientific progress and development.
            </li>
          </ol>
          <p className="leading-relaxed mb-5">
            Book your gut microbiome testing now to better understand your gut health and receive personalized health recommendations every day. Let your life be healthier and more energetic!
          </p>
          <button className="home-btn">
            <Link href="/more-details">More Details</Link>
          </button> 
        </div>
        <div className="col-span-1">
          <Image
            src={lab1}
            alt="1st Image"
            className="w-full h-full object-cover"
            priority
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}