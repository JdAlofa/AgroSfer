import React from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

function Profiles() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="flex justify-between h-32">
        <ProfileItem 
          title="Verified profile"
          count={13685}
          trend="up"
        />
        <div className="h-full flex items-center">
          <div className="h-20 w-px bg-[#754C29] opacity-20"></div>
        </div>
        <ProfileItem 
          title="Unverified profile"
          count={9685}
          trend="down"
        />
        <div className="h-full flex items-center">
          <div className="h-20 w-px bg-[#754C29] opacity-20"></div>
        </div>
        <ProfileItem 
          title="Flagged profile"
          count={1685}
          trend="up"
        />
      </div>
    </div>
  )
}

interface ProfileItemProps {
  title: string
  count: number
  trend: 'up' | 'down'
}

function ProfileItem({ title, count, trend }: ProfileItemProps) {
  return (
    <div className="flex flex-col h-full">
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <div className="flex flex-col justify-center flex-grow">
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold text-[#754C29] mr-2">
            {count.toString().padStart(5, '0')}
          </span>
          {trend === 'up' ? (
            <ArrowUp className="text-green-500" size={24} />
          ) : (
            <ArrowDown className="text-red-500" size={24} />
          )}
        </div>
        <p className="text-sm text-gray-600 mt-1 text-center">farmers</p>
      </div>
    </div>
  )
}

export default Profiles