import React from "react";
import { CardFeaturedCollectionsProps } from "@/src/types/Hero/cardFeaturedCollections";

export const CardFeaturedCollections = ({
  primaryText,
  textcolor,
  colSpan,
  bgColor,
  textSpan,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
}: CardFeaturedCollectionsProps) => {
  return (
    <div
      className={`relative group/card rounded-xl cursor-pointer flex items-end overflow-hidden justify-end min-h-[440px] lg:min-h-[640px] ${bgColor} shadow-xl rounded-lg ${colSpan}`}
    >
      <img src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} className='absolute rounded-xl inset-0 w-full group-hover/card:scale-110 group-hover/card:blur-sm h-full object-cover transition-transform' />
      <div className='absolute inset-0 z-10 flex items-center justify-center  w-full h-full bg-black/30 rounded-xl'></div>
      <div className={`relative w-full rounded-bl-xl rounded-br-xl bg-black/30 min-h-[140px] z-30`}>
    
      <p
        className={`absolute 
          bottom-14 
          ${textcolor}
          text-center
          text-white
          ${textSpan === "left" ? "-left-10 group-hover/card:left-1/2 group-hover/card:-translate-x-1/2 lg:group-hover/card:left-10 lg:group-hover/card:-translate-x-0 " : "-right-10 group-hover/card:left-1/2 group-hover/card:-translate-x-1/2  lg:group-hover/card:left-auto lg:group-hover/card:right-10 lg:group-hover/card:-translate-x-0 "}
          group-hover/card:opacity-100 transition-all opacity-0 
          ${colSpan === "col-span-4" ? "text-3xl lg:text-5xl" : "text-2xl lg:text-4xl"}
          w-max
          font-poppins font-bold`}
      >
        {primaryText}
      </p>
      </div>
    </div>
  );
};
