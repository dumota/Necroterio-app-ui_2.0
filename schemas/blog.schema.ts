import { z } from "zod";

export const blogFormSchema = z.object({
  title: z
    .string()
    .min(10, "O título deve ter pelo menos 10 caracteres")
    .max(50, "O título deve ter no máximo 50 caracteres"),
  description: z
    .string()
    .min(50, "A descrição deve ter pelo menos 50 caracteres")
    .max(200, "A descrição deve ter no máximo 200 caracteres"),
  content: z
    .string()
    .min(2000, "O conteúdo deve ter pelo menos 2000 caracteres"),
  imageUrl: z.string().optional().nullable(),
  categoryId: z.string().min(1, "Selecione uma categoria"),
});

export type IBlogFormData = z.infer<typeof blogFormSchema>;
