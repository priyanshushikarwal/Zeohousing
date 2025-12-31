
import React from 'react';
import { Twitter, Youtube, Dribbble, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 glass border-t mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center italic font-black text-white">Z</div>
              <span className="text-2xl font-black tracking-tighter text-white">ZEOHOUSING</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium learning platform built for developers who want to move faster, build better, and stand out in the crowded digital landscape.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors">
                <Dribbble size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Weekly Drops</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cloneables</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Style Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Affiliates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-medium uppercase tracking-widest">
          <p>© 2025 ZEOHOUSING. All rights reserved.</p>
          <p>Handcrafted by Webflow Wizards.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
