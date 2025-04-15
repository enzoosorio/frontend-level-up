import React from 'react'


type ButtonCTAProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
}
export const ButtonCTA = ({children, className, onClick}: ButtonCTAProps) => {
  return (
    <button
    onClick={onClick}
    className={`bg-primary-green cursor-pointer text-white font-manrope text-xl px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all 
        ${className}`}
    >
        {children}
    </button>
  )
}
