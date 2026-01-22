import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="pt-20 ">
      <div className="container mx-auto">
        <div className="relative bg-slate-900 p-10 md:p-16 overflow-hidden">
          {/* Accent light effect */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Start Your Engineering <br /> <span className="text-blue-500 italic">Career Today!</span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-300">
                  <Phone size={18} className="text-blue-400" />
                  <span className="font-medium">+880 1234-567890 (Principal Office)</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-300">
                  <Mail size={18} className="text-blue-400" />
                  <span className="font-medium">admission@mpi.gov.bd</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-black py-5 px-10 rounded-2xl transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2 group">
                Apply for Admission <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-5 px-10 rounded-2xl border border-slate-700 transition-all">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;