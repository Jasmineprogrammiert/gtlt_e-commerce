import Image from 'next/image'

export default function TechShowcase() {
  return (
    <>
    <section className="px-10 py-16 md:p-20 flex flex-wrap bg-gray-50">
      <div className="w-full mb-5 md:p-4 md:mb-0 text-center">
        <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold xl:font-medium tracking-wide md:my-8 text-cyan-600">
          Methods of Microbiome Analysis
        </h3>
      </div>
      <div className="md:w-1/2 md:p-4 md:pr-8">
        <Image
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFifGVufDB8MHwwfHx8Mg%3D%3D"
          alt="Tech Showcase Image"
          width={800}
          height={400}
          className="object-cover object-center rounded-md mb-4 xl:mb-5"
        />
        <p className="text-lg leading-relaxed">
          In amplicon sequencing, regions within the 16S or 18S ribosomal RNA (rRNA) gene are amplified and sequenced. Bacteria have the 16S rRNA gene while eukaryotes and fungi have the 18S rRNA gene. These regions are highly conserved and allow taxonomic identification at the phylum or genera level, but is less precise at the species level.
        </p>
      </div>
      <div className="md:w-1/2 md:p-4 md:pl-8">
        <p className="mt-5 md:mt-0 text-lg leading-relaxed">
          Whole genome sequencing allows the detection of all genomic components within a biological sample, adding an additional level of clarity to taxonomic classification down to the species and strain levels and annotation of potential metabolic processes. This method effectively identifies and profiles bacteria, fungi, viruses and parasites simultaneously and enables microbial gene profiling that facilitates microbiome functional studies.level of clarity to sequencing -- down to the individual species level.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VsbHxlbnwwfDB8MHx8fDI%3D"
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