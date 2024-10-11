"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import FarmersList from "../../components/ui/Farmers-Tab/FarmersList";
import FarmerForm from "../../components/ui/Farmers-Tab/FarmerForm";
import farmerData from "../../lib/farmerData";

export default function FarmersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectedFarmerId = params?.id as string;
  const currentTab = pathname.split("/").pop() || "bio";

  useEffect(() => {
    if (!selectedFarmerId && farmerData.length > 0) {
      router.push(`/farmers/${farmerData[0].id}/bio`);
    }
  }, [selectedFarmerId, router]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 gap-6">
      <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-[#754C29]">Farmers List</h2>
        <FarmersList searchQuery={searchQuery} onSearch={handleSearch} />
      </div>
      <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6 overflow-y-auto">
        <FarmerForm farmerId={selectedFarmerId} initialTab={currentTab} />
      </div>
    </div>
  );
}
