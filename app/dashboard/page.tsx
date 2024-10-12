import Farmer from "@/components/ui/dashboard/Farmer";
import Mapping from "@/components/ui/dashboard/Mapping";
import GenderDistribution from "@/components/ui/dashboard/GenderDistribution";
import AgeGenderDistribution from "@/components/ui/dashboard/AgeGenderDistribution";
import FarmerDistribution from "@/components/ui/dashboard/FarmerDistribution";
import Profiles from "@/components/ui/dashboard/Profiles";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-screen">
      <div className="grid grid-rows-2 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="grid grid-rows-2 gap-6">
              <Farmer />
              <Mapping />
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6">
            <GenderDistribution />
          </div>
        </div>
          <AgeGenderDistribution />
      </div>

      <div className="grid grid-rows-4 gap-6">
        <div className="row-span-3 bg-white rounded-lg shadow-xl">
          <FarmerDistribution />
        </div>
          <Profiles />
      </div>
    </div>
  );
}
