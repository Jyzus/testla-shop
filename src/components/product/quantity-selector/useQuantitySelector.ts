import { useState } from "react";

export type UseQuantitySelector = {
  quantity: number;
  handleQuantityChange: (amountChange: number) => void;
};

const useQuantitySelector = (amount = 1): UseQuantitySelector => {
  const [quantity, setQuantity] = useState(amount);

  const handleQuantityChange = (amountChange: number) => {
    setQuantity(quantity + amountChange);
  };

  return {
    quantity,
    handleQuantityChange,
  };
};

export default useQuantitySelector;
