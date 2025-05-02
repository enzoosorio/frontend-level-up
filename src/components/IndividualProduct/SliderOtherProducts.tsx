import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductOtherProducts } from "@/src/types/Product/individualProduct";
import { CardOtherProducts } from "../reusable/Products/CardOtherProducts";
import React from "react";


interface SliderOtherProductsProps {
  otherProducts: ProductOtherProducts[][]
}

export const SliderOtherProducts = ({otherProducts}: SliderOtherProductsProps) => {
  return (
    <div className="w-full max-w-[948px] mx-auto flex flex-col items-center justify-center gap-6 relative px-4">
      <h2 className="text-2xl font-manrope font-bold">
        ¿Necesitas otro producto?
      </h2>

      <Carousel className="w-full ">
        <CarouselContent className="w-full ">
          {otherProducts.map((productGroup, index) => (
              <React.Fragment key={`${productGroup}-${index}`}>
              {productGroup.map((product) => (
                  <CarouselItem key={`${product.id}-${index}`} className="md:basis-1/2 lg:basis-1/3">
                <CardOtherProducts key={product.id} product={product} />
            </CarouselItem>
              ))}
              </React.Fragment>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
