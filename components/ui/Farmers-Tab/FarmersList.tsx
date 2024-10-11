"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import farmerData from "../../../lib/farmerData";

interface Farmer {
  id: number;
  name: string;
  phoneNumber: string;
  picture: string;
}

interface FarmersListProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export default function FarmersList({
  searchQuery,
  onSearch,
}: FarmersListProps) {
  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [selectedFarmerId, setSelectedFarmerId] = useState<number | null>(null);

  useEffect(() => {
    // Filter farmers based on search query
    const filteredFarmers = farmerData.filter(
      (farmer) =>
        farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        farmer.phoneNumber.includes(searchQuery)
    );
    setFarmers(filteredFarmers);
  }, [searchQuery]);

  const handleFarmerClick = (id: number) => {
    setSelectedFarmerId(id);
  };

  return (
    <div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#754C29]"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
      <div className="space-y-4">
        {farmers.map((farmer) => (
          <Link
            key={farmer.id}
            href={`/farmers/${farmer.id}`}
            onClick={() => handleFarmerClick(farmer.id)}
          >
            <div
              className={`flex items-center space-x-4 p-3 border-l-4 border-[#754C29] bg-gray-50 rounded-r-md hover:bg-gray-100 transition-all duration-200 ${
                selectedFarmerId === farmer.id
                  ? "transform translate-y-[-4px] shadow-md"
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
  );
}
