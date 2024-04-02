import ImgGallery from './ImgGallery'
 
export const dynamic = 'force-dynamic';

export default function Products() {
  return (
    <>
    <div>
      <ImgGallery images={Image} />
    </div>
    </>
  )
}