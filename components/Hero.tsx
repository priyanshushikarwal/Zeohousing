import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import GlassCard from './GlassCard';

interface HeroProps {
  onRequestInvite: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRequestInvite }) => {
  const [textCount, setTextCount] = useState(0);
  const p1 = "WEBFLOW ";
  const p2 = "ZEOHOUSING";
  const p3 = " AND WIZARDRY";
  const totalLength = p1.length + p2.length + p3.length;

  useEffect(() => {
    if (textCount < totalLength) {
      const timeout = setTimeout(() => {
        setTextCount(prev => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [textCount, totalLength]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-purple-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-300">New: Mastery Workshop 2.0</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 min-h-[160px] md:min-h-[220px] lg:min-h-[auto]">
            {p1.slice(0, textCount)}
            {textCount > p1.length && (
              <span className="text-gradient-purple">{p2.slice(0, Math.max(0, textCount - p1.length))}</span>
            )}
            {textCount > p1.length + p2.length && (
              <span>{p3.slice(0, Math.max(0, textCount - (p1.length + p2.length)))}</span>
            )}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Giving Webflow developers a competitive edge through interactive tutorials, premium tools, and real-world workflows that turn good designers into elite developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onRequestInvite} className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 group">
              Request Invite
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass text-white rounded-xl font-bold transition-all hover:bg-white/10 flex items-center justify-center gap-2">
              <Play className="w-4 h-4 fill-white" />
              View Pricing
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-[#050510]"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Joined by <span className="text-white font-bold">10,000+</span> elite developers
            </p>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* Abstract 3D shape simulation */}
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            {/* The "Blob" */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-purple-600/40 to-indigo-600/40 rounded-full blur-3xl animate-float opacity-70" />

            {/* The Glass Cards */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {/* Card 1 Wrapper */}
              <div className="absolute top-0 right-0 z-20 animate-float" style={{ animationDelay: '0s' }}>
                <GlassCard className="w-64 h-40 rotate-12 -translate-y-4 hover:rotate-6 transition-transform neon-border-purple shadow-2xl backdrop-blur-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded bg-white/10" />
                    <div className="text-xs font-mono text-purple-400">ZEOHOUSING PLATINUM</div>
                  </div>
                  <div className="text-lg font-mono text-white tracking-widest">**** **** **** 2025</div>
                  <div className="mt-4 flex justify-between">
                    <div className="text-[10px] text-gray-500">HOLDER</div>
                    <div className="text-[10px] text-white">ELITE DEV</div>
                  </div>
                </GlassCard>
              </div>

              {/* Card 2 Wrapper */}
              <div className="absolute bottom-0 left-0 z-30 animate-float" style={{ animationDelay: '2s' }}>
                <GlassCard className="w-72 p-8 -rotate-6 translate-x-4 translate-y-8 hover:rotate-0 transition-transform shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Active Project</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Agency Website Build</h3>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] text-gray-500">PROGRESS</span>
                    <span className="text-[10px] text-white">75%</span>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
