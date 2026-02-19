"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500",
    secondary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700"
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg"
  };

  if (href) {
    return (
      <Link href={href} legacyBehavior passHref>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
          {...props as any}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
