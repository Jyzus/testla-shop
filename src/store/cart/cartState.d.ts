import { Product, ProductSelected } from "@/interfaces";

export interface CartState {
  cart: ProductSelected[];
  addProduct: (products: ProductSelected) => void;
  addAmount: (slugProduct: string, amount: number) => void;
}
