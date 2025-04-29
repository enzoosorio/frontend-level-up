import { ProductImagesOnly } from '@/src/types/Product/individualProduct'
import React from 'react'

type ImagesProps = {
    images? : ProductImagesOnly
}

export const Images = ({ images }: ImagesProps) => {
  return (
        <aside className='flex flex-col items-center justify-center gap-4 w-[90%] min-w-[440px]'>
            <div className='relative col-span-4 w-full h-[550px] bg-primary-gray  overflow-hidden'/>
            <div className='flex flex-row flex-wrap items-center justify-center gap-4 gap-x-4 w-full'>
            <div className='relative col-span-2 w-[calc(50%-8px)] h-[280px] bg-primary-gray overflow-hidden'/>
            <div className='relative col-span-2 w-[calc(50%-8px)] h-[280px] bg-primary-gray overflow-hidden'/>
            <div className='relative col-span-2 w-[calc(50%-8px)] h-[280px] bg-primary-gray overflow-hidden'/>
            <div className='relative col-span-2 w-[calc(50%-8px)] h-[280px] bg-primary-gray overflow-hidden'/>
            </div>
        </aside>
  )
}
