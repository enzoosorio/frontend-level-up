import Link from 'next/link'
import React from 'react'
import { ColumnForFooter } from './ColumnForFooter'
import { ayudaSection, legalidadSection, nosotrosSection } from '@/src/utils/columnForFooter'


export const Footer = () => {


  return (
    <footer className='w-full flex flex-col items-center justify-center gap-2 mt-10'>
        <svg width="1440" height="1" viewBox="0 0 1440 1" fill="none">
            <line y1="0.5" x2="1440.02" y2="0.5" stroke="url(#paint0_linear_290_686)"/>
            <defs>
            <linearGradient id="paint0_linear_290_686" x1="0" y1="1.5" x2="1440.02" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stopOpacity="0.1"/>
            <stop offset="0.264" stopColor="#666666"/>
            <stop offset="0.704" stopColor="#525252" stopOpacity="0.819513"/>
            <stop offset="1" stopOpacity="0.1"/>
            </linearGradient>
            </defs>
        </svg>
        <div className='flex items-center justify-around gap-2 w-full px-2 bg-green-100/40 min-h-[200px] py-4'>
            <div className='flex items-center justify-around gap-10 md:gap-32 lg:gap-8 h-[270px] '>
                <ColumnForFooter sectionTitle='Ayuda' miniSections={ayudaSection}/>
                <ColumnForFooter sectionTitle='Legal y privacidad' miniSections={legalidadSection}/>
                <ColumnForFooter sectionTitle='Nosotros' miniSections={nosotrosSection}/>
            </div>
            {/* iniciar sesion parte */}
            <div className='hidden lg:flex flex-col items-start justify-center gap-4 max-w-[40ch]'>
                <h2 className='text-xl lg:text-2xl font-semibold uppercase font-manrope tracking-wider'>Inicia sesión</h2>
                <div className='flex flex-col gap-4 text-base font-manrope items-start justify-start'>
                    <p>Obten promociones exclusivas, cupones y enterate de nuevos eventos.</p>
                    <form className='flex items-center justify-center '>
                        <input
                            type='email'
                            placeholder='tuemail@gmail.com'
                            className='w-full rounded-tl-xl rounded-bl-xl font-manrope  bg-gray-100 shadow-xl p-2 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50'
                        />
                        <button className='bg-primary-green cursor-pointer text-white rounded-tr-xl rounded-br-xl text-base px-4 py-2 font-semibold font-manrope shadow-lg hover:bg-green-600 transition duration-200 ease-in-out'>
                            UNIRSE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  )
}
