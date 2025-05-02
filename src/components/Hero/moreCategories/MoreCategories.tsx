import React from "react";
import { SectionBlank } from "../../reusable/SectionBlank";
import { MoreCategoriesCard } from "./MoreCategoriesCard";
import { CarouselForMobile } from "./CarouselForMobile";

const more_categories = [
  {
    title: "Con un poco de uso",
    imageUrl: "/Hero/images/used-sneakers.avif",
    slug: "con-un-poco-de-uso",
    type : "Landscape"
  },  
  {
    title: "Tecnología accesible",
    imageUrl: "/Hero/images/tecnologia-accesible.avif	",
    slug: "tecnologia-accesible",
    type : "Portrait"
  },
  {
    title: "Accesorios",
    imageUrl: "/Hero/images/accesories-moda.avif",
    slug: "accesorios",
    type : "Portrait"
  },
  {
    title: "Totalmente nuevo",
    imageUrl: "/Hero/images/productos-nuevos-portrait.avif",
    slug: "totalmente-nuevo",
    type : "Landscape"
  },
];
export const MoreCategories = () => {
  return (
    <React.Fragment>
      <SectionBlank>
      <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center justify-center gap-4">
        {more_categories.map((category) => (
          <MoreCategoriesCard
            key={category.slug}
            title={category.title}
            imageUrl={category.imageUrl}
            slug={category.slug}
            type={category.type}
          />
        ))}
      </div>
    </SectionBlank>
    <section className="md:hidden w-[90%] xl:max-w-[1240px]  2xl:max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-4 ">
    <CarouselForMobile more_categories={more_categories} />
    </section>
    </React.Fragment>
  );
};
