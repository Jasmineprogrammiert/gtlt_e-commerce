import Image from 'next/image'

export default function Tab1() {
  return (
    <>
    <div className="mt-16">
      <div className="mb-4">
        <h2 className="text-3xl xl:text-4xl tracking-wide mb-4">GUTolution™ Adult</h2>
        <h2 className="text-4xl xl:text-5xl mb-7">Precision Probiotics Program</h2>
        <p className="text-lg text-gray-700 mb-10">
          With <b>4 steps</b> customized probiotics, the GUTolution Precision Probiotics Program is an affordable personalized microbiome health solution for reversing chronic illness at home.
        </p>
      </div>
      <div className="flex space-x-6">
        <div className="tab1-container-1">
          <h3>Step 1</h3>
          <p className="text-gray-900 uppercase mb-4">Sample Collection</p>
          <p className="mt-2 text-gray-700">
            GUTolution Microbiome Gut Test equips you to collect and send a micro-stool sample discreetly and in the comfort of your own home.
          </p>
          <Image 
            src={"https://images.unsplash.com/photo-1604782206219-3b9576575203?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"}
            alt="Card 1" 
            width={200}
            height={200}
            className="h-20 w-20 rounded-full absolute bottom-5 right-5" 
          />
        </div>

        <div className="tab1-container-2">
          <Image 
            src={"https://images.unsplash.com/photo-1604782206219-3b9576575203?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"}
            alt="Card 2" 
            width={200}
            height={200}
            className="h-20 w-20 rounded-full mb-5" 
          />
          <p className="text-gray-900 uppercase mb-4">Sample Analysis</p>
          <p className="mt-2 text-gray-700">
            Receieve your comprehensive report by email and use the GUTolution app to learn everything about your gut and customized recommendations.
          </p>
          <h3 className="text-2xl font-bold tracking-wide absolute bottom-5 right-5">Step 2</h3>
        </div>
        
        <div className="tab1-container-1">
          <h3>Step 3</h3>
          <p className="text-gray-900 uppercase mb-4">Product Formulation</p>
          <p className="mt-2 text-gray-700">
            Using the microbiome results and your diet record, we put together a custom blend of probiotics and prebiotics to improve your gut health.
          </p>
          <Image 
            src={"https://images.unsplash.com/photo-1604782206219-3b9576575203?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"}
            alt="Card 1" 
            width={200}
            height={200}
            className="h-20 w-20 rounded-full absolute bottom-5 right-5" 
          />
        </div>
        <div className="tab1-container-2">
          <Image 
            src={"https://images.unsplash.com/photo-1604782206219-3b9576575203?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"}
            alt="Card 2" 
            width={200}
            height={200}
            className="h-20 w-20 rounded-full mb-5" 
          />
          <p className="text-gray-900 uppercase mb-4">Progress</p>
          <p className="mt-2 text-gray-700">
            Arrange private consultation with our scientist to get customized suggestions. Use the web portal to track how you’re feeling and improving each week. Retest with a low cost every 6 months.
          </p>
          <h3 className="text-2xl font-bold tracking-wide absolute bottom-5 right-5">Step 4</h3>
        </div>
      </div>
    </div>
    
    </>
  )
}