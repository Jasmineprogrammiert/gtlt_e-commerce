import { CardData } from '../../../components/Data/FrequentlyAskedData'

export default function FrequentlyAskedTemplate({ 
  params,
}: {
  params: {index: string};
}) {
  return (
    <>
    {[CardData[Number(params.index)]].map((card, i) => (
      <section key={i} className="p-20 flex flex-wrap bg-gray-50">
        <div className="w-full p-4 text-center">
          <h3 className="text-5xl tracking-wide mb-16 text-cyan-600">
            {card.title}
          </h3>
          <h4 className="text-3xl tracking-wide mb-7 text-start">
            Articles
          </h4>
        </div>
        {card.subtitles.map((s, subIndex) => (
          <div 
            className="w-1/2 p-4 max-h-60 overflow-y-auto mb-16"
            key={subIndex}
          >
            <h4 className="mb-7 text-lg xl:text-xl font-medium">
              {s.subtitle}
            </h4>
            <p className="text-base leading-snug mb-5">
              {s.paragraphs.p1}
            </p>
            <p className="text-base leading-snug">
              {s.paragraphs.p2}
            </p>
          </div>
        ))}
      </section>
    ))}
    </>
  )
}