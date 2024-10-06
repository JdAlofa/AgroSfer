"use client"

import { useState, useEffect } from 'react'
import { Filter } from 'lucide-react'
import farmerData from '../../../lib/farmerData'

interface Field {
  name: string;
  product: string;
  area: number;
  providerName: string;
}

interface Farmer {
  id: number;
  fields: Field[];
}

interface FarmsProps {
  farmerId: string;
}

export default function Farms({ farmerId }: FarmsProps) {
  const [farmer, setFarmer] = useState<Farmer | null>(null)

  useEffect(() => {
    const id = parseInt(farmerId, 10)
    const selectedFarmer = farmerData.find(f => f.id === id)
    if (selectedFarmer) {
      setFarmer(selectedFarmer as Farmer)
    }
  }, [farmerId])

  if (!farmer) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-white text-[#754C29] border border-[#754C29] rounded-md hover:bg-gray-100 transition-colors duration-200 flex items-center">
          <Filter className="w-4 h-4 mr-2" />
          Statut parcelle
        </button>
      </div>
      <div className="space-y-4">
        {farmer.fields.map((field, index) => (
          <div key={index} className="bg-[#FDF8F3] p-4 rounded-md">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-2 text-sm">
              <div className="hidden sm:block text-gray-500">Code parcelle:</div>
              <div className="hidden sm:block text-gray-500">Spéculation:</div>
              <div className="hidden sm:block text-gray-500">Superficie parcelle:</div>
              <div className="hidden sm:block text-gray-500">Provider:</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#754C29] font-medium">
              <div>{field.name}</div>
              <div>{field.product}</div>
              <div>{field.area} Ha</div>
              <div className="text-gray-600">{field.providerName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}