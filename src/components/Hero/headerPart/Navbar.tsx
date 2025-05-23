"use client";
import Link from "next/link";
import React, { useState } from "react";
import { OverlayNavbar } from "@/src/components/Hero/headerPart/OverlayNavbar";
import { LogoLevelUp } from "@/src/components/reusable/Hero/LogoLevelUp";
import { SearchBarSectionForNavbar } from "@/src/components/Hero/headerPart/SearchBarSectionForNavbar";
import { CarritoAside } from "@/src/components/reusable/CarritoAside";
import { UserPopup } from "@/src/components/Hero/userPopup/UserPopup";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [showSearchBarSection, setShowSearchBarSection] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  return (
    <>
      <nav className={`relative items-center justify-around h-[116px] md:h-auto w-full flex gap-8 md:gap-24 xl:gap-64 ${className}`}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* hamburger menu */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 509 307"
            onClick={() => setToggleHamburger(!toggleHamburger)}
            fill="none"
            className="cursor-pointer hover:scale-110 transition-transform duration-75"
          >
            <path
              d="M29.7778 42.8889H474.222"
              stroke="black"
              strokeWidth="22.2222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.7778 154H474.222"
              stroke="black"
              strokeWidth="22.2222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.7778 265.111H474.222"
              stroke="black"
              strokeWidth="22.2222"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link
            className="underline decoration-dotted text-lg font-manrope hover:font-bold transition-all"
            href={"/sell"}
          >
            Vender
          </Link>
        </div>
        {/* LOGO */}
        <LogoLevelUp
          className={` transition-all duration-300 ease-in-out transform`}
        />
        <div className="relative flex items-center justify-center flex-wrap gap-4 gap-x-6  md:gap-6 w-28 md:w-max ">
          {/* contenedor que simula el espacio de la lupa */}
          {/* lupa */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 74 77"
            fill="none"
            className={`hover:scale-110 transition-transform cursor-pointer duration-75`}
            onClick={() => {
                setShowSearchBarSection(!showSearchBarSection)
                document.body.style.overflow = "hidden"
            }}
          >
            <path
              d="M72.7437 73.9078L49.7548 47.8802C54.7973 42.3625 57.4782 35.092 57.2239 27.6244C56.9695 20.1568 53.8002 13.0852 48.3939 7.92282C42.9877 2.76045 35.7741 -0.0826686 28.2965 0.00183101C20.819 0.0863306 13.6716 3.09174 8.38358 8.37496C3.09559 13.6582 0.0871042 20.7996 0.00186183 28.271C-0.0833805 35.7425 2.76139 42.9505 7.92747 48.3528C13.0935 53.7551 20.1706 56.9226 27.6442 57.1774C35.1179 57.4322 42.3945 54.7541 47.9171 49.7162L70.9062 75.7441C71.15 75.9874 71.4804 76.1239 71.8249 76.1238C72.1694 76.1236 72.4997 75.9868 72.7433 75.7434C72.9868 75.5 73.1237 75.1699 73.1238 74.8257C73.1238 74.4815 72.9871 74.1514 72.7437 73.9078ZM2.66509 28.6299C2.66509 23.4941 4.18928 18.4735 7.04493 14.2032C9.90057 9.93292 13.9594 6.60461 18.7082 4.63921C23.4569 2.6738 28.6823 2.15956 33.7236 3.16152C38.7649 4.16347 43.3956 6.63663 47.0301 10.2682C50.6647 13.8998 53.1398 18.5268 54.1426 23.5639C55.1454 28.6011 54.6307 33.8223 52.6637 38.5672C50.6967 43.3121 47.3657 47.3677 43.0919 50.221C38.8181 53.0743 33.7935 54.5973 28.6535 54.5973C21.7633 54.5895 15.1576 51.8512 10.2855 46.983C5.41342 42.1149 2.67286 35.5145 2.66509 28.6299Z"
              fill="black"
            />
          </svg>
          {/* ususario */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            className="hover:scale-110 transition-transform cursor-pointer duration-75"
            onClick={() => {
              setShowUserLogin(true);
              document.body.style.overflow = 'hidden'; 
            }}
          >
            <path
              d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* carrito */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 543 505"
            fill="none"
            className="hover:scale-110 transition-transform cursor-pointer duration-75"
            onClick={() => {
              setShowCart(!showCart)
              document.body.style.overflow = "hidden"
            }}
          >
            <path
              d="M209.775 478.475C194.75 478.475 180.75 472.887 170.387 462.725C157.25 449.875 151.637 430.3 155.737 411.637C159.625 393.937 171.3 380.412 187.775 374.537C210.312 366.5 235.075 372.787 250.062 389.962C260.712 402.175 265.525 418.65 263.275 435.187C259.837 460.275 237.337 478.475 209.775 478.475ZM208.075 395.962C204.15 395.962 200.137 396.675 196.175 398.087C184.975 402.087 181.325 411.65 180.15 417C177.887 427.312 180.85 437.987 187.862 444.862C193.537 450.425 201.325 453.475 209.775 453.475C222.575 453.475 236.562 446.025 238.5 431.8C239.8 422.287 237.212 413.262 231.237 406.4C225.437 399.762 217 395.962 208.075 395.962Z"
              fill="black"
            />
            <path
              d="M374.863 478.475C359.825 478.475 345.838 472.888 335.463 462.725C322.325 449.863 316.713 430.288 320.813 411.638C324.7 393.938 336.375 380.413 352.85 374.538C375.375 366.488 400.138 372.788 415.138 389.963C425.8 402.175 430.6 418.65 428.35 435.188C424.913 460.275 402.425 478.475 374.863 478.475ZM373.15 395.963C369.225 395.963 365.213 396.675 361.25 398.088C350.05 402.088 346.4 411.65 345.225 417C342.963 427.313 345.925 437.988 352.938 444.863C358.613 450.425 366.4 453.475 374.863 453.475C387.65 453.475 401.638 446.025 403.575 431.8C404.875 422.288 402.288 413.263 396.313 406.4C390.513 399.763 382.075 395.963 373.15 395.963Z"
              fill="black"
            />
            <path
              d="M328.012 354.85C314.662 354.85 301.425 354.525 289.35 354.225L271.625 353.863C236.375 353.388 177.362 352.588 155.15 322.1C143.7 306.338 134.825 275.7 132.525 244.013C131.375 228.3 131 211.4 130.65 195.05C129.337 135.838 127.962 74.6001 91.0373 64.0376C75.9623 59.7376 63.5998 60.2876 44.9373 61.0876L41.8623 61.2251C35.1998 61.5376 29.1248 56.1751 28.8373 49.2626C28.5498 42.3626 33.8873 36.5376 40.7873 36.2376L43.8498 36.1001C63.4498 35.2501 78.9622 34.5626 97.8997 40.0001C126.975 48.3126 141.025 72.1751 148.05 102.988C152.95 102.938 160.912 102.825 171.025 102.7C221.925 102.013 327.862 100.613 369.562 101.588C375.825 101.725 381.937 101.788 387.85 101.838C432.275 102.25 478.212 102.675 479.175 152.463C479.962 194.475 465.712 244.675 461.312 259.075C460.137 262.938 459.037 266.713 457.962 270.4C452.9 287.75 448.125 304.125 438.312 319.3C427.2 336.463 409.012 347.538 385.687 351.338C368.65 354.088 348.2 354.85 328.012 354.85ZM152.175 127.925C154.612 148.975 155.125 171.863 155.625 194.488C155.975 210.525 156.35 227.113 157.45 242.188C159.375 268.713 166.737 295.513 175.362 307.375C190.212 327.738 245.425 328.488 271.975 328.85L289.987 329.213C319.262 329.95 355.7 330.863 381.662 326.638C397.825 324.013 410.15 316.763 417.312 305.7C425.15 293.588 429.225 279.6 433.962 263.388C435.062 259.6 436.187 255.725 437.4 251.763C445.887 223.938 454.75 183.375 454.162 152.925C453.737 130.438 440.387 127.313 387.612 126.825C381.587 126.775 375.362 126.713 368.975 126.563C327.775 125.613 222.112 127.013 171.35 127.675C163.575 127.788 157.037 127.863 152.175 127.925Z"
              fill="black"
            />
          </svg>
        </div>
        {showSearchBarSection && (
        <SearchBarSectionForNavbar setShowSearchBarSection={setShowSearchBarSection}/>
      )}
      </nav>
      {toggleHamburger && (
        <OverlayNavbar setToggleHamburger={setToggleHamburger} />
      )}
      <CarritoAside active={showCart} setActive={setShowCart}/>
      <UserPopup active={showUserLogin} setActive={setShowUserLogin}/>
    </>
  );
};
