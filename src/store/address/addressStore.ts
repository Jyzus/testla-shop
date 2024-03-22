import { create } from "zustand";
import { AddressState } from "./addressState";

export const useAddressStore = create<AddressState>((set) => ({
  address: "",
  cellphone: "",
  city: "",
  country: "",
  lastnames: "",
  names: "",
  postal: "",
  secondAddress: "",
  setAddress: (address) => {
    console.log(address);
    set(() => ({
      address: address.address,
      cellphone: address.cellphone,
      city: address.city,
      country: address.country,
      lastnames: address.lastnames,
      names: address.names,
      postal: address.postal,
      secondAddress: address.secondAddress,
    }));
  },
}));
