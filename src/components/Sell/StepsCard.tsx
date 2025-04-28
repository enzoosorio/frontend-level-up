import React from 'react'
import { StepForCard } from '@/src/types/Sell/stepsForSeller'

export const StepsCard = ({title, description, icon, index, active}: StepForCard) => {
  return (
    <div className={`flex items-center justify-between gap-4  w-[650px] shadow-md ${active ? "bg-primary-green text-white" : "bg-bg-color text-black"}  transition-all duration-300  rounded-lg p-4 ${index % 2 !== 0 ? 'flex-row-reverse' : ''} `}>
          {icon}
          <div className='flex flex-col items-start justify-center gap-2 w-[80%]'>
              <h4 className='text-lg font-bold font-manrope w-full text-left'>{title}</h4>
              <p className='text-sm font-manrope w-full text-left'>{description}</p>
          </div>
    </div>
  )
}
