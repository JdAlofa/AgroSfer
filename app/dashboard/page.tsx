import Farmer from "../../components/ui/Dashboard-Cards/Farmer";
import Mapping from "../../components/ui/Dashboard-Cards/Mapping";
import GenderDistribution from "../../components/ui/Dashboard-Cards/GenderDistribution";
import AgeGenderDistribution from "../../components/ui/Dashboard-Cards/AgeGenderDistribution";
import FarmerDistribution from "../../components/ui/Dashboard-Cards/FarmerDistribution";
import Profiles from "../../components/ui/Dashboard-Cards/Profiles";

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
