import Image from 'next/image'
import { NewsData2 } from '../Data/NewsData2'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export default function NewsPage({
  params,
}: {
  params: {index: string};
}) {
  return (
    <>
    {[NewsData2[Number(params.index)]].map((news, i) => (
      <div 
        key={i}
        className="px-44 xl:px-52 py-20 bg-gray-50"
      >
        <h1 className="news-h1">{news.title}</h1>
        <div className="flex mb-10">
          <span className="text-base text-gray-600 mr-10"><EditOutlinedIcon /> {news.author}</span>
          <span className="text-base text-gray-600"><AccessTimeIcon /> {news.readingTime} min</span>
        </div>
        <div>
          <h2 className="news-h2">{news.content[0].subtitle}</h2>
          <p className="text-lg mb-5">{news.content[0].paragraphs.p1}</p>
          <p className="text-lg mb-5">{news.content[0].paragraphs.p2}</p>
          {news.content[0].paragraphs.img && (
            <>
            <Image
              src={news.content[0].paragraphs.img}
              alt="News Image"
              width={300} 
              height={300}
              className="h-full w-full object-cover object-center mb-1"
            />
            <p className="text-sm mb-7">{news.content[0].paragraphs.imgTag}</p>
            </>
          )}
        </div>
        <div>
          <h2 className="news-h2">{news.content[1].subtitle}</h2>
          <p className="text-lg mb-5">{news.content[1].paragraphs.p1}</p>
          <p className="text-lg mb-5">{news.content[1].paragraphs.p2}</p>
          {news.content[1].paragraphs.img && (
            <>
            <Image
              src={news.content[1].paragraphs.img}
              alt="News Image"
              width={300} 
              height={300}
              className="h-full w-full object-cover object-center mb-1"
            />
            <p className="text-sm mb-7">{news.content[1].paragraphs.imgTag}</p>
            </>
          )}
        </div>
        <div>
          <h2 className="news-h2">{news.content[2].subtitle}</h2>
          <p className="text-lg mb-5">{news.content[2].paragraphs.p1}</p>
          <p className="text-lg mb-5">{news.content[2].paragraphs.p2}</p>
          {news.content[2].paragraphs.img && (
            <>
            <Image
              src={news.content[2].paragraphs.img}
              alt="News Image"
              width={300} 
              height={300}
              className="h-full w-full object-cover object-center mb-1"
            />
            <p className="text-sm mb-7">{news.content[2].paragraphs.imgTag}</p>
            </>
          )}
          <p className="text-lg mb-5">{news.content[2].paragraphs.p3}</p>
        </div>
      </div>
    ))}
    </>
  )
}