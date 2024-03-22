"use client";

import QuantityVisible from "@/components/product/quantity-selector/QuantityVisible";
import ButtonLink from "@/components/ui/button/ButtonLink";
import Title from "@/components/ui/title/Title";
import { useCarStore } from "@/store/cart/cartStore";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoTrashBinOutline } from "react-icons/io5";

const Page = () => {
  const cart = useCarStore((state) => state.cart);
  const addAmount = useCarStore((state) => state.addAmount);
  const quantityProducts = useCarStore((state) => state.quantityProducts());
  const subtotal = useCarStore((state) => state.subtotal());
  const total = useCarStore((state) => state.total());
  const taxes = useCarStore((state) => state.taxes());
  const removeProduct = useCarStore((state) => state.removeProduct);

  if (cart.length == 0) {
    redirect("/empty");
  }
  return (
    <div className="flex justify-center items-center mb-72 sm:px-10">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito de compra" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl font-medium">Agregar más items</span>
            <Link href={"/"} className="underline mb-5">
              Continúa comprando
            </Link>

            {/* Items */}
            {cart.map((product) => (
              <div key={product.slug} className="flex w-full mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded object-cover"
                />
                <div className="grow">
                  <p className="font-semibold">{product.title}</p>
                  <p>${product.price}</p>
                  <QuantityVisible
                    amount={product.amount}
                    addAmount={addAmount}
                    productSlug={product.slug}
                  />
                </div>
                <button
                  className=" text-gray-500 hover:text-gray-800 duration-200"
                  onClick={() => removeProduct(product)}
                >
                  <IoTrashBinOutline size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span className="font-semibold">N° Productos</span>
              <span className="text-right">{quantityProducts} artículos</span>
              <span className="font-semibold">Subtotal</span>
              <span className="text-right">${subtotal}</span>
              <span className="font-semibold">Impuestos (15%)</span>
              <span className="text-right">${taxes}</span>
              <span className="font-semibold">Total: </span>
              <span className="text-right">${total}</span>
            </div>
            <div className="mb-2 w-full mt-24">
              <ButtonLink href="/checkout/address" title="Checkout" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
