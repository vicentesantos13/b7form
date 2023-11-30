"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const FormArea = () => {
  const MessageFormSchema = z.object({
    name: z
      .string()
      .min(2, { message: "O nome deve ter pelo menos 2 caracteres." })
      .max(30, { message: "O nome deve ter no máximo 30 caracteres." }),
    text: z
      .string()
      .min(3, { message: "A mensagem deve ter pelo menos 3 caracteres." })
      .max(200, { message: "A mensagem deve ter no máximo 200 caracteres." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(MessageFormSchema),
  });

  const handleSendMessage = () => {
    alert("Mensagem enviada");
  };

  return (
    <form
      onSubmit={handleSubmit(handleSendMessage)}
      className="bg-gray1C mx-6 md:mx-0 mt-12 md:mt-0 flex flex-col items-center rounded md:w-1/2"
    >
      <div className="w-full flex items-center flex-col ">
        <input
          {...register("name")}
          type="text"
          placeholder="Digite o seu nome"
          className={`bg-gray23 text-gray7F w-11/12 mt-5 h-16 rounded pl-4 text-lg ${
            errors.name
              ? "border border-red-700 outline outline-red-700"
              : "outline-none"
          } `}
        />
        {errors.name && (
          <p className="text-red-700 text-xs mt-2">
            {errors.name.message as string}
          </p>
        )}
      </div>
      <div className="w-full flex items-center flex-col ">
        <textarea
          {...register("text")}
          className={`bg-gray23 text-gray7F w-11/12 mt-8 h-72 rounded px-4 pt-4 resize-none text-lg ${
            errors.text
              ? "border border-red-700 outline outline-red-700"
              : "outline-none"
          }`}
          placeholder="Digite a sua mensagem"
        ></textarea>
        {errors.text && (
          <p className="text-red-700 text-xs mt-2">
            {errors.text.message as string}
          </p>
        )}
      </div>
      <button className="bg-greenButton text-white text-xl font-medium w-11/12 h-16 rounded my-6">
        Enviar mensagem
      </button>
    </form>
  );
};
