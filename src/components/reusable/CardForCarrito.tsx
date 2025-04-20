import Link from 'next/link'
import React from 'react'

interface CardForCarritoProps {
    productName: string
    category: string
    slug: string
    link: string
    image: string
    price : number
    quantity : number
}

export const CardForCarrito = ({productName, category, slug, link, image, price, quantity} : CardForCarritoProps) => {
  return (
    <div className='flex items-center justify-center gap-4 cardBackground  p-6 min-w-[98%] mx-auto h-[200px]'>
        <img src={image} alt={productName} className='w-[90px] h-full object-cover'/>
        <div className='flex flex-col items-start justify-center gap-4 '>
            <Link href={link} className='text-lg max-w-[10ch] min-w-[10ch] underline hover:font-semibold transition-all font-manrope'>{productName}</Link>
            <p className='text-xs font-manrope text-black/60'> {category}</p>
            <div className='flex items-center justify-center gap-6 rounded-full border border-black'>
                <button className='text-lg bg-white/85 hover:bg-white transition-colors w-[32px] h-[32px] rounded-tl-full rounded-bl-full font-aboreto font-semibold cursor-pointer'>
                    -
                </button>
                <p className='text-base font-manrope text-black/60 cursor-default' aria-disabled='true'>{quantity}</p>
                <button className='text-lg bg-white/85 hover:bg-white transition-colors w-[32px] h-[32px] rounded-tr-full rounded-br-full font-aboreto font-semibold cursor-pointer '>
                    +
                </button>
            </div>
        </div>
        <div className='flex flex-col items-center justify-between min-h-full '>
            <button className='px-3 py-2 bg-secondary-gray rounded-full cursor-pointer text-xs text-white font-manrope hover:bg-transparent hover:border hover:border-gray-800 hover:text-black transition-all'>
                Eliminar
            </button>
            <p>S/<span>{price.toFixed(2)}</span></p>
        </div>
        <div>
            
        </div>
    </div>
  )
}
