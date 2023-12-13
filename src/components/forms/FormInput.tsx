import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { MessageFormData } from "../../types/FormTypes";

interface FormInputProps {
  register: UseFormRegister<MessageFormData>;
  name: keyof MessageFormData;
  placeholder: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  register,
  name,
  placeholder,
  error,
}) => (
  <div className="w-full flex items-center flex-col">
    <input
      {...register(name)}
      type="text"
      placeholder={placeholder}
      className={`bg-gray23 text-gray7F w-11/12 mt-5 h-16 rounded pl-4 text-lg ${
        error ? "border border-red-700 outline outline-red-700" : "outline-none"
      }`}
    />
    {error && <p className="text-red-700 text-xs mt-2">{error}</p>}
  </div>
);

export default FormInput;
