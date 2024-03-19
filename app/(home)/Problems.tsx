import Image from 'next/image'
import Link from 'next/link'
import problem1 from '../../public/assets/problem-1.jpg'
// MUI
import CoronavirusIcon from '@mui/icons-material/Coronavirus'
import SickIcon from '@mui/icons-material/Sick'
import HotelIcon from '@mui/icons-material/Hotel'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import ElderlyIcon from '@mui/icons-material/Elderly'

export default function Problems() {
  return (
    <section className="px-20 h-screen bg-emerald-50">
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <Image
            src={problem1}
            alt="1st Image"
            className="w-full h-4/5 object-cover rounded-xl"
            priority
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-1">
          <h2 className="home-h2">Have your ever experienced?</h2>
          <p className="leading-relaxed mb-4">
            <CoronavirusIcon className="problems-icon" /> Long Covid<br />
            <SickIcon className="problems-icon" /> Irritable Bowel Syndrome{` (IBS)`}<br />
            <HotelIcon className="problems-icon" /> Sleep Deprivation<br />
            <SentimentVeryDissatisfiedIcon className="problems-icon" /> Tiredness<br />
            <PsychologyAltIcon className="problems-icon" /> Brain Fog<br />
            <ElderlyIcon className="problems-icon" /> Skin Aging<br />
          </p>

          <button className="home-btn">
            <Link href="/learn-more">Learn More</Link>
          </button> 
        </div>
      </div>
    </section>
  )
}