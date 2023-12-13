import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { MessageFormData } from "../../types/FormTypes";

interface FormTextareaProps {
  register: UseFormRegister<MessageFormData>;
  name: keyof MessageFormData;
  placeholder: string;
  error?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  register,
  name,
  placeholder,
  error,
}) => (
  <div className="w-full flex items-center flex-col">
    <textarea
      {...register(name)}
      className={`bg-gray23 text-gray7F w-11/12 mt-8 h-72 rounded px-4 pt-4 resize-none text-lg ${
        error ? "border border-red-700 outline outline-red-700" : "outline-none"
      }`}
      placeholder={placeholder}
    ></textarea>
    {error && <p className="text-red-700 text-xs mt-2">{error}</p>}
  </div>
);

export default FormTextarea;
