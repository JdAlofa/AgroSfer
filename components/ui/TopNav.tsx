import Image from 'next/image'
import Link from 'next/link'
import { Bell, Menu, Grid } from 'lucide-react'

interface TopNavProps {
  toggleSidebar: () => void;
}

export default function TopNav({ toggleSidebar }: TopNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#754C29] px-4 py-2 rounded-b-2xl shadow-lg">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-white lg:hidden" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
          <Link href="/">
            <Image src="/SVGs/agrosfer-logo.svg" alt="AgroSfer Logo" width={142} height={40} />
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
            <span className="text-white text-sm font-medium hidden md:inline">Samantha RANA</span>
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <Image 
                src="/Farmers-Images/happy farmer.jpeg"
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