"use client"
import React, { useEffect, useRef, useState } from 'react'
import { SectionBlank } from '../reusable/SectionBlank'
import { steps } from '@/src/utils/stepsUtils'
import { StepsCard } from './StepsCard'
import { useIsVisibleRefs } from '@/src/hooks/useIsVisible'
export const FollowThisSteps = () => {

  const containersRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndexes, setActiveIndexes] = useState<number[]>([])
  const visibleRefs = useIsVisibleRefs({ refs: containersRef.current, threshold: 0.78 })

  useEffect(() => {
    const active: number[] = []
    visibleRefs.forEach((isVisible, idx) => {
      if (isVisible) active.push(idx)
    })
    setActiveIndexes(active)
  }, [visibleRefs])

  return (
    <SectionBlank>
        <h4 className='text-2xl font-bold font-manrope w-full text-left'>¿Perdido? Sigue estos pasos</h4>
        <div className='flex flex-col items-center justify-center gap-12 w-[80%] my-6 '>
            {steps.map((step, index) => (
                <div 
                ref={(el) => {
                  containersRef.current[index] = el
                }}
                key={index}
                className='flex items-center justify-between  w-full even:flex-row-reverse  gap-4'>
                    <StepsCard 
                    key={step.title} 
                    title={step.title} 
                    description={step.description} 
                    icon={step.icon} 
                    index={index}
                    active={activeIndexes.includes(index)}
                    />
                    <div className='hidden md:block w-[350px] h-max bg-transparent'/>
                </div>
           ))}
        </div>
    </SectionBlank>
  )
}
