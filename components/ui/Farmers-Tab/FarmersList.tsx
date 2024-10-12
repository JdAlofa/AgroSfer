'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X } from "lucide-react"
import farmerData from "../../../lib/farmerData"

interface Farmer {
  id: number
  name: string
  phoneNumber: string
  picture: string
}

interface FarmersListProps {
  searchQuery: string
  onSearch: (query: string) => void
}

export default function FarmersList({
  searchQuery,
  onSearch,
}: FarmersListProps) {
  const [farmers, setFarmers] = useState<Farmer[]>(farmerData)
  const [selectedFarmerId, setSelectedFarmerId] = useState<number | null>(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const filteredFarmers = farmerData.filter(
      (farmer) =>
        farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        farmer.phoneNumber.includes(searchQuery)
    )
    setFarmers(filteredFarmers)
  }, [searchQuery])

  const handleFarmerClick = (id: number) => {
    setSelectedFarmerId(id)
    setIsSearchFocused(false)
    if (searchInputRef.current) {
      searchInputRef.current.blur()
    }
  }

  const handleClearSearch = () => {
    onSearch('')
    setIsSearchFocused(false)
    if (searchInputRef.current) {
      searchInputRef.current.blur()
    }
  }

  return (
    <div className="relative">
      <div className="relative mb-4">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#754C29]"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <button
          onClick={handleClearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 lg:hidden"
        >
          <X size={20} />
        </button>
      </div>
      <div className="lg:block">
        <div className={`lg:space-y-4 ${(isSearchFocused || searchQuery) ? 'block' : 'hidden'} lg:block absolute lg:static z-10 w-full bg-white border border-gray-300 lg:border-none rounded-md shadow-lg lg:shadow-none max-h-60 lg:max-h-full overflow-y-auto`}>
          {farmers.map((farmer) => (
            <Link
              key={farmer.id}
              href={`/farmers/${farmer.id}/bio`}
              onClick={() => handleFarmerClick(farmer.id)}
            >
              <div
                className={`flex items-center space-x-4 p-3 lg:border-l-4 lg:border-[#754C29] lg:bg-gray-50 lg:rounded-r-md hover:bg-gray-100 transition-all duration-200 ${
                  selectedFarmerId === farmer.id
                    ? "lg:transform lg:translate-y-[-4px] lg:shadow-md"
                    : ""
                }`}
              >
                <div className="w-12 h-12 relative overflow-hidden rounded-full">
                  <Image
                    src={farmer.picture}
                    alt={farmer.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#754C29]">{farmer.name}</h3>
                  <p className="text-sm text-gray-600">{farmer.phoneNumber}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
