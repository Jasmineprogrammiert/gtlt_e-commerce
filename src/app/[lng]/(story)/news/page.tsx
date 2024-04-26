import Link from 'next/link'
import Image from 'next/image'
import { NewsData } from './Data/NewsData'
import { NewsData1 } from './Data/NewsData1'
import { NewsData2 } from './Data/NewsData2'

export default function News() {
  return (
    <div className="p-20 min-h-screen flex flex-col bg-gray-50">
      <h2 className="home-h2 home-h2-2">The GUTolution News</h2>
      <p className="text-xl text-gray-800 mb-14">
        The latest ideas, insights, and inspiration, expertly curated to empower you on your health journey. Learn more about systems biology and the many ways the microbiome plays a critical role in your health & wellness.
      </p>
      {NewsData.map((news, i) => (
        <Link 
          href={`/news/${i}/headline`} key={i}
          className="flex mb-8 relative group"
        >
          <Image 
            src={news.img}
            alt="Blog Image" 
            height={200}
            width={200}
            className="w-1/2 flex items-center h-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-10" 
          />
          <div className="w-1/2 px-10 py-12 bg-black text-white relative">
            <p className="uppercase text-gray-500 pb-3.5">Headline</p>
            <h3 className="text-2xl mb-8">
              {news.title}
            </h3>
            <p className="text-base line-clamp-4">
              {news.description}
            </p>
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
          </div>
        </Link>
      ))}
      <div className="flex justify-between overflow-auto">
        {NewsData1.map((news, i) => (
          <Link 
            href={`/news/${i}/highlight`} key={i}
            className="min-w-[20rem] mr-5"   
          >
            <div className="bg-white shadow-lg mb-4 relative group">
              <Image 
                src={news.img} 
                alt="Blog Image" 
                width={200}
                height={200}
                className="w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-[10]" 
              />
              <div className="p-5">
                <p className="uppercase text-gray-500 mb-4">Highlight</p>
                <h3 className="text-2xl mb-3">{news.title}</h3>
                <p className="text-gray-700 line-clamp-3 mb-10">{news.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pt-20 pb-10">
        <div className="flex mb-10">
          <h2 className="w-1/2 home-h2 home-h2-2 news-h2-2">Most Recent</h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {NewsData2.map((news, i) => (
            <Link 
              href={`/news/${i}`} key={i}
              className="bg-white shadow-lg mb-4 group" 
            >
              <Image 
                src={news.img} 
                alt="Blog Image" 
                width={200}
                height={200}
                className="w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110 z-[10]" 
              />
              <div className="p-5">
                <p className="uppercase text-gray-500 mb-4">Media</p>
                <h3 className="text-2xl mb-3">{news.title}</h3>
                <p className="text-gray-700 line-clamp-3 mb-10">{news.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}