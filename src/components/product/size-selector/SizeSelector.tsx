import { ValidSizes } from "@/interfaces";
import clsx from "clsx";
import React from "react";
import { ReturnSizeSelector } from "./useSizeSelector";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  useSizeSelector: ReturnSizeSelector;
  avaibleSizes: ValidSizes[];
}

const SizeSelector = ({ useSizeSelector, avaibleSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>
      <div className="flex">
        {avaibleSizes.map((size) => {
          return (
            <label
              htmlFor="size"
              key={size}
              className={clsx(
                "mx-2 hover:underline text-lg w-6 cursor-pointer text-center",
                {
                  "underline text-blue-700 font-semibold":
                    size == useSizeSelector.sizes,
                }
              )}
              onClick={() => useSizeSelector.onSizeChanged(size)}
            >
              <p>{size}</p>
              <input
                type="text"
                key={size}
                value={size}
                className="hidden"
                name="sizes"
                disabled
                id="sizes"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;
