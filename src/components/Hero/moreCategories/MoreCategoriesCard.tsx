
import React from 'react'

interface MoreCategoriesCardProps {
    title: string
    imageUrl: string
    slug: string
    type: string
}

const getColSpanClass = (type: string) => {
    return type === "Landscape" ? "md:col-span-8" : "md:col-span-4";
  };
export const MoreCategoriesCard = ({title, imageUrl, type} : MoreCategoriesCardProps) => {

    const colSpanClass = getColSpanClass(type);

  return (
    <div className={`hidden md:block relative col-span-12 ${colSpanClass} md:min-h-[550px] min-h-[300px] w-full rounded-lg overflow-hidden group/card cursor-pointer`}>
        <img src={imageUrl} alt={title} className='absolute inset-0 w-full h-full object-cover object-center group-hover/card:scale-110 transition-transform' />
        <div className='absolute inset-0 w-full h-full bg-black/30' />
        <h2 className=' absolute bottom-12
         left-1/2 -translate-x-1/2 font-aboreto uppercase text-2xl lg:text-4xl font-bold z-20 text-center text-white'>{title}</h2>
    </div>
  )
}
