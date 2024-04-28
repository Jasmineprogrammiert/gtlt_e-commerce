import Link from 'next/link'
import Image from 'next/image'
import { BlogData } from './Data/BlogData'
import { BlogData1 } from './Data/BlogData1'
import { BlogData2 } from './Data/BlogData2'
import Dropdown from './components/Dropdown'

export default function BlogPage() {
  return (
    <div className="px-5 py-16 md:p-20 min-h-screen flex flex-col bg-gray-50">
      <h2 className="home-h2 home-h2-2">The GUTolution Blog</h2>
      <p className="text-xl text-gray-800 mb-14">
        The latest ideas, insights, and inspiration, expertly curated to empower you on your health journey. Learn more about systems biology and the many ways the microbiome plays a critical role in your health & wellness.
      </p>
      {BlogData.map((blog, i) => (
        <Link 
          href={`/blog/${i}/headline`} key={i}
          className="md:flex mb-8 relative group"
        >
          <Image 
            src={blog.img}
            alt="Blog Image" 
            height={200}
            width={200}
            className="w-full md:w-1/2 flex items-center h-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-10" 
          />
          <div className="md:w-1/2 px-10 py-12 bg-black text-white relative">
            <p className="uppercase text-gray-500 pb-3.5">Headline</p>
            <h3 className="text-2xl mb-8">
              {blog.title}
            </h3>
            <p className="text-base line-clamp-4">
              {blog.description}
            </p>
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
          </div>
        </Link>
      ))}
      <div className="flex justify-between overflow-auto">
        {BlogData1.map((blog, i) => (
          <Link 
            href={`/blog/${i}/highlight`} key={i}
            className="min-w-[20rem] mr-5"   
          >
            <div className="bg-white shadow-lg mb-4 relative group">
              <Image 
                src={blog.img} 
                alt="Blog Image" 
                width={200}
                height={200}
                className="w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-[10]" 
              />
              <div className="p-5">
                <p className="uppercase text-gray-500 mb-4">Highlight</p>
                <h3 className="text-2xl mb-3">{blog.title}</h3>
                <p className="text-gray-700 line-clamp-3 mb-10">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pt-20 pb-5 md:pb-10">
        <div className="md:flex mb-10">
          <h2 className="md:w-1/2 home-h2 home-h2-2 blog-h2-2">Most Recent</h2>
          {/* <div className="w-1/2 flex justify-end">
            <Dropdown />
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {BlogData2.map((blog, i) => (
            <Link 
              href={`/blog/${i}`} key={i}
              className="bg-white shadow-lg mb-4 group" 
            >
              <Image 
                src={blog.img} 
                alt="Blog Image" 
                width={200}
                height={200}
                className="w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-[10]" 
              />
              <div className="p-5">
                <p className="uppercase text-gray-500 mb-4">Media</p>
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