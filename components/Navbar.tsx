
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onRequestInvite: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRequestInvite }) => {
  const { user, signInWithGoogle, logout } = useAuth();
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
          {!user ? (
            <>
              <button onClick={signInWithGoogle} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Login</button>
              <button onClick={onRequestInvite} className="px-5 py-2 rounded-full border border-purple-500/50 text-purple-400 text-sm font-semibold hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
                Request Invite
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-white text-sm">{user.displayName}</span>
              <button onClick={logout} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Logout</button>
              <img src={user.photoURL || ''} alt="User" className="w-8 h-8 rounded-full border border-purple-500" />
            </div>
          )}
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

          {!user ? (
            <>
              <button onClick={() => { setMobileMenuOpen(false); signInWithGoogle(); }} className="w-full py-3 rounded-xl glass border-purple-500/50 text-purple-400 font-bold">
                Login
              </button>
              <button onClick={() => { setMobileMenuOpen(false); onRequestInvite(); }} className="w-full py-3 rounded-xl glass border-purple-500/50 text-purple-400 font-bold">
                Request Invite
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <img src={user.photoURL || ''} alt="User" className="w-8 h-8 rounded-full border border-purple-500" />
                <span className="text-gray-300">{user.displayName}</span>
              </div>
              <button onClick={() => { setMobileMenuOpen(false); logout(); }} className="w-full py-3 rounded-xl glass border-red-500/50 text-red-400 font-bold">
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
