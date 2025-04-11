import React from 'react'
import { SectionBlank } from '../reusable/SectionBlank'
import { CardFeaturedCollections } from '../reusable/Hero/CardFeaturedCollections'
import Image from 'next/image'

export const FeaturedCollections = () => {
  return (
    <SectionBlank>
        <div className='w-full flex items-center justify-start '>
            <h1 className='text-5xl font-amiko max-w-[350px] text-left  '>Colecciones destacadas</h1>
        </div>
        <div className='grid grid-cols-6 items-center justify-center gap-8 w-full mt-4'>
            <CardFeaturedCollections primaryText='Ropa deportiva' colSpan='col-span-4'/>
            {/* <div className='relative flex items-center justify-center min-h-[540px] bg-amber-300 shadow-xl rounded-lg col-span-4'>
                Ropa deportiva
            </div> */}
            <div className='relative flex items-center justify-center min-h-[540px] bg-red-300 shadow-xl rounded-lg col-span-2'>
                <Image
                src={'/Hero/images/electronicsw.webp'}
                width={120}
                height={120}
                alt='Electronics'
                className='absolute inset-0 -z-10 w-full group-hover/individualCategory:scale-120 h-full object-cover rounded-full transition-transform'
                />
                b
            </div>
            <div className='relative flex items-center justify-center min-h-[540px] bg-fuchsia-300 shadow-xl rounded-lg col-span-2'>
                d
            </div>
            <div className='relative flex items-center justify-center min-h-[540px] bg-blue-300 shadow-xl rounded-lg col-span-4'>
                c
            </div>

        </div>
    </SectionBlank>
  )
}
 