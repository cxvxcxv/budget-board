import React, { type HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GlassCard;
