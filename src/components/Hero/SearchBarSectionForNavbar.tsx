import React from "react";
import { SearchBar } from "../reusable/Hero/SearchBar";
import Link from "next/link";
import { LogoLevelUp } from "../reusable/Hero/LogoLevelUp";

interface SearchBarSectionForNavbarProps {
  setShowSearchBarSection: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SearchBarSectionForNavbar = ({
  setShowSearchBarSection,
}: SearchBarSectionForNavbarProps) => {

    const searchOptions = [
        {
            id: 1,
            name: "PS5",
            slug: "ps5",
            link: "/ps5",
        },
        {
            id: 2,
            name: "PS4",
            slug: "ps4",
            link: "/ps4",
        },
        {
            id: 3,
            name: "PS3",
            slug: "ps3",
            link: "/ps3",
        },
        {
            id: 4,
            name: "Xbox",
            slug: "xbox",
            link: "/xbox",
        }
    ]

  return (
    <>
    <header className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center bg-bg-color justify-center pt-12 md:pt-0 gap-12 w-full min-h-[600px]">
      {/* Simulador del tamaño del logo*/}
      <div className="w-full h-max flex flex-items-start justify-center gap-6 md:gap-20">
        {/* <div className="w-9 h-auto hidden md:block  " /> */}
        <LogoLevelUp className="hidden md:block" />
        <div className="flex items-center justify-center gap-4  ">
          <SearchBar />
          <svg
            width="38"
            height="40"
            viewBox="0 0 52 53"
            fill="none"
            className={`hover:scale-110 transition-transform cursor-pointer duration-75`}
          >
            <rect width="52" height="53" rx="26" fill="black" />
            <path
              d="M39.8545 40.1558L31.0517 30.2404C32.9826 28.1383 34.0091 25.3686 33.9117 22.5237C33.8143 19.6789 32.6008 16.9849 30.5306 15.0183C28.4605 13.0516 25.6983 11.9685 22.8351 12.0007C19.9718 12.0329 17.235 13.1778 15.2102 15.1905C13.1853 17.2032 12.0334 19.9238 12.0007 22.7701C11.9681 25.6164 13.0574 28.3624 15.0355 30.4204C17.0137 32.4785 19.7236 33.6851 22.5853 33.7822C25.4471 33.8793 28.2334 32.859 30.348 30.9398L39.1509 40.8554C39.2442 40.948 39.3707 41 39.5026 41C39.6345 40.9999 39.761 40.9478 39.8543 40.8551C39.9475 40.7624 40 40.6366 40 40.5055C40 40.3744 39.9477 40.2486 39.8545 40.1558ZM13.0205 22.9068C13.0205 20.9503 13.6041 19.0376 14.6976 17.4108C15.791 15.784 17.3452 14.5161 19.1636 13.7673C20.9819 13.0186 22.9828 12.8227 24.9132 13.2044C26.8436 13.5861 28.6167 14.5283 30.0084 15.9118C31.4001 17.2952 32.3479 19.0579 32.7319 20.9769C33.1158 22.8958 32.9188 24.8849 32.1656 26.6925C31.4124 28.5001 30.1369 30.0451 28.5004 31.1321C26.8639 32.2191 24.9399 32.7993 22.9718 32.7993C20.3334 32.7963 17.804 31.7531 15.9384 29.8986C14.0729 28.044 13.0235 25.5295 13.0205 22.9068Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-12 ">
          <button
            className="hidden md:block underline decoration-dotted text-lg font-manrope cursor-pointer hover:font-bold transition-all"
            onClick={() => {
                setShowSearchBarSection(false)
                document.body.style.overflow = "auto"
            }}
            type="button"
          >
            Cancelar
          </button>
          <button
            className="block md:hidden absolute top-4 left-1/2 -translate-x-1/2 text-xl font-manrope cursor-pointer hover:font-bold transition-all py-2 px-4 bg-primary-green text-white rounded-full"
            onClick={() => {
                setShowSearchBarSection(false)
                document.body.style.overflow = "auto"
            }}
            type="button"
          >
            X
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <h3 className="text-2xl font-manrope font-semibold uppercase">
          Búsquedas populares
        </h3>
        <ul className="flex flex-col items-center justify-center gap-12">
            {searchOptions.map((searchOption) => (
                <li
                key={searchOption.id} 
                className="flex items-center justify-center"
                 >
                    <Link
                      href={searchOption.link}
                      className=" text-lg font-manrope bg-gray-200 hover:bg-gray-300 w-[170px] lg:w-[200px] shadow-xl rounded-lg px-2 py-1 mx-auto group-hover/liOption:text-xl transition-all text-center"
                    >
                      {searchOption.name}
                    </Link>

                </li>
            ))}
        </ul>
      </div>
    </header>
    <div className="fixed inset-0 w-full min-h-screen bg-black/30 backdrop-blur-xs">
    </div>
    </>
  );
};
