"use client";

import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import useQuantitySelector from "@/components/product/quantity-selector/useQuantitySelector";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import useSizeSelector from "@/components/product/size-selector/useSizeSelector";
import ProductMobileSlildeshow from "@/components/product/slideshow/ProductMobileSlildeshow";
import ProductSlildeshow from "@/components/product/slideshow/ProductSlildeshow";
import Button from "@/components/ui/button/Button";
import { titleFont } from "@/config/fonts";
import { ProductSelected, ValidSizes } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { useCarStore } from "@/store/cart/cartStore";
import { notFound } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  params: {
    slug: string;
  };
}

const Page = ({ params }: Props) => {
  const addProduct = useCarStore((state) => state.addProduct);
  const sizeSelector = useSizeSelector();
  const quantitySelector = useQuantitySelector();

  const { slug } = params;
  const product = initialData.products.find((prod) => prod.slug === slug);

  const onSubmit = () => {
    if (product) {
      const productSelected: ProductSelected = {
        ...product,
        ...{ sizes: sizeSelector.sizes, amount: quantitySelector.quantity },
      };
      addProduct(productSelected);
    }
  };

  if (!product) {
    notFound();
  }
  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* Slide show */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile slideshow */}
        <ProductMobileSlildeshow
          title={product.title}
          images={product.images}
          className="md:hidden w-screen"
        />
        {/* Desktop slideshow */}
        <ProductSlildeshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles del producto */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de tallas */}
        <SizeSelector
          avaibleSizes={product.sizes}
          useSizeSelector={sizeSelector}
        />

        {/* Selector de cantidad */}
        <QuantitySelector useQuantitySelector={quantitySelector} />

        {/* Botón */}
        <Button
          title="Agregar al carrito"
          className="my-5"
          type="submit"
          onClick={onSubmit}
        />

        {/* Description */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default Page;
