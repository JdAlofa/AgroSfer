"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import farmerData from "@/lib/farmerData";
import Bio from "./Farmers-Infos/bio";
import Informations from "./Farmers-Infos/informations";
import Farms from "./Farmers-Infos/farms";

interface Farmer {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
  picture: string;
}

interface FarmerFormProps {
  farmerId?: string;
  initialTab?: string;
}

export default function FarmerForm({
  farmerId,
  initialTab = "bio",
}: FarmerFormProps) {
  const [farmer, setFarmer] = useState<Farmer | null>(null);
  const [activeTab, setActiveTab] = useState(initialTab);
  const router = useRouter();

  useEffect(() => {
    const id = farmerId ? parseInt(farmerId, 10) : 1;
    const selectedFarmer = farmerData.find((f) => f.id === id);
    if (selectedFarmer) {
      setFarmer(selectedFarmer);
    } else {
      const defaultFarmer = farmerData.find((f) => f.id === 1);
      if (defaultFarmer) {
        setFarmer(defaultFarmer);
      }
    }
  }, [farmerId]);

  if (!farmer) {
    return null;
  }

  const tabs = [
    { name: "Bio", href: `/farmers/${farmer.id}/bio` },
    { name: "Informations", href: `/farmers/${farmer.id}/informations` },
    { name: "Farms", href: `/farmers/${farmer.id}/farms` },
    { name: "Finances", href: `/farmers/${farmer.id}/finances` },
    { name: "Tracability", href: `/farmers/${farmer.id}/tracability` },
    { name: "Mapping", href: `/farmers/${farmer.id}/mapping` },
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName.toLowerCase());
    router.push(`/farmers/${farmer.id}/${tabName.toLowerCase()}`);
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 relative overflow-hidden rounded-full">
            <Image
              src={farmer.picture}
              alt={farmer.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#754C29]">{farmer.name}</h2>
            <p className="text-gray-600">{farmer.address}</p>
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
              Verified
            </span>
          </div>
        </div>
        <div className="text-right">
          <button className="bg-[#754C29] text-white px-4 py-2 rounded-md hover:bg-[#5D3D21] transition-colors duration-200">
            Modifier
          </button>
          <p className="mt-2 text-[#754C29]">{farmer.phoneNumber}</p>
        </div>
      </div>
      <nav className="flex space-x-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === tab.name.toLowerCase()
                ? "border-b-2 border-[#754C29] text-[#754C29]"
                : "text-gray-500 hover:text-[#754C29]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </nav>
      {activeTab === "bio" && <Bio farmerId={farmer.id.toString()} />}
      {activeTab === "informations" && (
        <Informations farmerId={farmer.id.toString()} />
      )}
      {activeTab === "farms" && <Farms farmerId={farmer.id.toString()} />}
    </div>
  );
}
