import React from 'react';
import { Mail, Linkedin, ArrowUpRight, Sparkles, Award, Star } from 'lucide-react';
import facultyData from '../../data/instructorData.json';

const Instructor = () => {
  const { sectionHeader, leaders } = facultyData;

  return (
    <section className="py-24 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] left-[-5%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER: Bento Style Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-blue-600 w-12 h-[3px] rounded-full"></span>
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">Our Mentors</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900">
              {sectionHeader.title.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {sectionHeader.title.split(' ').slice(1).join(' ')}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-10">
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              {sectionHeader.description}
            </p>
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="faculty" />
                    </div>
                  ))}
               </div>
               <span className="text-sm font-bold text-slate-400">+25 Experts</span>
            </div>
          </div>
        </div>

        {/* INSTRUCTOR GRID: Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <div key={leader.id} className="group relative">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_30px_60px_rgba(59,130,246,0.12)]">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Floating Badge */}
                <div className="absolute top-8 left-8 py-2 px-5 bg-white/80 backdrop-blur-md border border-white rounded-2xl flex items-center gap-2 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                  <Star className="text-yellow-500 fill-yellow-500" size={14} />
                  <span className="text-[10px] font-black uppercase text-slate-700 tracking-wider">Verified Expert</span>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-8 left-8 right-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {leader.designation}
                  </p>
                  <h3 className="text-3xl font-black text-white">
                    {leader.name}
                  </h3>
                  
                  {/* Actions Area */}
                  <div className="flex items-center gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-all delay-100">
                    <a href={leader.social?.linkedin} className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                      <Linkedin size={20} />
                    </a>
                    <a href={leader.social?.email} className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors text-white">
                      <Mail size={20} />
                    </a>
                    <button className="flex-grow bg-blue-600 text-white font-bold py-3 rounded-2xl text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
                      Details <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Numbering Background */}
              <span className="absolute -bottom-10 -right-4 text-[10rem] font-black text-slate-200/40 pointer-events-none -z-10 group-hover:text-blue-100 transition-colors leading-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Footer Section */}
        <div className="mt-32 p-10 md:p-16 rounded-[1.2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-blue-50 rounded-[2rem] flex items-center justify-center text-blue-600">
                <Award size={40} />
              </div>
              <div>
                <h4 className="text-3xl font-black text-slate-900">Become an Instructor</h4>
                <p className="text-slate-500 font-medium">Share your knowledge with the next generation of engineers.</p>
              </div>
           </div>
           <button className="whitespace-nowrap px-10 py-5 bg-slate-900 text-white font-black rounded-[1rem] hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
              Send Your CV
           </button>
        </div>

      </div>
    </section>
  );
};

export default Instructor;