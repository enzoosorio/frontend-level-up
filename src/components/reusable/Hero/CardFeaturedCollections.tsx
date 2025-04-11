import React from 'react'

interface CardFeaturedCollectionsProps{
    primaryText : string;
    colSpan?: string;
}

export const CardFeaturedCollections = ({primaryText, colSpan}: CardFeaturedCollectionsProps) => {
  return (
    <div className={`relative group/card flex items-center justify-center min-h-[540px] bg-amber-300 shadow-xl rounded-lg col-span-4 ${colSpan}`}>
        <p className='absolute bottom-10 group-hover/card:right-10 group-hover/card:opacity-100 transition-all opacity-0 -right-10 text-[32px] font-manrope'>{primaryText}</p>
    </div>
  )
}
