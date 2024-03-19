import Link from 'next/link'
import { cardData } from './FrequentlyAskedInfo'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

export default function FrequentlyAsked() {
  return (
    <section className="px-20 py-14 w-full h-full flex flex-col items-center bg-gray-50">
      <h2 className="home-h2">Frequently Asked Questions</h2>
      <div className="grid grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Link key={index} href={card.link}>
            <div className="bg-white p-10 rounded-lg shadow flex flex-col items-center min-w-56 min-h-32">
              <ContactSupportOutlinedIcon className="w-6 h-6 mb-2" />
              <h3 className="text-lg font-medium">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}