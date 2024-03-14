import Link from "next/link";

interface Props {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: Props) => {
  return (
    <Link
      className="relative group m-2 p-2 rounded-md transition-all hover_bg-gray-100"
      href={href}
    >
      {title}
      <div className="absolute bg-blue-700 bottom-0 left-0 h-[2px] w-0 group-hover:w-full duration-200"></div>
    </Link>
  );
};

export default NavLink;
