import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  icon: JSX.Element;
  title: string;
  disabled?: boolean;
}

export const NavLink = ({ href, icon, title, disabled }: Props) => (
  <div className="relative">
    <Link
      href={href}
      className={`flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all ${
        disabled && "text-gray-400"
      }`}
    >
      {React.cloneElement(icon, {
        size: icon.props.size || 30,
      })}
      <span className="ml-3 text-xl">{title}</span>
    </Link>
    {disabled && <div className="absolute w-full h-full top-0 left-0"></div>}
  </div>
);
