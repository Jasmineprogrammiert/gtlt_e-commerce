import { cardData } from '../../components/FrequentlyAskedData'

export default function FrequentlyAskedTemplate({ 
  params 
}: {
  params: {index: string};
}) {
  return (
    <>
    {[cardData[Number(params.index)]].map((card, i) => (
      <section key={i} className="p-20 flex flex-wrap bg-gray-50">
        <div className="w-full p-4 text-center">
          <h3 className="text-4xl font-semibold mb-16 text-cyan-600">
            {card.title}
          </h3>
          <h4 className="text-2xl font-medium mb-4 text-start">
            Articles
          </h4>
        </div>

        <div className="w-1/2 p-4 pr-8">
          <h4 className="mb-2 xl:mb-3 text-lg font-medium">
            How Does Gutolution Work
          </h4>
          <p className="text-base leading-snug line-clamp-3">
            In amplicon sequencing, regions within the 16S or 18S ribosomal RNA (rRNA) gene are amplified and sequenced. Bacteria have the 16S rRNA gene while eukaryotes and fungi have the 18S rRNA gene. These regions are highly conserved and allow taxonomic identification at the phylum or genera level, but is less precise at the species level.
          </p>
        </div>
        <div className="w-1/2 p-4 pl-8">
          <h4 className="mb-2 xl:mb-3 text-lg font-medium">
            What are the differences between the Gut, Health, and Full Body Intelligence tests?
          </h4>
          <p className="text-base leading-snug line-clamp-3">
            Whole genome sequencing allows the detection of all genomic components within a biological sample, adding an additional level of clarity to taxonomic classification down to the species and strain levels and annotation of potential metabolic processes. This method effectively identifies and profiles bacteria, fungi, viruses and parasites simultaneously and enables microbial gene profiling that facilitates microbiome functional studies.level of clarity to sequencing -- down to the individual species level.
          </p>
        </div>
      </section>
    ))}
    </>
  )
}