import React from 'react'

interface SectionBlankProps{
    children: React.ReactNode;
}
export const SectionBlank = ({children}: SectionBlankProps) => {
  return (
    <section className='w-[98%] xl:max-w-[1240px] 2xl:max-w-[1600px] mx-auto flex flex-col items-center justify-center gap-4  py-10'>
        {children}
    </section>
  )
}
