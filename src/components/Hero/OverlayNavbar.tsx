import React from "react";
import { hamburgerCategories } from "@/src/utils/hamburgerCategories";
import { HamburgerCategoriesCard } from "./HamburgerCategoriesCard";

interface OverlayNavbarProps {
  setToggleHamburger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OverlayNavbar = ({ setToggleHamburger }: OverlayNavbarProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-white/20 backdrop-blur-xs overflow-y-scroll md:overflow-y-hidden">
      <div className="flex items-center justify-center min-h-screen">
        <button
          onClick={() => setToggleHamburger(false)}
          className="absolute top-20 left-14 text-3xl font-bold shadow-lg p-2 px-4 rounded-full text-black hover:text-white bg-bg-color/20 cursor-pointer transition-colors font-manrope "
        >
          X
        </button>
        <div className="mt-40 md:mt-32 flex items-center flex-wrap justify-center gap-8 w-[450px] md:w-[600px] lg:w-[960px] ">
          {hamburgerCategories.map((category, index) => (
            <HamburgerCategoriesCard key={index} title={category.title}
             slug={category.slug}
             imageUrl={category.imageUrl}
            />
          ))}
        </div>
        {/* <p>Overlay</p> */}
      </div>
    </div>
  );
};
