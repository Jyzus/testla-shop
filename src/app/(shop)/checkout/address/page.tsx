"use client";

import { InputForm } from "@/components/ui/input/InputForm";
import Title from "@/components/ui/title/Title";
import { useAddressStore } from "@/store/address/addressStore";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

export default function NamePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const setAddress = useAddressStore((state) => state.setAddress);
  const router = useRouter();

  const onSubmit = (value: FieldValues) => {
    setAddress(value);
    router.push("/orders/123");
  };
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <form
          className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputForm
            register={register}
            label="Nombres"
            name="names"
            validations={{ required: true }}
            errors={errors}
          />
          <InputForm
            register={register}
            label="Apellidos"
            name="lastName"
            validations={{ required: true }}
            errors={errors}
          />
          <InputForm
            register={register}
            label="Dirección"
            name="address"
            validations={{ required: true }}
            errors={errors}
          />
          <InputForm
            register={register}
            label="Dirección 2"
            name="secondAddress"
            validations={{ required: false }}
            errors={errors}
          />
          <InputForm
            register={register}
            label="Código postal"
            name="postal"
            validations={{ required: true }}
            errors={errors}
          />
          <InputForm
            register={register}
            label="Ciudad"
            name="city"
            validations={{ required: true }}
            errors={errors}
          />
          <InputForm
            register={register}
            label="País"
            name="country"
            validations={{ required: true }}
            errors={errors}
          />
          <InputForm
            register={register}
            label="Teléfono"
            name="cellphone"
            validations={{ required: true }}
            errors={errors}
          />
          <div className="flex flex-col mb-2 sm:mt-10">
            <button className="btn-primary flex w-full sm:w-1/2 justify-center ">
              Siguiente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
