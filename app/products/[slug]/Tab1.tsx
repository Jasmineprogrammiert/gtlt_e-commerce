import Image from 'next/image'

export default function Tab1() {
  return (
    <>
    <div className="px-20 py-14">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">GUTolution™ Precision Probiotics Program</h2>
        <p className="text-gray-600">Sub-heading for Tab 1</p>
        <p className="mt-2 text-gray-700">
          Description for Tab 1 goes here. This can be a longer piece of text providing details about Tab 1.
        </p>
      </div>


      <div className="flex justify-between">
        <div className="w-1/4 p-4 border rounded-lg">
          <h3 className="text-lg font-bold">Card 1 Heading</h3>
          <p className="text-gray-600">Sub-heading for Card 1</p>
          <p className="mt-2 text-gray-700">Description for Card 1 goes here.</p>
          <Image 
            src={"https://images.unsplash.com/photo-1604782206219-3b9576575203?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"}
            alt="Card 1" 
            width={200}
            height={200}
            className="mt-4 h-20 w-20 rounded-full" 
          />
        </div>
        <div className="w-1/4 p-4 border rounded-lg">
          <h3 className="text-lg font-bold">Card 2 Heading</h3>
          <p className="text-gray-600">Sub-heading for Card 2</p>
          <p className="mt-2 text-gray-700">Description for Card 2 goes here.</p>
          <Image 
            src={"https://images.unsplash.com/photo-1604782206219-3b9576575203?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"}
            alt="Card 2" 
            width={200}
            height={200}
            className="mt-4 h-20 w-20 rounded-full" 
          />
        </div>
        <div className="w-1/4 p-4 border rounded-lg">
          <h3 className="text-lg font-bold">Card 3 Heading</h3>
          <p className="text-gray-600">Sub-heading for Card 3</p>
          <p className="mt-2 text-gray-700">Description for Card 3 goes here.</p>
          <Image 
            src={"https://images.unsplash.com/photo-1604782206219-3b9576575203?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"}
            alt="Card 3" 
            width={200}
            height={200}
            className="mt-4 h-20 w-20 rounded-full" 
          />
        </div>
        <div className="w-1/4 p-4 border rounded-lg">
          <h3 className="text-lg font-bold">Card 4 Heading</h3>
          <p className="text-gray-600">Sub-heading for Card 4</p>
          <p className="mt-2 text-gray-700">Description for Card 4 goes here.</p>
          <Image 
            src={"https://images.unsplash.com/photo-1604782206219-3b9576575203?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBwcm9kdWN0fGVufDB8MXwwfHx8Mg%3D%3D"}
            alt="Card 4" 
            width={200}
            height={200}
            className="mt-4 h-20 w-20 rounded-full" 
          />
        </div>
      </div>
    </div>
    
    </>
  )
}
