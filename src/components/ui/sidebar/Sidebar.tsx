"use client";

import { useUiStore } from "@/store";
import clsx from "clsx";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { NavLink } from "./NavLink";

const Sidebar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUiStore((state) => state.closeSidemenu);
  return (
    <div>
      {isSideMenuOpen && (
        <>
          {/* Black backgound */}
          <div className="fixed tep-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>

          {/* Blur */}
          <div
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
            onClick={closeSideMenu}
          ></div>
        </>
      )}

      {/* Side-menu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-full sm:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-200 rounded-l-lg",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeSideMenu}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-4 left-2" />
          <input
            type="text"
            name=""
            placeholder="Buscar..."
            className="w-full bg-gray-50 rounded px-10 py-3 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
            id=""
          />
        </div>

        {/* ´Menú */}
        <NavLink href="/" title="Perfil" icon={<IoPersonOutline />} />
        <NavLink href="/" title="Ordenes" icon={<IoTicketOutline />} />
        <NavLink href="/" title="Ingresar" icon={<IoLogInOutline />} />

        {/* Separator */}
        <hr className="my-10" />

        <NavLink href="/" title="Productos" icon={<IoShirtOutline />} />
        <NavLink href="/" title="Ordenes" icon={<IoTicketOutline />} />
        <NavLink href="/" title="Usuarios" icon={<IoPeopleOutline />} />
      </nav>
    </div>
  );
};

export default Sidebar;
