import Link from 'next/link'
import { cardData } from './Data/FrequentlyAskedData'
import { ContactSupportOutlined, LocalShipping, Loyalty, Science, HealthAndSafety, AutoAwesome, Medication } from '@mui/icons-material'

export default function FrequentlyAsked() {
  return (
    <section className="px-20 py-20 w-full flex flex-col items-center bg-slate-100">
      <h2 className="home-h2 home-h2-2">Frequently Asked Questions</h2>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {cardData.map((card, index) => (
          <Link key={index} href={`/questions/${index}`}>
            <div className="bg-white p-10 xl:p-12 rounded-lg shadow flex flex-col items-center min-w-60 min-h-32 xl:min-h-40">
              {renderIconByTheme(index)}
              <h3 className="text-lg font-medium">{card.title}</h3>
            </div> 
          </Link>
        ))}
      </div>
    </section>
  )
}

const renderIconByTheme = (index: number) => {
  switch (index % 9) {
    case 0:
      return <ContactSupportOutlined className="fA-icon" />;
    case 1:
      return <LocalShipping className="fA-icon" />;
    case 2:
      return <Loyalty className="fA-icon" />;
    case 3:
      return <Science className="fA-icon" />;
    case 4:
      return <Science className="fA-icon" />;
    case 5:
      return <Science className="fA-icon" />;
    case 6:
      return <HealthAndSafety className="fA-icon" />;
    case 7:
      return <AutoAwesome className="fA-icon" />;
    default:
      return <Medication className="fA-icon" />;
  }
}