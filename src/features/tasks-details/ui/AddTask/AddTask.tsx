'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Form from '@/shared/ui/Form';
import { Button } from '@/shared/ui/Button';
import { InputButtonWrapper } from '@/features/tasks-list/ui/AddListForm/styles';
import { Title } from '@/shared/ui/Typography';
import { useTasksListStore } from '@/shared/store/store';
import { AddTaskProps, taskFormSchema, TaskFormValues } from '@/features/tasks-details/model/types';

export const AddTask = ({ listId }: AddTaskProps) => {
  const addTask = useTasksListStore((state) => state.addTask);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: TaskFormValues) => {
    addTask(listId, {
      title: data.title.trim(),
      description: data.description?.trim(),
      dueDate: data.dueDate,
    });
    reset();
  };

  return (
    <Form.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>Создать новую задачу:</Title>

      <Form.FormGroup>
        <Form.Label htmlFor="title">Название</Form.Label>
        <Form.FormInput
          id="title"
          type="text"
          {...register('title')}
          placeholder="Название"
          aria-invalid={!!errors.title}
        />
        {errors.title && <Form.ErrorMessage>{errors.title.message}</Form.ErrorMessage>}
      </Form.FormGroup>

      <Form.FormGroup>
        <Form.Label htmlFor="description">Описание</Form.Label>
        <Form.FormInput
          id="description"
          {...register('description')}
          placeholder="Описание"
          aria-invalid={!!errors.description}
        />
        {errors.description && <Form.ErrorMessage>{errors.description.message}</Form.ErrorMessage>}
      </Form.FormGroup>

      <Form.FormGroup>
        <Form.Label htmlFor="dueDate">Дата завершения</Form.Label>
        <Form.FormInput
          id="dueDate"
          type="datetime-local"
          {...register('dueDate')}
          aria-invalid={!!errors.dueDate}
        />
        {errors.dueDate && <Form.ErrorMessage>{errors.dueDate.message}</Form.ErrorMessage>}
      </Form.FormGroup>

      <InputButtonWrapper>
        <Button type="submit" fullWidth variant="secondary" disabled={isSubmitting}>
          {isSubmitting ? '...' : 'Создать задачу'}
        </Button>
      </InputButtonWrapper>
    </Form.FormContainer>
  );
};
