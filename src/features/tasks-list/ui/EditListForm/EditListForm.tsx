'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Form from '@/shared/ui/Form';
import { Button } from '@/shared/ui/Button';
import { EditContainer, ListActions } from '../styles';
import { listFormSchema, ListFormValues } from '@/features/tasks-list/model/types';

type EditListFormProps = {
  initialName: string;
  onSave: (name: string) => void;
  onCancel: () => void;
};

export const EditListForm = ({ initialName, onSave, onCancel }: EditListFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ListFormValues>({
    resolver: zodResolver(listFormSchema),
    mode: 'onChange',
    defaultValues: {
      listName: initialName,
    },
  });

  const onSubmit = handleSubmit((data) => {
    onSave(data.listName.trim());
  });

  return (
    <EditContainer onSubmit={onSubmit}>
      <Form.FormInput {...register('listName')} autoFocus aria-invalid={!!errors.listName} />
      {errors.listName && <Form.ErrorMessage>{errors.listName.message}</Form.ErrorMessage>}
      <ListActions>
        <Button type="submit" variant="primary" disabled={!isValid}>
          &#128427;
        </Button>
        <Button type="button" onClick={onCancel} variant="secondary">
          ↩
        </Button>
      </ListActions>
    </EditContainer>
  );
};
