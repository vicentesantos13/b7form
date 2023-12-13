import { z } from "zod";

export const MessageFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." })
    .max(30, { message: "O nome deve ter no máximo 30 caracteres." }),
  text: z
    .string()
    .min(3, { message: "A mensagem deve ter pelo menos 3 caracteres." })
    .max(200, { message: "A mensagem deve ter no máximo 200 caracteres." }),
});

export interface MessageFormData {
  name: string;
  text: string;
}
