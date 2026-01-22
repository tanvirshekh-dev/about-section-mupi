import React from "react";
import { ArrowRight } from "lucide-react";
import mpiData from "../../data/mpiData.json";
import Img01 from "../../../public/images/about-01.png";
import Img02 from "../../../public/images/about-02.png";
import Img03 from "../../../public/images/about-03.png";
import Img04 from "../../../public/images/about-04.png";

const AboutOverview = () => {
  const { about } = mpiData;

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:w-[60%] w-full">
          <p className="text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase">
            {about.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {about.title}
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p className="w-full">
              {about.description}
            </p>
            <p className="text-base italic w-full border-l-4 border-blue-500 pl-4 bg-white py-2 shadow-sm rounded-r-lg">
              {about.subDescription}
            </p>
          </div>
          <button className="mt-8 bg-slate-900 text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
            {about.buttonText} <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Images */}
        <div className="lg:w-[40%] w-full relative h-[400px] md:h-[500px]">
          {/* Main Large Image (Top Right) */}
          <div className="absolute top-0 right-0 w-[75%] h-[65%] z-10">
            <img
              src={Img01}
              alt="Main Campus Building"
              className="w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white"
            />
          </div>

          {/* Middle Left top Image */}
          <div className="absolute top-[10%] left-0 w-[30%] h-[25%] z-0 opacity-80">
            <img
              src={Img04}
              alt="Campus Side View"
              className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
            />
          </div>

          {/* Middle Left bottom Image */}
          <div className="absolute top-[40%] left-[5%] w-[45%] h-[40%] z-20">
            <img
              src={Img02}
              alt="Campus Facility"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-2 right-[5%] w-[55%] h-[45%] z-30">
            <img
              src={Img03}
              alt="Campus Front View"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOverview;