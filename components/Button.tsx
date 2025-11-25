import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'green' | 'pill';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed btn-shine";
 
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border border-transparent font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-widest",
    gold: "bg-brand-gold text-black hover:bg-yellow-400 font-bold shadow-[0_5px_15px_rgba(255,215,0,0.2)] px-6 py-3 rounded-sm text-sm uppercase tracking-widest",
    green: "bg-brand-green text-white hover:bg-green-800 font-bold border border-green-700 shadow-[0_5px_15px_rgba(0,100,0,0.3)] px-6 py-3 rounded-sm text-sm uppercase tracking-widest",
    secondary: "bg-brand-surface border border-white/10 text-white hover:bg-white/5 px-6 py-3 rounded-sm text-sm uppercase tracking-widest",
    outline: "bg-transparent border border-white/20 text-gray-400 hover:text-white hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/5 px-6 py-3 rounded-sm text-sm uppercase tracking-widest",
    
    // NEW STYLE FROM IMAGE
    pill: "rounded-full border-2 border-brand-gold bg-gradient-to-r from-[#1a1a1a] to-black text-white hover:text-brand-gold hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] px-8 py-5 text-base md:text-lg font-bold uppercase tracking-wider w-full md:w-auto min-w-[300px]"
  };

  const widthClass = fullWidth && variant !== 'pill' ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};