
import React from 'react';
import GlassCard from './GlassCard';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#070719]/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            ENGINEERED FOR <span className="text-purple-500">EXCELLENCE</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Stop guessing and start building with production-ready resources crafted for the modern Webflow developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <GlassCard key={feature.id} className="group hover:translate-y-[-8px] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                EXPLORE MODULE <span>→</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
