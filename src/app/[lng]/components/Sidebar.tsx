import Link from 'next/link'
import { X } from 'lucide-react'
import { 
  Accordion, 
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'
import { products, stories, explore } from './Data/NavbarData';

export default function Sidebar({
  isOpen,
  toggle,
} : {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <>
    <div
      className="px-10 lg:px-20 mr-8 sidebar-container fixed w-full h-full overflow-hidden justify-center bg-gray-50 grid pt-[120px] left-0 z-10"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "-100%"}`,
      }}
    >
      <button className="absolute right-0 p-5" onClick={toggle}><X /></button>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="w-full font-normal tracking-wider text-xl"
          >
            Products
          </AccordionTrigger>
          <AccordionContent>
            <ul className="nav-ul">
              {products.map(p => (
                <li key={p.title}>
                  <Link 
                    href={p.href} 
                    onClick={toggle}
                    className="text-lg text-gray-800 underline underline-offset-4 decoration-gray-600"
                  >
                    {p.title}
                  </Link>
                  <p className="text-gray-600 text-base">{p.description}</p>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger
            className="w-full font-normal tracking-wider text-xl"
          >
            Our Story
          </AccordionTrigger>
          <AccordionContent>
            <ul className="nav-ul">
              {stories.map(s => (
                <li key={s.title}>
                  <Link 
                    href={s.href} 
                    onClick={toggle}
                    className="text-lg text-gray-800 underline underline-offset-4 decoration-gray-600"
                  >
                    {s.title}
                  </Link>
                  <p className="text-gray-600 text-base">{s.description}</p>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger
            className="w-full font-normal tracking-wider text-xl"
          >
            Explore
          </AccordionTrigger>
          <AccordionContent>
            <ul className="nav-ul">
             {explore.map(ex => (
                <li key={ex.title}>
                  <Link 
                    href={ex.href} 
                    onClick={toggle}
                    className="text-lg text-gray-800 underline underline-offset-4 decoration-gray-600"
                  >
                    {ex.title}
                  </Link>
                  <p className="text-gray-600 text-base">{ex.description}</p>
                </li>
              ))} 
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    </>
  )
}