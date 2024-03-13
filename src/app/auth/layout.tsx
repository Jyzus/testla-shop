import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="bg-sky-400">{children}</main>;
};

export default Layout;
