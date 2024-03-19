"use client";

import { use, useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { UseQuantitySelector } from "./useQuantitySelector";

interface Props {
  useQuantitySelector: UseQuantitySelector;
}

const QuantitySelector = ({ useQuantitySelector }: Props) => {
  return (
    <div className="flex">
      <button onClick={() => useQuantitySelector.handleQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded-lg">
        {useQuantitySelector.quantity}
      </span>
      <button onClick={() => useQuantitySelector.handleQuantityChange(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};

export default QuantitySelector;
