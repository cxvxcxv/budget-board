import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
