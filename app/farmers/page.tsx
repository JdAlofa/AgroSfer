"use client"

import { useState } from 'react'
import FarmersList from "../ui/Farmers Tab/FarmersList"
import FarmerForm from "../ui/Farmers Tab/FarmerForm"

export default function FarmersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 p-6 gap-6">
      <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-[#754C29]">Farmers List</h2>
        <FarmersList searchQuery={searchQuery} onSearch={handleSearch} />
      </div>
      <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6 overflow-y-auto">
        <FarmerForm />
      </div>
    </div>
  )
}