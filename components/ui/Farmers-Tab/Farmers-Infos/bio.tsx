"use client";

import { useState, useEffect } from "react";
import { Flag } from "lucide-react";
import farmerData from "../../../../lib/farmerData";

interface Farmer {
  id: number;
  name: string;
  birthdate: string;
  phoneNumber: string;
  provider: string;
  submissionDate: string;
}

interface BioProps {
  farmerId: string;
}

export default function Bio({ farmerId }: BioProps) {
  const [farmer, setFarmer] = useState<Farmer | null>(null);

  useEffect(() => {
    const id = parseInt(farmerId, 10);
    const selectedFarmer = farmerData.find((f) => f.id === id);
    if (selectedFarmer) {
      setFarmer(selectedFarmer);
    }
  }, [farmerId]);

  if (!farmer) {
    return <div>Loading...</div>;
  }

  const InfoRow = ({
    label,
    value,
    flagColor = "text-gray-400",
  }: {
    label: string;
    value: string;
    flagColor?: string;
  }) => (
    <div className="flex justify-between items-center py-4">
      <span className="text-gray-600">{label}</span>
      <div className="flex items-center space-x-2">
        <span className="font-medium text-gray-800">{value}</span>
        <Flag className={`w-4 h-4 ${flagColor}`} />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg p-6 mt-6 space-y-8">
      <section>
        <h2 className="text-xl font-bold text-[#754C29] mb-6">Personnel</h2>
        <div className="space-y-4">
          <InfoRow label="Nom & Prénom(s):" value={farmer.name} />
          <InfoRow
            label="Date de naissance:"
            value={farmer.birthdate}
            flagColor="text-red-500"
          />
          <InfoRow label="Numéro de téléphone:" value={farmer.phoneNumber} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#754C29] mb-6">
          Data collection
        </h2>
        <div className="space-y-4">
          <InfoRow label="Provider:" value={farmer.provider} />
          <InfoRow
            label="Submition date:"
            value={farmer.submissionDate}
            flagColor="text-red-500"
          />
        </div>
      </section>
    </div>
  );
}
