import Link from 'next/link'
import Image from 'next/image'

export default function News() {
  return (
    <>
    <div className="px-5 py-16 md:p-20 bg-gray-50">
      <h1 className="home-h2 home-h2-2 tracking-wide">Local Media News Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        <Link href="/" className="bg-white shadow-lg mb-4 group max-h-[30rem]">
          <Image 
            src="https://images.unsplash.com/photo-1553142282-bcc4d3ec4c40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMGJhY2tncm91bmR8ZW58MHwxfDB8fHwy" 
            alt="Blog Image" 
            width={200}
            height={200}
            className="w-full h-[45%] md:h-[65%] xl:h-[60%] object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-[10]" 
          />
          <div className="p-5">
            <h3 className="text-2xl my-3">Blog Title</h3>
            <p className="text-gray-700 line-clamp-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi dignissimos assumenda rem iusto porro modi unde ex eos, accusamus, quod possimus laborum quisquam corrupti perferendis exercitationem tempora natus.</p>
          </div>
        </Link>
        <Link href="/" className="bg-white shadow-lg mb-4 group max-h-[30rem]">
          <Image 
            src="https://images.unsplash.com/photo-1553142282-bcc4d3ec4c40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMGJhY2tncm91bmR8ZW58MHwxfDB8fHwy" 
            alt="Blog Image" 
            width={200}
            height={200}
            className="w-full h-[45%] md:h-[65%] xl:h-[60%] object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-[10]" 
          />
          <div className="p-5">
            <h3 className="text-2xl my-3">Blog Title</h3>
            <p className="text-gray-700 line-clamp-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi dignissimos assumenda rem iusto porro modi unde ex eos, accusamus, quod possimus laborum quisquam corrupti perferendis exercitationem tempora natus.</p>
          </div>
        </Link>
        <Link href="/" className="bg-white shadow-lg mb-4 group max-h-[30rem]">
          <Image 
            src="https://images.unsplash.com/photo-1553142282-bcc4d3ec4c40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMGJhY2tncm91bmR8ZW58MHwxfDB8fHwy" 
            alt="Blog Image" 
            width={200}
            height={200}
            className="w-full h-[45%] md:h-[65%] xl:h-[60%] object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-[10]" 
          />
          <div className="p-5">
            <h3 className="text-2xl my-3">Blog Title</h3>
            <p className="text-gray-700 line-clamp-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi dignissimos assumenda rem iusto porro modi unde ex eos, accusamus, quod possimus laborum quisquam corrupti perferendis exercitationem tempora natus.</p>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}