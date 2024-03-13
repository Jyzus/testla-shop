import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-8">
      <Image
        src={"/imgs/not-found.svg"}
        alt="Not-Found image"
        className="hidden sm:block w-52 h-52 sm:w-96 sm:h-96"
        width={300}
        height={300}
      />
      <div className="text-center">
        <p className={`text-8xl ${titleFont.className}`}>404</p>
        <span className="font-bold text-blue-700">Página no encontrada</span>

        <Link
          href={"/"}
          className="block mt-10 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 duration-200"
        >
          Inicio
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
