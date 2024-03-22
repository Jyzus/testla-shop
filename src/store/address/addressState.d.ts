import { FieldValues } from "react-hook-form";

export interface AddressState {
  names: string;
  lastnames: string;
  address: string;
  secondAddress: string | undefined;
  postal: string;
  city: string;
  country: string;
  cellphone: string;
  setAddress: (data: FieldValues) => void;
}
