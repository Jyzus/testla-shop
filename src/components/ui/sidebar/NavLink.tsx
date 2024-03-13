import Link from "next/link";
import React from "react";

export const NavLink = ({
  href,
  icon,
  title,
}: {
  href: string;
  icon: JSX.Element;
  title: string;
}) => (
  <Link
    href={href}
    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
  >
    {React.cloneElement(icon, {
      size: icon.props.size || 30,
    })}
    <span className="ml-3 text-xl">{title}</span>
  </Link>
);
