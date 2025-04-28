"use client";
import React from "react";
import { CardFeaturedCollectionsProps } from "@/src/types/Hero/cardFeaturedCollections";

export const CardFeaturedCollections = ({
  primaryText,
  textcolor,
  textSpan,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
}: CardFeaturedCollectionsProps) => {
  return (
    <div
      className={`featuredCollectionCard relative transition-all duration-500 ease-in-out group/card cursor-pointer flex items-end 
        overflow-hidden shadow-xl rounded-lg justify-end 
        h-[440px] bg-black/50 col-span-1 md:w-[150px] md:hover:w-[500px] lg:w-[200px]`}
    >
      <img
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        alt={imageAlt}
        className="rounded-xl inset-0 w-full group-hover/card:scale-110  h-full object-cover transition-transform"
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center w-full h-full bg-black/30 rounded-xl"></div>
      <div
        className={`absolute w-full rounded-bl-xl rounded-br-xl bg-black/30 min-h-[140px] z-30`}
      >
        <p
          className={`absolute 
            bottom-14 
            ${textcolor}
            text-center
            text-white
            ${
              textSpan === "left"
                ? "-left-10 md:group-hover/card:left-1/2 md:group-hover/card:-translate-x-1/2"
                : "-right-10 md:group-hover/card:left-1/2 md:group-hover/card:-translate-x-1/2 "
            }
            md:group-hover/card:opacity-100 transition-all opacity-0 
            text-2xl
            
            font-poppins font-bold`}
        >
          {primaryText}
        </p>
      </div>
    </div>
  );
};
