import Link from 'next/link'
import Image from 'next/image'
import { Team } from './Data/TeamData'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function page() {
  return (
    <>
    <div className="p-20">
      <h2 className="home-h2 home-h2-2">Our Leadership</h2>
      <div className="grid grid-cols-3 gap-5 mt-14">
        {Team.map((team, index) => (
          <div className="bg-gray-100 p-10 mb-4" key={index}>
            <div className="flex items-center justify-start mb-5">
              <Image 
                src={team.imgLink} 
                alt="Profile Image" 
                width={200}
                height={200}
                className="w-16 h-16 rounded-full object-cover object-center" 
              />
              <div className="ml-4">
                <h3 className="text-xl mb-1">{team.name}</h3>
                <p className="text-base text-gray-500">{team.position}</p>
              </div>
            </div>

            <p className="text-gray-800 mb-10">{team.description}</p>
            <Link href={team.link} className="block text-blue-500 font-medium">
              Let{`'`}s Connect <ArrowRightAltIcon />
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}