import { z } from 'zod';

export const listFormSchema = z.object({
  listName: z
    .string()
    .min(3, 'Минимум 3 символа!')
    .max(30, 'Максимум 30 символов!')
    .regex(/^[a-zA-Zа-яА-Я0-9\s]+$/, 'Только буквы, цифры и пробелы!')
    .refine((val) => val.trim().length > 0, 'Название не может быть пустым!'),
});

export type ListFormValues = z.infer<typeof listFormSchema>;
