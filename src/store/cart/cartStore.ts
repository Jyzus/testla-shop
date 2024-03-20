import { create } from "zustand";
import { CartState } from "./cartState";
import { subtotal } from "./helpers/subtotal";
import { ProductSelected } from "@/interfaces";
import { taxes } from "./helpers/taxes";

export const useCarStore = create<CartState>((set, get) => ({
  cart: [],
  addProduct: (product) => {
    const findProduct = get().cart.find(
      (products) => products.slug == product.slug
    );
    if (findProduct == undefined) {
      set(() => ({
        cart: [...get().cart, product],
      }));
    } else {
      set(() => ({
        cart: get().cart.map((oldProducts) => {
          if (oldProducts.slug == product.slug) {
            oldProducts.amount += product.amount;
          }
          return oldProducts;
        }),
      }));
    }
  },
  addAmount: (productSlug, amount) => {
    set((state) => {
      const newProducts = state.cart.map((product) => {
        if (product.slug == productSlug && product.amount > 1) {
          product.amount += amount;
        }
        return product;
      });
      return {
        cart: newProducts,
      };
    });
  },
  removeProduct: (product) => {
    set(() => ({
      cart: get().cart.filter((products) => products.slug !== product.slug),
    }));
  },
  quantityProducts: () => get().cart.length,
  subtotal: () => subtotal(get().cart),
  taxes: () => taxes(get().cart),
  total: () => subtotal(get().cart) + taxes(get().cart),
}));
