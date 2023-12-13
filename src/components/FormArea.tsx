"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageFormSchema, MessageFormData } from "../types/FormTypes";
import FormInput from "./forms/FormInput";
import FormTextarea from "./forms/FormTextarea";

export const FormArea: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageFormData>({
    resolver: zodResolver(MessageFormSchema),
  });

  const handleSendMessage: SubmitHandler<MessageFormData> = (data) => {
    console.log(data);
    alert("Mensagem enviada");
  };

  return (
    <form
      onSubmit={handleSubmit(handleSendMessage)}
      className="bg-gray1C mx-6 md:mx-0 mt-12 md:mt-0 flex flex-col items-center rounded md:w-1/2"
    >
      <FormInput
        register={register}
        name="name"
        placeholder="Digite o seu nome"
        error={errors.name?.message}
      />
      <FormTextarea
        register={register}
        name="text"
        placeholder="Digite a sua mensagem"
        error={errors.text?.message}
      />
      <button className="bg-greenButton text-white text-xl font-medium w-11/12 h-16 rounded my-6">
        Enviar mensagem
      </button>
    </form>
  );
};

export default FormArea;
