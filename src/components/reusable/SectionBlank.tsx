import clsx from 'clsx';
import React from 'react'

interface SectionBlankProps{
    children: React.ReactNode;
    className?: string;
}
export const SectionBlank = ({children, className}: SectionBlankProps) => {
  return (
    <section className={clsx(
      `w-[90%] xl:max-w-[1240px] 2xl:max-w-[1400px]  mx-auto flex flex-col items-center justify-center gap-4  py-10`,
      className
    )}>
        {children}
    </section>
  )
}
