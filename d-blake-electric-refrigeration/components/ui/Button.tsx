import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-primary/40 border border-transparent",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-dark-900 hover:bg-gray-200 border border-transparent"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;