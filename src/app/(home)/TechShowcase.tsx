import Image from 'next/image'
import img1 from '../../../public/assets/techShowCase-1.jpg'
import img2 from '../../../public/assets/techShowCase-2.jpg'

export default function TechShowcase() {
  return (
    <>
    <section className="p-20 flex flex-wrap bg-gray-50">
      <div className="w-full p-4 text-center">
        <h3 className="text-4xl font-semibold my-8 text-cyan-600">
          Methods of Microbiome Analysis
        </h3>
      </div>
      <div className="w-1/2 p-4 pr-8">
        <Image
          src={img1}
          alt="Tech Showcase Image"
          width={800}
          height={400}
          className="object-cover object-center rounded-md mb-4 xl:mb-5"
        />
        <p className="text-lg leading-relaxed">
          In amplicon sequencing, regions within the 16S or 18S ribosomal RNA (rRNA) gene are amplified and sequenced. Bacteria have the 16S rRNA gene while eukaryotes and fungi have the 18S rRNA gene. These regions are highly conserved and allow taxonomic identification at the phylum or genera level, but is less precise at the species level.
        </p>
      </div>
      <div className="w-1/2 p-4 pl-8">
        <p className="text-lg leading-relaxed">
          Whole genome sequencing allows the detection of all genomic components within a biological sample, adding an additional level of clarity to taxonomic classification down to the species and strain levels and annotation of potential metabolic processes. This method effectively identifies and profiles bacteria, fungi, viruses and parasites simultaneously and enables microbial gene profiling that facilitates microbiome functional studies.level of clarity to sequencing -- down to the individual species level.
        </p>
        <Image
          src={img2}
          alt="Tech Showcase Image"
          width={800}
          height={400}
          className="object-cover object-center rounded-md mt-4 xl:mt-5"
        />
      </div>
    </section>
    </>
  )
}