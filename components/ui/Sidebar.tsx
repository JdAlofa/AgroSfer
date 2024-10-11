'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const sidebarItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '/SVGs/dashboard.svg' },
  { href: '/farmers', label: 'Farmers', icon: '/SVGs/farmers.svg' },
  { href: '/cooperatives', label: 'Cooperatives', icon: '/SVGs/cooperatives.svg' },
  { href: '/settings', label: 'Settings', icon: '/SVGs/settings.svg' },
]

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out fixed left-0 top-24 z-40 w-20 bg-white h-[calc(100vh-6rem)] flex flex-col items-center py-8 shadow-md lg:translate-x-0`}>
      {sidebarItems.map((item) => {
        const isActive = pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => {
              if (window.innerWidth < 1024) {
                onClose();
              }
            }}
            className={`w-full flex flex-col items-center justify-center mb-12 last:mb-0 transition-all duration-300 ease-in-out ${
              isActive 
                ? 'text-[#754C29] font-bold text-[1.1em]' 
                : 'text-gray-400'
            }`}
          >
            <div className="w-8 h-8 flex items-center justify-center mb-1">
              <Image 
                src={isActive ? `${item.icon.replace('.svg', '-brown.svg')}` : item.icon}
                alt={`${item.label} icon`} 
                width={24} 
                height={24} 
              />
            </div>
            <span className="text-xs">{item.label}</span>
          </Link>
        )
      })}
    </aside>
  )
}