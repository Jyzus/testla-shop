export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: ValidGenders;
}

export type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type ValidTypes = "shirts" | "pants" | "hoodies" | "hats";
export type ValidGenders = "men" | "women" | "kid" | "unisex";

export interface ProductSelected extends Omit<Product, "sizes"> {
  sizes: ValidSizes;
  amount: number;
}
