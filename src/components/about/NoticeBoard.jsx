import React from "react";
import { Calendar, ArrowRight, BellRing, Link2 } from "lucide-react";
import aboutData from "../../data/aboutData.json";

const NoticeBoard = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <BellRing size={14} /> Update Center
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Academic <span className="text-blue-600">Notices</span>
          </h2>
        </div>

        {/* Floating List Layout */}
        <div className="space-y-6">
          {aboutData.notices.map((notice) => (
            <div 
              key={notice.id} 
              className="group relative bg-white rounded-2xl border border-slate-100 p-1 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 p-5">
                
                {/* 1. Left Vertical Indicator (Unique Feature) */}
                <div className={`hidden md:block w-1.5 h-16 rounded-full ${notice.category === 'Exam' ? 'bg-orange-500' : 'bg-blue-600'}`}></div>

                {/* 2. Date Section */}
                <div className="flex-shrink-0 text-center md:text-left min-w-[100px]">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter">{notice.date.split(' ')[0]}</p>
                  <p className="text-2xl font-black text-slate-900 leading-none">{notice.date.split(' ')[1].replace(',', '')}</p>
                  <p className="text-slate-400 text-[10px] font-medium uppercase mt-1">2026</p>
                </div>

                {/* 3. Content Section */}
                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
                      {notice.category}
                    </span>
                    {notice.isNew && (
                      <span className="flex items-center gap-1 text-red-600 text-[10px] font-bold uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> New
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                    {notice.title}
                  </h4>
                </div>

                {/* 4. Interactive Action Button */}
                <div className="flex-shrink-0">
                  <button className="flex items-center gap-2 bg-slate-50 text-slate-400 px-5 py-3 rounded-xl font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Link2 size={16} /> View PDF
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/10 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Modern Bottom Link */}
        <div className="mt-12 flex justify-center">
          <button className="group flex items-center gap-3 text-slate-500 font-bold hover:text-blue-600 transition-all">
            Browse All Records 
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ArrowRight size={16} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default NoticeBoard;