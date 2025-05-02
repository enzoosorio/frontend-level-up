import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";

  interface CarouselForMobileProps {    
    more_categories: {
      title: string;
      imageUrl: string;
      slug: string;
    }[];
  }

  export const CarouselForMobile = ({ more_categories }: CarouselForMobileProps) => {
  return (
    <Carousel className="w-full">
            <CarouselContent className='w-[90%]'>
            {more_categories.map((category) => (
              <CarouselItem key={category.slug}>
                <div className="relative w-full rounded-lg h-[550px] overflow-hidden cursor-pointer">
                  <img src={category.imageUrl} alt={category.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 w-full h-full bg-black/30" />
                  <h2 className="absolute bottom-12 left-1/2 -translate-x-1/2 font-aboreto uppercase text-4xl font-bold z-20 text-center text-white">{category.title}</h2>
                </div>
              </CarouselItem>
          ))} 
          </CarouselContent>
    </Carousel>
  )
}
