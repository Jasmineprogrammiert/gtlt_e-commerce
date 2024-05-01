import Link from 'next/link'
// import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// async function getTestimonial() {
//   // const supabase = createClient();
//   // const { data, error } = await supabase.from('testimonial').select();
//   const supabase = createServerComponentClient({ cookies });

//   if(error) console.log(error.message);
//   return data;
// }

async function getTestimonial() {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from('testimonial').select();

  if(error) console.log(error.message);
  return data;
}

export default async function TestimonialList() {
  const testimonial = await getTestimonial();

  return (
    <>
    <nav>
      <div>
        <h2>Testimonials</h2>
        {/* <p><small>Currently open tickets.</small></p> */}
      </div>
      <Link href="/products/create" className="ml-auto">
        <button className="btn-primary">New Testimonial</button>
      </Link>
    </nav>

    {testimonial && testimonial.map(t => (
      <div key={t.slug} className="card my-5">
        <Link href={`/testimonial/${t.slug}`}>
          <h3>{t.title}</h3>
          <p>{t.body.slice(0, 200)}...</p>
          {/* <div className={`priority ${t.priority}`}>
            {t.priority} priority
          </div> */}
        </Link>
      </div>
    ))}
    {testimonial && testimonial.length === 0 && (
      <p className="text-center">There is not any testimonials.</p>
    )}
    </>
  )
}