import { Product, ProductSelected } from "@/interfaces";

export interface CartState {
  cart: ProductSelected[];
  addAmount: (slugProduct: string, amount: number) => void;
  addProduct: (products: ProductSelected) => void;
  removeProduct: (product: ProductSelected) => void;
  quantityProducts: () => number;
  subtotal: () => number;
  taxes: () => number;
  total: () => number;
}
