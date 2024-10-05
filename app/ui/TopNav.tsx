import Image from 'next/image'
import Link from 'next/link'
import { Bell, Menu, Grid } from 'lucide-react'

export default function TopNav() {
  return (
    <nav className="w-full bg-[#754C29] px-4 py-2 rounded-b-2xl shadow-lg">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <Menu size={24} />
          </button>
          <Link href="/">
            <Image src="/agrosfer-logo.svg" alt="AgroSfer Logo" width={142} height={40} />
          </Link>
          <button className="text-white">
            <Grid size={24} />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <Bell size={24} />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-white text-sm font-medium">Samantha RANA</span>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image 
                src="/happy farmer.jpeg"
                alt="Samantha RANA" 
                width={52} 
                height={52}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}