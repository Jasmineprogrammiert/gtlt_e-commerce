import Image from 'next/image'

export default function TechShowcase() {
  return (
    <>
    <section className="px-20 pt-20 flex flex-wrap bg-gray-50">
      <div className="w-full p-4 text-center">
        <h2 className="home-h2 text-cyan-600">
          The Precision Sequencing Needed to Create Probiotics Specifically for You
        </h2>
        <p className="text-lg">
          Understanding and identifying the method for microbiome analysis is a critial first step in identifying and administering a gut health solution. The evolution of such technology has shown that <strong>Whole Genome Sequencing, utilized by Sun Genomics, consistently provides the most robust and in-depth level of data</strong> including interpretation of individual microbes and uncovering strain level variances between organisms.
        </p>
        <h3 className="text-4xl font-semibold my-8">
          Methods of Microbiome Analysis
        </h3>
      </div>
      <div className="w-1/2 p-4 pr-8">
        <h4 className="bg-blue-900 text-white p-3 rounded-md mb-2 xl:mb-3">
          Amplicon Sequencing<br />
          <span className="text-xl font-medium">16s & 18s Sequencing</span>
        </h4>
        <p className="text-lg leading-relaxed">
          In amplicon sequencing, regions within the 16S or 18S ribosomal RNA (rRNA) gene are amplified and sequenced. Bacteria have the 16S rRNA gene while eukaryotes and fungi have the 18S rRNA gene. These regions are highly conserved and allow taxonomic identification at the phylum or genera level, but is less precise at the species level.
        </p>
      </div>
      <div className="w-1/2 p-4 pl-8">
        <h4 className="bg-cyan-900 text-white p-3 rounded-md mb-2  xl:mb-3">
          Metagenomics<br />
          <span className="text-xl font-medium">Whole Genome Sequencing</span>
        </h4>
        <p className="text-lg leading-relaxed">
          Whole genome sequencing allows the detection of all genomic components within a biological sample, adding an additional level of clarity to taxonomic classification down to the species and strain levels and annotation of potential metabolic processes. This method effectively identifies and profiles bacteria, fungi, viruses and parasites simultaneously and enables microbial gene profiling that facilitates microbiome functional studies.level of clarity to sequencing -- down to the individual species level.
        </p>
      </div>
      <Image
        src="https://flore.com/cdn/shop/files/flore_smart_vector1.webp?v=1677659619"
        alt="Tech Showcase Image"
        width={800}
        height={400}
        className="object-cover object-center"
      />
    </section>
    </>
  )
}