"use client"
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// import { ProductImagesOnly } from '@/src/types/Product/individualProduct'
import React from 'react'

// type ImagesProps = {
//     images? : ProductImagesOnly
// }

export const Images = () => {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
        <>
        <aside className='hidden md:flex flex-col items-center justify-center gap-4 w-[90%] min-w-[440px]'>
            <div className='relative col-span-4 w-full h-[550px] bg-primary-gray  overflow-hidden'/>
            <div className='flex flex-row flex-wrap items-center justify-center gap-4 gap-x-4 w-full'>
            <div className='relative col-span-2 w-[calc(50%-8px)] h-[300px] bg-primary-gray overflow-hidden'/>
            <div className='relative col-span-2 w-[calc(50%-8px)] h-[300px] bg-primary-gray overflow-hidden'/>
            <div className='relative col-span-2 w-[calc(50%-8px)] h-[300px] bg-primary-gray overflow-hidden'/>
            <div className='relative col-span-2 w-[calc(50%-8px)] h-[300px] bg-primary-gray overflow-hidden'/>
            </div>
        </aside>
        <section className="md:hidden w-[98%] xl:max-w-[1240px]  2xl:max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-4 ">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({length: 5}).map((_, index) => (
                <CarouselItem key={index}>
                  <div className='relative col-span-4 w-full h-[500px] aspect-auto bg-primary-gray  overflow-hidden'/>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="py-2 text-center text-lg font-manrope ">
        Imagen {current} de {count}
      </div>
        </section>
        </>
        
  )
}
