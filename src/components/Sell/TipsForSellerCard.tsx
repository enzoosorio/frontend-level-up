"use client"
import { TipsForSellerCardProps } from '@/src/types/Sell/tipsForSeller'
import React from 'react'

interface TipsForSellerCardFullProps extends TipsForSellerCardProps {
  isActive: boolean
  position?: { x: number; y: number }
}

export const TipsForSellerCard = ({ title, listItems, bgColor, index, isActive, position }: TipsForSellerCardFullProps) => {
  return (
    <div
      className="absolute flex flex-col items-center justify-center gap-6 w-[100%] md:w-[560px] font-manrope py-8 px-12 rounded-xl"
      style={{
        backgroundColor: bgColor,
        transform: isActive && position
          ? `translate(${position.x}px, ${position.y}px)`
          : 'translate(-50%, -50%)',
          top: '20px',
          left: '0',
        transition: 'transform 0.7s ease, opacity 0.7s ease',
        opacity: isActive ? 1 : 0,
      }}
    >
      <p className="absolute top-4 left-6 text-black text-sm font-bold">{index + 1}</p>
      <h3 className="text-xl md:text-2xl font-bold text-center md:text-left">{title}</h3>
      <ul className="list-disc w-[90%]">
        {listItems.map((item, idx) => (
          <li key={idx} className="text-base text-pretty">{item}</li>
        ))}
      </ul>
    </div>
  )
}
