import { useParams, Link } from "react-router-dom";
import departments from "../data/department.json";
import { Clock, Users, BookOpen, Briefcase, GraduationCap, ChevronLeft } from "lucide-react";

const DepartmentDetails = () => {
  const { id } = useParams();
  const department = departments.find((dep) => dep.id === (id));

  if (!department) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-red-500">Department Not Found</h2>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">Go Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section with Overlay */}
      <div className="relative h-[400px] w-full overflow-hidden ">
        <img
          src={department.image}
          alt={department.name}
          className="w-full h-full object-cover transform scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-20">
          <Link to="/" className="flex items-center text-white/80 hover:text-white mb-6 transition-colors w-fit">
            <ChevronLeft size={20} /> Back to All Departments
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            {department.name}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            {department.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4 border-b-4 border-blue-600">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Clock size={28} /></div>
            <div>
              <p className="text-gray-500 text-sm uppercase font-bold tracking-wider">Duration</p>
              <p className="text-xl font-bold text-gray-800">{department.duration}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4 border-b-4 border-green-600">
            <div className="bg-green-100 p-3 rounded-full text-green-600"><Users size={28} /></div>
            <div>
              <p className="text-gray-500 text-sm uppercase font-bold tracking-wider">Total Seats</p>
              <p className="text-xl font-bold text-gray-800">{department.seat} Seats</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4 border-b-4 border-purple-600">
            <div className="bg-purple-100 p-3 rounded-full text-purple-600"><BookOpen size={28} /></div>
            <div>
              <p className="text-gray-500 text-sm uppercase font-bold tracking-wider">Shift</p>
              <p className="text-xl font-bold text-gray-800">{department.shift}</p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Skills Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-blue-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Skills You Will Master</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {department.skills.map((skill, index) => (
                <li key={index} className="flex items-center p-3 bg-blue-50 rounded-xl text-blue-800 font-medium">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Career Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <Briefcase className="text-orange-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Career Opportunities</h3>
            </div>
            <div className="space-y-4">
              {department.career.map((job, index) => (
                <div key={index} className="flex items-center p-4 border border-gray-100 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all cursor-default">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold mr-4">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-semibold">{job}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;