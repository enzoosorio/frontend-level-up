import Link from 'next/link'
import React from 'react'

interface HamburgerCategoriesProps {
    title : string
    imageUrl : string
    slug : string
}

export const HamburgerCategoriesCard = ({title, imageUrl, slug} : HamburgerCategoriesProps) => {
  return (
    <Link 
    href={`https://localhost:3000/products/${slug}`}
    className='flex relative items-center justify-start min-w-[260px]  min-h-[105px] lg:min-w-[265px] overflow-hidden group/individualCategory lg:min-h-[140px] rounded-lg bg-amber-200 shadow-xl hover:ring hover:ring-primary-green ring-opacity-60 transition-colors duration-200 ease-in-out'>
        <img src={imageUrl} alt={title} className='absolute top-0 left-0 w-full h-full rounded-lg object-cover group-hover/individualCategory:scale-120 transition-transform'/>
        <div className='absolute inset-0 z-10 flex items-center justify-center rounded-lg w-full h-full bg-black/40'></div>
        <p className='text-xs md:text-sm lg:text-lg font-manrope max-w-[400px] px-4 lg:max-w-[15ch] text-left z-[100] text-white  lg:w-full font-semibold '>{title}</p>
    </Link>
  )
}
