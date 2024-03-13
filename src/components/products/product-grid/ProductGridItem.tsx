"use-client";

import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  return (
    <div className="rounded-md overflow-hidden fade-in group">
      <Link
        href={`/product/${product.slug}`}
        className="w-full h-full bg-red-300 rounded-lg"
      >
        <div className="w-[200%] flex group-hover:-translate-x-1/2 duration-200">
          <Image
            src={`/products/${product.images[0]}`}
            alt={product.title}
            className="w-1/2 object-cover h-full"
            width={500}
            height={500}
          />
          <Image
            src={`/products/${product.images[1]}`}
            alt={product.title}
            className="w-1/2 object-cover"
            width={500}
            height={500}
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          href={`/product/${product.slug}`}
          className="group-hover:text-blue-500"
        >
          {product.title}
        </Link>
        <span className="font-bold">$ {product.price}</span>
      </div>
    </div>
  );
};
