"use client";

import { titleFont } from "@/config/fonts";
import { useUiStore } from "@/store";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import NavLink from "./NavLink";
import { useCarStore } from "@/store/cart/cartStore";

const TopMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);
  const cart = useCarStore((state) => state.cart);
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
        <NavLink href="/category/men" title="Hombres" />
        <NavLink href="/category/women" title="Mujeres" />
        <NavLink href="/category/kid" title="Niños" />
        <NavLink href="/category/unisex" title="Unisex" />
      </div>

      {/* Search card menu */}
      <div className="flex items-center">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <IoCartOutline className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute text-xs px-1 font-bold -top-2 -right-2 bg-blue-700 text-white rounded-full">
                {cart.length}
              </span>
            )}
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
