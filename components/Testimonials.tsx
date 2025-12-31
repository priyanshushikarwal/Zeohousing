
import React from 'react';
import GlassCard from './GlassCard';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#050510] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <div className="text-xs font-black uppercase tracking-[0.3em] text-purple-500 mb-4">Community Voice</div>
           <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
             LOVED BY <span className="text-indigo-500">EXPERTS</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <GlassCard key={t.id} className="relative pt-12">
              <div className="absolute -top-6 left-8">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-2xl border-4 border-[#050510] object-cover shadow-xl"
                />
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div>
                <div className="text-white font-bold">{t.name}</div>
                <div className="text-purple-400 text-xs font-medium">{t.role}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
