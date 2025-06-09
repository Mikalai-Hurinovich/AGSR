'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema, TaskValues } from '@/features/tasks-details/model/types';
import { ButtonContainer, EditContainer } from '@/features/tasks-list/ui/styles';
import Form from '@/shared/ui/Form';
import { Button } from '@/shared/ui/Button';

interface TaskEditFormProps {
  initialTitle: string;
  onSave: (data: TaskValues) => void;
  onCancel: () => void;
}

export const TaskEditForm = ({ initialTitle, onSave, onCancel }: TaskEditFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TaskValues>({
    resolver: zodResolver(taskSchema),
    mode: 'onChange',
    defaultValues: {
      title: initialTitle,
    },
  });

  return (
    <EditContainer onSubmit={handleSubmit(onSave)}>
      <Form.FormInput {...register('title')} autoFocus aria-invalid={!!errors.title} />
      {errors.title && <Form.ErrorMessage>{errors.title.message}</Form.ErrorMessage>}
      <ButtonContainer>
        <Button type="submit" variant="secondary" disabled={!isValid}>
          &#128427;
        </Button>
        <Button type="button" onClick={onCancel} variant="secondary">
          ↩
        </Button>
      </ButtonContainer>
    </EditContainer>
  );
};
