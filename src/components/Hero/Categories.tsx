import React from 'react'
import { SectionBlank } from '@/src/components/reusable/SectionBlank'
import { categoriesHero } from '@/src/utils/categories'
import Image from 'next/image'
	

export const Categories = () => {
  return (
    <SectionBlank>
        <h1 className='text-3xl font-manrope text-center '>Elige una categoría</h1>
        <div className='flex items-center justify-center gap-10 flex-wrap max-w-[1440px] px-20 py-6 mt-10 rounded-lg shadow-xl'>
            {categoriesHero.map((category, index) => (
                <div key={index} className='relative w-[200px] min-h-[200px] cursor-pointer rounded-full p-4 shadow-xl flex overflow-hidden items-end group/individualCategory justify-center pb-10'>
                    <Image src={category.bgImage} width={120} height={120} alt={category.name} className='absolute inset-0 w-full group-hover/individualCategory:scale-120 h-full object-cover rounded-full transition-transform' />
                    <div className='absolute inset-0 z-10 flex items-center justify-center rounded-full w-full h-full bg-black/30'></div>
                    <h2 className='text-xl font-manrope z-30 text-center text-white font-bold'>{category.name}</h2>
                    {/* <p className='text-sm font-manrope text-center'>{category.description}</p> */}
                </div>
            ))}
        </div>
    </SectionBlank>
  )
}
