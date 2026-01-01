
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GlassCard from './components/GlassCard';

import InviteModal from './components/InviteModal';

import { useAuth } from './context/AuthContext';

import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const { user, signInWithGoogle } = useAuth();
  const [isInviteModalOpen, setIsInviteModalOpen] = React.useState(false);

  useEffect(() => {
    // Basic implementation of smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  const handleOpenInvite = () => setIsInviteModalOpen(true);

  if (user) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-[#050510] selection:bg-purple-500 selection:text-white">
      <Navbar onRequestInvite={handleOpenInvite} />

      <main>
        <Hero onRequestInvite={handleOpenInvite} />

        {/* Social Proof Stats */}
        <section className="py-12 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard className="text-center py-10" hoverGlow={false}>
                <div className="text-4xl font-black text-white mb-2 tracking-tight">10,000+</div>
                <div className="text-xs uppercase font-bold tracking-widest text-purple-400">Developers Learning</div>
              </GlassCard>
              <GlassCard className="text-center py-10" hoverGlow={false}>
                <div className="text-4xl font-black text-white mb-2 tracking-tight">Top Rated</div>
                <div className="text-xs uppercase font-bold tracking-widest text-indigo-400">Freelancers & Agencies</div>
              </GlassCard>
              <GlassCard className="text-center py-10" hoverGlow={false}>
                <div className="text-4xl font-black text-white mb-2 tracking-tight">Weekly</div>
                <div className="text-xs uppercase font-bold tracking-widest text-cyan-400">Premium Updates</div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                WE ARE THE <span className="text-gradient-purple">SECRET SAUCE</span> OF SUCCESSFUL BUILDS.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                ZEOHOUSING is a premium learning platform built for developers who want to move faster, build better, and stand out. We don't just teach Webflow; we teach you how to master the web through the lens of a professional engineer.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-black italic">Z</div>
                <div>
                  <div className="text-white font-bold">Founded by Experts</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Built for the community</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <GlassCard className="h-64 flex flex-col justify-end">
                  <div className="text-xs text-purple-400 font-bold mb-2">01</div>
                  <div className="text-white font-bold">Performance First</div>
                </GlassCard>
                <GlassCard className="h-48 flex flex-col justify-end">
                  <div className="text-xs text-indigo-400 font-bold mb-2">02</div>
                  <div className="text-white font-bold">Clean Architecture</div>
                </GlassCard>
              </div>
              <div className="space-y-4">
                <GlassCard className="h-48 flex flex-col justify-end">
                  <div className="text-xs text-cyan-400 font-bold mb-2">03</div>
                  <div className="text-white font-bold">Elite Animations</div>
                </GlassCard>
                <GlassCard className="h-64 flex flex-col justify-end">
                  <div className="text-xs text-pink-400 font-bold mb-2">04</div>
                  <div className="text-white font-bold">Rapid Prototyping</div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Pricing onRequestInvite={handleOpenInvite} />
        <Testimonials />
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="relative rounded-[40px] overflow-hidden glass p-12 lg:p-24 text-center neon-border-purple">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-transparent -z-10" />
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                UNLEASH YOUR <br /><span className="text-gradient-purple">INNER WIZARD</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
                Join 10,000+ developers who have already taken the leap into premium Webflow mastery.
              </p>
              {!user ? (
                <button onClick={signInWithGoogle} className="px-12 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black text-lg transition-all shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  Get Started Today
                </button>
              ) : (
                <button className="px-12 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black text-lg transition-all shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  Go to Dashboard
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <InviteModal isOpen={isInviteModalOpen} onClose={() => setIsInviteModalOpen(false)} />
    </div>
  );
};

export default App;
