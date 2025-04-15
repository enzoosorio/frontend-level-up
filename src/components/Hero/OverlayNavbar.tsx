import React from "react";
import { hamburgerCategories } from "@/src/utils/hamburgerCategories";
import { HamburgerCategoriesCard } from "./HamburgerCategoriesCard";
import { SearchBar } from "../reusable/Hero/SearchBar";

interface OverlayNavbarProps {
  setToggleHamburger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OverlayNavbar = ({ setToggleHamburger }: OverlayNavbarProps) => {
  return (
    <div className="pt-40  fixed inset-0 z-50 bg-white/20 backdrop-blur-xs flex flex-col items-center justify-start gap-12  min-h-screen overflow-y-scroll md:overflow-y-hidden">
        
        {/* Boton cerrar ABSOLUTE */}
        <button
          onClick={() => setToggleHamburger(false)}
          className="absolute top-20 left-14 text-3xl font-bold shadow-lg p-2 px-4 rounded-full text-black hover:text-white bg-bg-color/20 cursor-pointer transition-colors font-manrope "
        >
          X
        </button>

        <SearchBar/>
        {/* Cards categorias */}
        <div className="flex items-center flex-wrap justify-center gap-8 w-[450px] md:w-[600px] lg:w-[960px] pb-20 ">
          {hamburgerCategories.map((category, index) => (
            <HamburgerCategoriesCard key={index} title={category.title}
             slug={category.slug}
             imageUrl={category.imageUrl}
            />
          ))}
        </div>
        {/* <p>Overlay</p> */}
      
    </div>
  );
};
