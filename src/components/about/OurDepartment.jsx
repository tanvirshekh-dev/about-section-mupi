import React from "react";
import { Link } from "react-router-dom";
import departments from "../../data/department.json";
import { ArrowRight, GraduationCap } from "lucide-react";

const OurDepartment = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 border-l-8 border-blue-600 pl-6">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Academic <span className="text-blue-600">Departments</span>
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            Explore our specialized engineering programs at Munshiganj Polytechnic Institute.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {departments.map((department) => (
            <div
              key={department.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Image Area with Badge */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 flex items-center shadow-sm">
                  <GraduationCap size={14} className="mr-1" />
                  MPI
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 min-h-[56px] leading-tight">
                  {department.name}
                </h3>
                
                {/* Short stats or placeholder */}
                <div className="flex items-center gap-4 mt-4 text-gray-500 text-sm border-t border-gray-50 pt-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-800">{department.seat}</span>
                    <span>Seats</span>
                  </div>
                  <div className="w-[1px] h-8 bg-gray-200"></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-800">4 Years</span>
                    <span>Duration</span>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <Link to={`/department/${department.id}`} className="block">
                    <button className="w-full bg-gray-100 group-hover:bg-blue-600 text-gray-700 group-hover:text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Decorative Bottom Line */}
              <div className="h-2 w-0 group-hover:w-full bg-blue-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDepartment;