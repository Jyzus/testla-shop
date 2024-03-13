"use client";

import { titleFont } from "@/config/fonts";
import { useUiStore } from "@/store";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const TopMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);
  return (
    <div className="flex px-5 justify-between items-center w-full">
      {/* Agrupador de logo */}
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block font-medium">
        <Link
          className="m-2 p-2 rounded-md transition-all hover_bg-gray-100"
          href={"/category/men"}
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover_bg-gray-100"
          href={"/category/women"}
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover_bg-gray-100"
          href={"/category/kids"}
        >
          Niños
        </Link>
      </div>

      {/* Search card menu */}
      <div className="flex items-center">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <IoCartOutline className="w-5 h-5" />
            <span className="absolute text-xs px-1 font-bold -top-2 -right-2 bg-blue-700 text-white rounded-full">
              3
            </span>
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openSideMenu}
        >
          Menú
        </button>
      </div>
    </div>
  );
};

export default TopMenu;
