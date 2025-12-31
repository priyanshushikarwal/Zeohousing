
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <span className="font-black text-white italic">Z</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">ZEOHOUSING</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors">About</a>
          <a href="#features" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors">Tutorials</a>
          <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors">Pricing</a>
          <a href="#community" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors">Community</a>
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Login</button>
          <button className="px-5 py-2 rounded-full border border-purple-500/50 text-purple-400 text-sm font-semibold hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
            Get Access
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass border-b md:hidden p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300">About</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300">Tutorials</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300">Pricing</a>
          <button className="w-full py-3 rounded-xl glass border-purple-500/50 text-purple-400 font-bold">
            Get Access
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
