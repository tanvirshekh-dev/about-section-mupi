import React from "react";
import aboutData from "../../data/aboutData.json";
import { Monitor, Library, Zap, Cpu } from "lucide-react";

const Facilities = () => {
  const icons = [<Monitor />, <Library />, <Zap />, <Cpu />];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-2">Campus Facilities</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.facilities.map((item, i) => (
            <div key={i} className="group p-8 text-center border border-slate-100 rounded-[2rem] hover:bg-blue-600 transition-all duration-500 shadow-sm hover:shadow-blue-200">
              <div className="w-20 h-20 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                {React.cloneElement(icons[i], { size: 36 })}
              </div>
              <h4 className="font-bold text-2xl mb-3 text-slate-800 group-hover:text-white transition-colors tracking-tight">
                {item.title}
              </h4>
              <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;