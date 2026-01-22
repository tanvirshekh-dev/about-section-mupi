import aboutData from "../../data/aboutData.json";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-blue-600">
          <Target className="text-blue-600 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600">{aboutData.missionVision.mission}</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-slate-800">
          <Eye className="text-slate-800 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-gray-600">{aboutData.missionVision.vision}</p>
        </div>
      </div>
    </section>
  );
};
export default MissionVision;