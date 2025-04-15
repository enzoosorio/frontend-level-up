import React from 'react'

export const SearchBar = () => {
  return (
    <input className='w-[90%] lg:w-[600px] xl:w-[860px] h-auto py-4 rounded-lg px-4 bg-white/90 shadow-lg font-manrope focus:outline-2 focus:shadow-xl outline-primary-blue transition-all' placeholder='Buscar...' type='text'/>
        // <p className='text-placeholder font-manrope'>Buscar...</p>
    
  )
}
