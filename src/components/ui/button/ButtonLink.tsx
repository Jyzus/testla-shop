import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  href: string;
  className?: string;
}

const ButtonLink = ({ title, href, className }: Props) => {
  return (
    <Link
      href={href}
      className={`${className} relative group py-4 flex justify-center bg-gray-600 hover:bg-gray-500 border-t-4 border-gray-400 duration-200`}
    >
      <div className="absolute -top-1 w-0 left-0 group-hover:w-full h-1 bg-blue-700  duration-200"></div>
      <span
        className={`${titleFont.className} font-semibold  uppercase text-sm text-white duration-200`}
      >
        {title}
      </span>
    </Link>
  );
};

export default ButtonLink;
