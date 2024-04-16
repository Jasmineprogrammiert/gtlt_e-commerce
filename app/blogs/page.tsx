import { bigBlogContent, smallBlogsContent, newsContent } from './Data/BlogData'

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Big blog occupying the first 100vh */}
      <div className="h-screen flex flex-col relative">
        <div className="bg-white shadow-lg p-8 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl font-bold mb-4">{bigBlogContent.title}</h2>
          <p className="text-gray-500 mb-2">{bigBlogContent.createdDate}</p>
          <p className="text-gray-700">{bigBlogContent.description}</p>
        </div>
        <div className="h-full w-full absolute top-0 left-0">
          <img src="image-url.jpg" alt="Blog Image" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Section with 5 blogs */}
      <div className="flex justify-between">
        {smallBlogsContent.map((blog, index) => (
          <div className="w-1/5 p-4" key={index}>
            <div className="bg-white shadow-lg p-4 rounded-lg mb-4">
              <img src="image-url.jpg" alt="Blog Image" className="h-32 w-full object-cover mb-4" />
              <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-700">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Big section occupying the first 100vh */}
      <div className="h-screen flex">
        <div className="w-2/5 p-8">
          <h2 className="text-4xl font-bold mb-4">{newsContent.bigSectionHeading}</h2>
          {/* News section */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">{newsContent.newsTitle}</h3>
            <p>{newsContent.newsDescription}</p>
          </div>
        </div>
        <div className="w-3/5 relative">
          <div className="bg-white shadow-lg p-8 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl font-bold mb-4">{newsContent.newsTitle}</h2>
            <p className="text-gray-500 mb-2">{newsContent.newsCreatedDate}</p>
            <p className="text-gray-700">{newsContent.newsDescription}</p>
          </div>
          <div className="h-full w-full absolute top-0 left-0">
            <img src="image-url.jpg" alt="News Image" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}