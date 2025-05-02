import { ProductOtherProducts } from '@/src/types/Product/individualProduct';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface CardOtherProductsProps {
    product: ProductOtherProducts;
}

export const CardOtherProducts = ({product}: CardOtherProductsProps) => {
  return (  
    <Link href={`/product/${product.id}`} className="w-[300px] flex-shrink-0">
      <div className="h-full flex flex-col items-center justify-center gap-4 p-4 bg-gray-secondary rounded-sm hover:shadow-md transition-shadow" >
        <div className="relative w-full aspect-square">
          <Image 
            src={product.mainImage} 
            alt={product.name} 
            fill
            className='object-cover rounded-sm'
          />
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.productStatus}</p>
          <div className='flex items-center gap-3'>
            <p className='text-base font-semibold'>S/{product.price}</p>
            <p className='text-sm text-gray-500 line-through'>S/{product.oldPrice}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
