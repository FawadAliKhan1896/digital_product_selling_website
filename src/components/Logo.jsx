import React from 'react';

const Logo = ({ theme, className = "w-32 sm:w-40" }) => {
  const isDark = theme === 'dark';
  
  return (
    <svg 
      viewBox="0 0 620 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="logoPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      
      {/* Icon (overlapping blue and purple parallelograms) */}
      <polygon points="35,10 90,10 70,60 15,60" fill="url(#logoBlueGrad)" />
      <polygon points="85,35 140,35 120,85 65,85" fill="url(#logoPurpleGrad)" />
      
      {/* Brand Text */}
      <text 
        x="155" 
        y="70" 
        fontFamily="Manrope, sans-serif" 
        fontSize="54" 
        letterSpacing="-1px"
      >
        <tspan fill={isDark ? "#ffffff" : "#0f172a"} fontWeight="800">Fuweb</tspan>
        <tspan fill="#5044E5" fontWeight="500">solutions</tspan>
      </text>
    </svg>
  );
};

export default Logo;
