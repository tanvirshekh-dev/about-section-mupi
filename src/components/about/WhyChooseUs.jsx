import React from "react";
import aboutData from "../../data/aboutData.json";
import { ShieldCheck, Microscope, HardHat, Globe } from "lucide-react";
import festImg from "../../../public/images/fest.png"

const WhyChooseUs = () => {
  const icons = [<ShieldCheck />, <Microscope />, <HardHat />, <Globe />];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Why Choose <br /> <span className="text-blue-600 italic">Munshiganj Polytechnic?</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              MPI is committed to bridging the gap between academic knowledge and industry requirements, providing a platform where students transform into skilled engineers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutData.whyChooseUs.map((item, index) => (
                <div key={item.id} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-blue-600 mt-1">{React.cloneElement(icons[index], { size: 24 })}</div>
                  <div>
                    <h5 className="font-bold text-slate-800">{item.title}</h5>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={festImg} 
              alt="Practical Training" 
              className="rounded-[3rem] shadow-2xl border-8 border-white object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
              <p className="text-4xl font-black italic">18+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Legacy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;