import { z } from "zod";

export const loginSchema = z.object({
    email: z.string({ required_error: "Email обязателен" })
    .min(1, "Email обязателен")
    .email("Некорректный email"),
    password: z.string({ required_error: "Пароль обязателен" })
    .min(1, "Пароль обязателен")
    .min(8, "Пароль должен быть не короче 8 символов")
    .max(32, "Пароль должен быть не длиннее 32 символова"),
})

export const registerSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})