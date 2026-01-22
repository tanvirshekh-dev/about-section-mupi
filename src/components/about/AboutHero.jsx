import aboutData from "../../data/aboutData.json";
import { Building2, MapPin } from "lucide-react";
import heroImg from "../../../public/images/campus-001.png";

const AboutHero = () => {
  return (
    <section className="relative h-[400px] w-full flex items-center justify-center bg-slate-900 overflow-hidden text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImg} 
          className="w-full h-full object-cover opacity-50" 
          alt="Campus" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* max-w-3xl এর সাথে mx-auto যোগ করা হয়েছে কন্টেন্ট মাঝে আনার জন্য */}
        <div className="max-w-3xl mx-auto">
          {/* Simple Tag */}
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">
            About Our Institute
          </p>
          
          {/* Clean Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
            {aboutData.hero.title}
          </h1>

          {/* Simple Info Row - justify-center ব্যবহার করা হয়েছে আইটেমগুলো মাঝে রাখতে */}
          <div className="flex flex-wrap justify-center gap-8 text-slate-300 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600/20 p-2 rounded-lg">
                <Building2 size={20} className="text-blue-400" />
              </div>
              <span className="font-medium">{aboutData.hero.subTitle}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-blue-600/20 p-2 rounded-lg">
                <MapPin size={20} className="text-blue-400" />
              </div>
              <span className="font-medium">{aboutData.hero.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;