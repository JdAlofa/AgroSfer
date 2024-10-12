"use client";

import { useState, useEffect } from "react";
import { Flag } from "lucide-react";
import farmerData from "@/lib/farmer-data";

interface Farmer {
  id: number;
  studyLevel: string;
  languages: string[];
  dialects: string[];
  technician: string;
  organization: string;
  status: string;
  address: string;
  address2: string;
  address3: string;
}

interface InformationsProps {
  farmerId: string;
}

export default function Informations({ farmerId }: InformationsProps) {
  const [farmer, setFarmer] = useState<Farmer | null>(null);

  useEffect(() => {
    const id = parseInt(farmerId, 10);
    const selectedFarmer = farmerData.find((f) => f.id === id);
    if (selectedFarmer) {
      setFarmer(selectedFarmer as Farmer);
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
    <div className="flex items-center py-2">
      <span className="text-gray-600 w-1/2">{label}</span>
      <div className="flex items-center w-1/2">
        <span className="font-medium text-gray-800">{value}</span>
        <Flag className={`w-4 h-4 ${flagColor} ml-auto`} />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-bold text-[#754C29] mb-4">Compétence</h2>
          <div className="space-y-2">
            <InfoRow
              label="Niveau d'étude:"
              value={farmer.studyLevel || "N/A"}
            />
            <InfoRow
              label="Langue(s):"
              value={farmer.languages?.join(", ") || "N/A"}
              flagColor="text-red-500"
            />
            <InfoRow
              label="Dialecte(s):"
              value={farmer.dialects?.join(", ") || "N/A"}
            />
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#754C29] mb-4">Adresse</h2>
          <div className="space-y-2">
            <InfoRow label="Adresse 1:" value={farmer.address || "N/A"} />
            <InfoRow
              label="Adresse 2:"
              value={farmer.address2 || "N/A"}
              flagColor="text-red-500"
            />
            <InfoRow label="Adresse 3:" value={farmer.address3 || "N/A"} />
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#754C29] mb-4">Autre</h2>
          <div className="space-y-2">
            <InfoRow label="Technicien:" value={farmer.technician || "N/A"} />
            <InfoRow
              label="Organization:"
              value={farmer.organization || "N/A"}
              flagColor="text-red-500"
            />
            <InfoRow label="Statut:" value={farmer.status || "N/A"} />
          </div>
        </section>
      </div>
    </div>
  );
}
