import Farmer from "../ui/Dashboard Cards/Farmer";
import Mapping from "../ui/Dashboard Cards/Mapping";
import GenderDistribution from "../ui/Dashboard Cards/GenderDistribution";
import AgeGenderDistribution from "../ui/Dashboard Cards/AgeGenderDistribution";
import FarmerDistribution from "../ui/Dashboard Cards/FarmerDistribution";
import Profiles from "../ui/Dashboard Cards/Profiles";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-screen">
      <div className="grid grid-rows-2 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="grid grid-rows-2 gap-6">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <Farmer />
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6">
              <Mapping />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6">
            <GenderDistribution />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6">
          <AgeGenderDistribution />
        </div>
      </div>

      <div className="grid grid-rows-4 gap-6">
        <div className="row-span-3 bg-white rounded-lg shadow-xl p-6">
          <FarmerDistribution />
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6">
          <Profiles />
        </div>
      </div>
    </div>
  );
}
