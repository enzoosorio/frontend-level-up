import React, { RefObject, useEffect, useState } from 'react'

interface UseIsVisibleRefsProps {
  refs: (HTMLDivElement | null)[]
  threshold?: number
}

export const useIsVisibleRefs = ({ refs, threshold = 0.3 }: UseIsVisibleRefsProps) => {
  const [isVisibleArray, setIsVisibleArray] = useState<boolean[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisibleArray((prev) => {
        const newVisibility = [...prev]
        entries.forEach((entry) => {
          const index = refs.findIndex(ref => ref === entry.target)
          if (index !== -1) {
            newVisibility[index] = entry.intersectionRatio >= threshold
          }
        })
        return newVisibility
      })
    }, { 
      threshold: [threshold],
      rootMargin: '-10% 0px'
    })

    refs.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    setIsVisibleArray(refs.map(() => false))

    return () => {
      refs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [refs, threshold])

  return isVisibleArray
}
