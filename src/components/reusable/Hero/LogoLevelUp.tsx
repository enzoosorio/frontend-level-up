import Link from "next/link";
import React from "react";

interface LogoLevelUpProps {
  className?: string;
}
export const LogoLevelUp = ({ className }: LogoLevelUpProps) => {
  return (
    <Link
      href={"/"}
      className={`flex flex-col items-center justify-center group/logo transition-colors cursor-pointer ${className} `}
    >
      <p className="font-aboreto text-7xl group-hover/logo:font-semibold transition-colors duration-700">
        LU
      </p>
      <small className="font-manrope text-lg group-hover/logo:font-semibold transition-colors duration-700">
        Level Up
      </small>
    </Link>
  );
};
