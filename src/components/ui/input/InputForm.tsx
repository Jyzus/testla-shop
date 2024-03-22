import clsx from "clsx";
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface Props {
  label: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  validations: RegisterOptions;
  errors: FieldErrors;
}

export const InputForm = ({
  label,
  register,
  name,
  validations,
  errors,
}: Props) => (
  <div className="relative flex flex-col mb-2">
    <span>{label}</span>
    <input
      {...register(name, validations)}
      type="text"
      className="p-2 border rounded-md bg-gray-200"
    />
    <div
      className={clsx(
        "absolute left-0 bottom-0 bg-red-500 duration-300 transition-all",
        {
          "w-full h-[2px]": errors[name],
        }
      )}
    ></div>
  </div>
);
