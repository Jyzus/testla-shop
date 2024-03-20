import { ValidSizes } from "@/interfaces";
import { useState } from "react";

export type ReturnSizeSelector = {
  sizes: ValidSizes;
  onSizeChanged: (size: ValidSizes) => void;
};

const useSizeSelector = (size: ValidSizes | undefined): ReturnSizeSelector => {
  const [sizes, setSizes] = useState<ValidSizes>(
    size !== undefined ? size : "S"
  );

  const onSizeChanged = (value: ValidSizes) => {
    setSizes(value);
  };

  return { sizes, onSizeChanged };
};

export default useSizeSelector;
