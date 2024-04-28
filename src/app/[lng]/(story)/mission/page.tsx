import Image from 'next/image'
import News from './components/News'

export default function MissionPage() {
  return (
    <>
    <div className="px-5 py-16 md:p-20 flex md:space-x-16 items-center justify-center bg-gray-100">
      <div className="md:w-3/5 h-full p-7 md:p-14 bg-violet-100 bg-opacity-35 rounded-lg shadow-lg z-10">
        <h1 className="text-3xl md:text-5xl mb-8 md:mb-10 tracking-wide">About GUTolution</h1>
        <p className="text-xl mb-8">A biotech startup that focuses on gut microbiome, under the Ideation program of the Hong Kong Science Park</p>
        <p className="text-base mb-5">
          The name GUTolution means {`"`}Gut is the solution to your health{`"`}. We combine science and self-care to provide personalized microbiome health experience, together with {`"`}personal gut partner{`"`} service.
        </p>
        <p className="text-base mb-5">
          Through {`"`}simple home testing{`"`} and {`"`}next-generation sequencing technology{`"`}, we provide you with a unique quantitative view of your microbiome.
        </p>
        <p className="text-base">
          We use our most advanced AI engine to analyze your microbiome DNA, turning {`"`}translational health science{`"`} into {`"`}comprehensive microbiome health score{`"`} and evidence-based lifestyle, food, and probiotic recommendations.
        </p>
      </div>
      <div className="md:w-2/5">
        <Image
          src="https://images.unsplash.com/photo-1619922141822-8972ce55b44b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlciUyMGJhY2tncm91bmR8ZW58MHwxfDB8fHwy"
          alt="Background Image"
          width={200}
          height={200}
          quality={100}
          className="max-md:hidden w-full h-full rounded-full"
        />
      </div>
    </div>
    <News />
    </>
  )
}