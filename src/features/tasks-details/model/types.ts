import { z } from 'zod';
import { Task } from '@/entity/task/types/task';

export const taskFormSchema = z.object({
  title: z
    .string()
    .min(3, 'Название должно содержать минимум 3 символа')
    .max(50, 'Максимальная длина названия - 50 символов'),
  description: z.string().max(50, 'Описание не должно превышать 50 символов').optional(),
  dueDate: z
    .string()
    .refine(
      (val) => {
        if (!val) return true;
        const date = new Date(val);
        return !isNaN(date.getTime());
      },
      { message: 'Некорректная дата' },
    )
    .optional(),
});

export type TaskFormValues = z.infer<typeof taskFormSchema>;

export interface AddTaskProps {
  listId: string;
}

export const taskSchema = z.object({
  title: z
    .string()
    .min(3, 'Название должно содержать минимум 3 символа')
    .max(50, 'Максимальная длина - 50 символов'),
});

export type TaskValues = z.infer<typeof taskSchema>;

export interface TaskItemProps {
  task: Task;
}

export const taskModalSchema = z.object({
  title: z
    .string()
    .min(3, 'Название должно содержать минимум 3 символа')
    .max(50, 'Максимальная длина названия - 50 символов'),
  description: z.string().max(50, 'Описание не должно превышать 50 символов').optional(),
  dueDate: z
    .string()
    .refine((val) => !val || new Date(val).toString() !== 'Invalid Date', {
      message: 'Некорректный формат даты',
    })
    .optional(),
  completed: z.boolean(),
  comment: z
    .string()
    .refine((val) => val.length < 500, { message: 'Комментарий не должен превышать 500 символов' })
    .optional(),
});

export type TaskFormModalValues = z.infer<typeof taskModalSchema>;
