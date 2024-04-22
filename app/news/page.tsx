import Link from 'next/link'
import Image from 'next/image'
import { NewsData } from './Data/NewsData'

export default function BlogPage() {
  return (
    <div className="p-20 min-h-screen flex flex-col bg-gray-50">
      <h2 className="home-h2 blog-h2">The GUTolution News</h2>
      <p className="text-xl text-gray-800 mb-14">
        The latest ideas, insights, and inspiration, expertly curated to empower you on your health journey. Learn more about systems biology and the many ways the microbiome plays a critical role in your health & wellness.
      </p>

      <Link href="/" className="flex mb-8 relative group">
        <Image 
          src="https://images.unsplash.com/photo-1566146991394-b09a95e80d17?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpc3l8ZW58MHwwfDB8fHwy"
          alt="Blog Image" 
          height={200}
          width={200}
          className="w-1/2 flex items-center h-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-10" 
        />
        <div className="w-1/2 px-10 py-12 bg-black text-white relative">
          <p className="uppercase text-gray-500 pb-3.5">Research</p>
          <h3 className="text-2xl mb-8">
            To Eat, or Not to Eat Spinach: That is the Question with Oxalates
          </h3>
          <p className="text-base line-clamp-4">
            In order to personalize your nutrition recommendations and health products, you{`'`}ll start with one of our Intelligence tests. Based on millions of data points analyzed from your gene expressions, your action plan will focus on the root causes of microbial imbalance and inflammation.
          </p>
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
        </div>
      </Link>

      <div className="flex justify-between overflow-auto">
        {NewsData.map((blog, index) => (
          <Link href="/" className="min-w-[20rem] mr-5" key={index}>
            <div className="bg-white shadow-lg mb-4 relative group">
              <Image 
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8MHwwfHx8Mg%3D%3D" 
                alt="Blog Image" 
                width={200}
                height={200}
                className="w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-[10]" 
              />
              <div className="p-5">
                <p className="uppercase text-gray-500 mb-4">Lifestyle</p>
                <h3 className="text-2xl mb-3">{blog.title}</h3>
                <p className="text-gray-700 line-clamp-3 mb-10">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pt-20 pb-10">
        <div className="flex mb-10">
          <h2 className="w-1/2 home-h2 blog-h2">Most Recent</h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {NewsData.map((blog, index) => (
            <Link href="/" className="bg-white shadow-lg mb-4 group" key={index}>
              <Image 
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8MHwwfHx8Mg%3D%3D" 
                alt="Blog Image" 
                width={200}
                height={200}
                className="w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-[10]" 
              />
              <div className="p-5">
                <p className="uppercase text-gray-500 mb-4">Lifestyle</p>
                <h3 className="text-2xl mb-3">{blog.title}</h3>
                <p className="text-gray-700 line-clamp-3 mb-10">{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}