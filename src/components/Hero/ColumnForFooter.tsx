import React from 'react'
import {ColumnForFooterProps} from '@/src/types/Hero/ColumnForFooter'
import Link from 'next/link'
export const ColumnForFooter = ({miniSections, sectionTitle} : ColumnForFooterProps) => {
  return (
    <div className='flex flex-col items-start justify-start gap-4 py-2 min-h-[250px] '>
                <h2 className='text-lg md:text-2xl w-max lg:max-w-none font-manrope text-left lg:w-full font-semibold '>{sectionTitle}</h2>
                <div className='flex flex-col items-center justify-center gap-2 max-w-[13ch] lg:max-w-[18ch]    '>
                    {miniSections.map((item, index) => (
                        <Link key={index} href={item.link} className='text-sm lg:text-base font-manrope text-left w-full text-gray-700 hover:text-gray-900 transition duration-200 ease-in-out'>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
  )
}
