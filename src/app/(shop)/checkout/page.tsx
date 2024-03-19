import ButtonLink from "@/components/ui/button/ButtonLink";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

const page = () => {
  return (
    <div className="flex justify-center items-center mb-72 sm:px-10">
      <div className="flex flex-col w-[1000px]">
        <Title title="Confirmar compra" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <Link href={"/cart"} className="underline mb-5">
              Editar el carrito
            </Link>

            {/* Items */}
            {productsInCart.map((product) => (
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
                  <p className="font-semibold text-sm">
                    Subtotal: <span>${product.price * 3}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10 font-medium">
              <p>Julian Agama</p>
              <p>Av. 200 millas</p>
              <p>Hospital de emergencia</p>
            </div>

            <hr className="mb-10" />

            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span className="font-semibold">N° Productos</span>
              <span className="text-right">3 artículos</span>
              <span className="font-semibold">Subtotal</span>
              <span className="text-right">$100</span>
              <span className="font-semibold">Impuestos (15%)</span>
              <span className="text-right">$100</span>
              <span className="font-semibold">Total: </span>
              <span className="text-right">$100</span>
            </div>

            <div className="mb-2 w-full mt-24">
              <ButtonLink href="/orders/123" title="Colocar orden" />
            </div>
            <p className="text-[11px] text-center">
              Al hacer click aceptas los términos y condiciones de uso, para más
              información ingresa{" "}
              <Link href={"/"} className="underline">
                aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
