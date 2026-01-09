
import React, { ButtonHTMLAttributes, ReactNode, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
}

const Button: FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-200 font-black uppercase tracking-[0.2em] disabled:opacity-50 disabled:cursor-not-allowed border-4 gap-3";
  
  const variants = {
    primary: "bg-white text-black border-white hover:bg-black hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    secondary: "bg-transparent text-white border-zinc-800 hover:border-white",
    danger: "bg-red-900/20 text-red-500 border-red-900/50 hover:bg-red-600 hover:text-white hover:border-red-600",
    ghost: "bg-transparent text-zinc-500 border-transparent hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-5 text-base md:text-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0 scale-125">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
