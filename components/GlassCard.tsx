
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverGlow = true }) => {
  return (
    <div 
      className={`glass rounded-2xl p-6 transition-all duration-300 ${hoverGlow ? 'hover:bg-white/10 hover:border-white/20' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
