"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'

interface Farmer {
  id: string
  name: string
  phoneNumber: string
  imageUrl: string
}

interface FarmersListProps {
  searchQuery: string
  onSearch: (query: string) => void
}

export default function FarmersList({ searchQuery, onSearch }: FarmersListProps) {
  const [farmers, setFarmers] = useState<Farmer[]>([])

  useEffect(() => {
    // Simulating API call to fetch farmers based on search query
    const fetchFarmers = async () => {
      const response = await fetch(`/api/farmers?search=${searchQuery}`)
      const data = await response.json()
      setFarmers(data)
    }

    fetchFarmers()
  }, [searchQuery])

  return (
    <div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Recherche"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#754C29]"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <div className="space-y-4">
        {farmers.map((farmer) => (
          <div key={farmer.id} className="flex items-center space-x-4 p-3 border-l-4 border-[#754C29] bg-gray-50 rounded-r-md">
            <Image
              src={farmer.imageUrl}
              alt={farmer.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-[#754C29]">{farmer.name}</h3>
              <p className="text-sm text-gray-600">{farmer.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}