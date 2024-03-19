<div className="px-20 bg-gray-50">
<h2 className="text-2xl font-bold mb-6">How It Works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="flex flex-col items-center">
    <Image
      src={productAdv}
      alt="1st Image"
      className="w-24 h-24 object-cover rounded-full"
      priority
      width={500}
      height={500}
    />
    <p className="mt-2 text-center">{statements.s1}</p>
  </div>
  <div className="flex flex-col items-center">
    <p className="mb-2 text-center">{statements.s2}</p>
    <Image
      src={productAdv}
      alt="1st Image"
      className="w-24 h-24 object-cover rounded-full"
      priority
      width={500}
      height={500}
    />
  </div>
  <div className="flex flex-col items-center">
    <Image
      src={productAdv}
      alt="1st Image"
      className="w-24 h-24 object-cover rounded-full"
      priority
      width={500}
      height={500}
    />
    <p className="mt-2 text-center">{statements.s3}</p>
  </div>
</div>
</div>