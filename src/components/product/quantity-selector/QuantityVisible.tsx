import React from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  amount: number;
  addAmount: (productSlug: string, amount: number) => void;
  productSlug: string;
}

const QuantityVisible = ({ amount, addAmount, productSlug }: Props) => {
  return (
    <div className="flex">
      <button onClick={() => addAmount(productSlug, -1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded-lg">
        {amount}
      </span>
      <button onClick={() => addAmount(productSlug, +1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};

export default QuantityVisible;
