import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  cf_password: z.string().min(8),
}).refine((data) => data.password === data.cf_password, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type IRegisterSchema = z.infer<typeof registerSchema>;
