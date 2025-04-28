"use client"
import React, { useEffect, useRef, useState } from 'react'
import { SectionBlank } from '../reusable/SectionBlank'
import { tipsForSeller } from '@/src/utils/tipsForSeller'
import { TipsForSellerCard } from './TipsForSellerCard'
import { useIsVisibleRefs } from '@/src/hooks/useIsVisible'

type Positions = { 
  x: number
  y: number
}

export const TipsForSeller = () => {
  const [positionsFakeCards, setPositionsFakeCards] = useState<Positions[]>([])
  const [activeIndexes, setActiveIndexes] = useState<number[]>([])
  const containersRef = useRef<(HTMLDivElement | null)[]>([])

  const visibleRefs = useIsVisibleRefs({ refs: containersRef.current })

  useEffect(() => {
    const handlePositionFakeCards = () => {
      const validContainers = containersRef.current.filter(Boolean) as HTMLDivElement[]
      if (validContainers.length) {
        const positions = validContainers.map(container => ({
          x: container.offsetLeft,
          y: container.offsetTop,
        }))
        setPositionsFakeCards(positions)
      }
    }

    setTimeout(() => {
      handlePositionFakeCards()
    }, 0)

    window.addEventListener('resize', handlePositionFakeCards)
    return () => {
      window.removeEventListener('resize', handlePositionFakeCards)
    }
  }, [])

  // Actualizar qué indexes están visibles
  useEffect(() => {
    const active: number[] = []
    visibleRefs.forEach((isVisible, idx) => {
      if (isVisible) active.push(idx)
    })
    setActiveIndexes(active)
  }, [visibleRefs])

  return (
    <SectionBlank>
      <h4 className="text-2xl font-bold font-manrope w-full text-left">
        Tips para que puedas vender en nuestra plataforma
      </h4>

      <div className="relative flex flex-row flex-wrap gap-8 md:gap-4 items-center justify-center mt-6 min-h-[360px] w-full">
        
        {tipsForSeller.map((tip, index) => {
          const position = positionsFakeCards[index]
          const isActive = activeIndexes.includes(index)
          return (
            <TipsForSellerCard
              key={index}
              {...tip}
              index={index}
              isActive={isActive}
              position={position}
            />
          )
        })}

        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`fake-${index}`}
            ref={(el) => {
              containersRef.current[index] = el
            }}
            className="w-[560px] h-[300px]  rounded-xl "
          />
        ))}
      </div>
    </SectionBlank>
  )
}
