import { create } from "zustand";
import { CartState } from "./cartState";

export const useCarStore = create<CartState>((set, get) => ({
  cart: [],
  addProduct: (product) => {
    if (get().cart.length >= 1) {
      const findProduct = get().cart.find(
        (oldProduct) => oldProduct.slug == product.slug
      );
      if (findProduct) {
        findProduct.amount += 1;
        set(() => ({
          cart: [...get().cart, ...[findProduct]],
        }));
      } else {
      }
    } else {
      set(() => ({
        cart: [product],
      }));
    }
  },
  addAmount: (productSlug, amount) => {
    console.log(amount);
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
}));
