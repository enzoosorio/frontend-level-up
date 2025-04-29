import { ProductImagesOnly } from '@/src/types/Product/individualProduct'
import React from 'react'

type ImagesProps = {
    images? : ProductImagesOnly
}

export const Images = ({ images }: ImagesProps) => {
  return (
        <aside className='grid grid-cols-4 items-center justify-center gap-4 mt-10'>
            <div className='relative col-span-4 w-[400px] h-[400px] bg-amber-400 rounded-lg overflow-hidden'/>
            <div className='relative col-span-2 w-[200px] h-[200px] bg-amber-700 rounded-lg overflow-hidden'/>
            <div className='relative col-span-2 w-[200px] h-[200px] bg-amber-800 rounded-lg overflow-hidden'/>
            <div className='relative col-span-2 w-[200px] h-[200px] bg-amber-900 rounded-lg overflow-hidden'/>
            <div className='relative col-span-2 w-[200px] h-[200px] bg-amber-600 rounded-lg overflow-hidden'/>
        </aside>
  )
}
