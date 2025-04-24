"use client"
import React from 'react'
import { SectionBlank } from '@/src/components/reusable/SectionBlank'
import { categoriesHero } from '@/src/utils/categories'
import { ButtonCTA } from '../reusable/ButtonCTA'

type DisplayMode = "sm" | "md" | "lg" | "xl"
export const Categories = () => {

  const [displayMode, setDisplayMode] = React.useState<DisplayMode>("sm")
  const [categoriesToShow, setCategoriesToShow] = React.useState(3)

  React.useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 768){
        setCategoriesToShow(5)
        setDisplayMode("sm")
      }else if(window.innerWidth <= 1024){
        setCategoriesToShow(5)
        setDisplayMode("md")
      }else if(window.innerWidth <= 1280){
        setCategoriesToShow(10)
        setDisplayMode("lg")
      }else{
        setCategoriesToShow(10)
        setDisplayMode("xl")
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() 

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <SectionBlank className='pb-20'>
        <h1 className='text-3xl font-manrope text-center '>Elige una categoría</h1>
        <div className={`flex items-center justify-center gap-x-10 gap-y-8 lg:gap-y-10 lg:gap-x-10 flex-wrap max-w-[1240px]  px-2 py-6 overflow-y-hidden lg:max-h-max lg:overflow-auto mt-10 rounded-lg transition-all shadow-xl`}>
          {categoriesHero.slice(0, categoriesToShow).map((category, index) => (
            <div key={index} className='relative w-[160px] lg:w-[200px] min-h-[160px] lg:min-h-[200px] cursor-pointer rounded-full p-4 shadow-xl flex overflow-hidden items-end group/individualCategory justify-center pb-10'>
              <img src={category.bgImage} loading='lazy' width={120} height={120} alt={category.name} className='absolute inset-0 w-full group-hover/individualCategory:scale-120 h-full object-cover rounded-full transition-transform' />
              <div className='absolute inset-0 z-10 flex items-center justify-center rounded-full w-full h-full bg-black/30'></div>
              <h2 className='text-xl font-manrope z-30 text-center text-white font-bold'>{category.name}</h2>
            </div>
          ))}
        </div>
        {/* Mostrar el botón solo en pantallas sm y md */}
        {(displayMode === "sm" || displayMode === "md") && (categoriesToShow !== categoriesHero.length) && (
          <ButtonCTA
            className={`${categoriesToShow === categoriesHero.length ? 'hidden' : ''}`}
            onClick={() => setCategoriesToShow(categoriesToShow > categoriesHero.length ? categoriesToShow : categoriesToShow + 5)}
          >
            Ver más...
          </ButtonCTA>
        )}
    </SectionBlank>
  )
}
