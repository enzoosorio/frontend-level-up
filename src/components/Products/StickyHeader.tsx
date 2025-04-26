import React from "react";

interface StickyHeaderProps {
  titleForHeader: string;
  containerBgColor?: string;
  titleTextColor?: string;
}

export const StickyHeader = ({
  titleForHeader,
  containerBgColor,
  titleTextColor,
}: StickyHeaderProps) => {
  return (
    <div className="sticky mt-4 top-5 z-50 bg-bg-color/50 h-[120px] backdrop-blur-md">
      <div
        className={` flex items-center justify-between px-4 py-4 ${containerBgColor}`}
      >
        <h3
          className={`text-xl font-bold font-poppins uppercase ${titleTextColor}`}
        >
          {titleForHeader}
        </h3>
        <button className="group/buttonFilters rounded-lg px-4 py-2 border border-black bg-white cursor-pointer flex items-center justify-center gap-2">
          <svg
            width="14"
            height="18"
            viewBox="0 0 17 20"
            fill="none"
            className="stroke-black group-hover/buttonFilters:stroke-primary-green"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3H6.625M6.625 3C6.625 4.10457 7.46444 5 8.5 5C9.53556 5 10.375 4.10457 10.375 3M6.625 3C6.625 1.89543 7.46444 1 8.5 1C9.53556 1 10.375 1.89543 10.375 3M10.375 3H16M1 10H12.25M12.25 10C12.25 11.1046 13.0894 12 14.125 12C15.1606 12 16 11.1046 16 10C16 8.8954 15.1606 8 14.125 8C13.0894 8 12.25 8.8954 12.25 10ZM4.75 17H16M4.75 17C4.75 15.8954 3.91053 15 2.875 15C1.83947 15 1 15.8954 1 17C1 18.1046 1.83947 19 2.875 19C3.91053 19 4.75 18.1046 4.75 17Z"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <span className="font-poppins transition-all text-lg text-black group-hover/buttonFilters:text-primary-green">
            Filtros
          </span>
        </button>
      </div>
    </div>
  );
};
