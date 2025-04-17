import React from "react";
import { SectionBlank } from "../reusable/SectionBlank";
import { CardFeaturedCollections } from "../reusable/Hero/CardFeaturedCollections";
import { featuredCollections } from "@/src/utils/featuredCollections";

export const FeaturedCollections = () => {
  return (
    <SectionBlank>
      <div className="w-full flex items-center justify-start ">
        <h1 className="text-5xl font-amiko max-w-[350px] text-left">
          Colecciones destacadas
        </h1>
      </div>
      <div className="grid grid-cols-1 md:flex flex-row items-center justify-center gap-4 lg:gap-8 w-full mt-4">
        {featuredCollections.map((collection) => (
          <CardFeaturedCollections
            key={collection.id}
            primaryText={collection.primaryText}
            colSpan={collection.colSpan} 
            colSpanMobile={collection.colSpanMobile}
            textSpan={collection.textSpan}
            bgColor={collection.bgColor}
            imageSrc={collection.imageSrc}
            imageWidth={collection.imageWidth}
            imageHeight={collection.imageHeight}
            imageAlt={collection.imageAlt}
          />
        ))}
      </div>
    </SectionBlank>
  );
};
