'use client'

import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'

const sidebarItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '/dashboard.svg' },
  { href: '/farmers', label: 'Farmers', icon: '/farmers.svg' },
  { href: '/cooperatives', label: 'Cooperatives', icon: '/cooperatives.svg' },
  { href: '/settings', label: 'Settings', icon: '/settings.svg' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-20 bg-white h-screen flex flex-col items-center py-8 shadow-md">
      {sidebarItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`w-full flex flex-col items-center justify-center mb-12 last:mb-0 ${
              isActive ? 'text-[#754C29]' : 'text-gray-400'
            }`}
          >
            <div className="w-8 h-8 flex items-center justify-center mb-1">
              <Image 
                src={item.icon} 
                alt={`${item.label} icon`} 
                width={24} 
                height={24} 
                className={isActive ? 'text-[#754C29]' : 'text-gray-400'}
              />
            </div>
            <span className="text-xs">{item.label}</span>
          </Link>
        )
      })}
    </aside>
  )
}