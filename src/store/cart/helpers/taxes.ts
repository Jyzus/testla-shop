import { ProductSelected } from "@/interfaces";

export const taxes = (products: ProductSelected[]) => {
  let amount: number = 0;
  for (let product of products) {
    amount = amount + product.price * product.amount;
  }
  return amount * 0.15;
};
