import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href={"/"}>
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo |
        </span>
        <span> Shop</span>
        <span> ©️ {new Date().getFullYear()}</span>
      </Link>
    </div>
  );
};

export default Footer;
