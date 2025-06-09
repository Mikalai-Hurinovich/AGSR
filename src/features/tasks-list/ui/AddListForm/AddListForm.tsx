'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/shared/ui/Button';
import Form from '@/shared/ui/Form';
import { useTasksListStore } from '@/shared/store/store';
import { listFormSchema, ListFormValues } from '@/features/tasks-list/model/types';

import * as S from './styles';

export const AddListForm = () => {
  const { addList } = useTasksListStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ListFormValues>({
    resolver: zodResolver(listFormSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: ListFormValues) => {
    if (isValid) {
      addList(data.listName.trim());
      reset();
    }
  };

  return (
    <Form.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Form.Label htmlFor="listName">Создать список</Form.Label>
      <S.InputButtonWrapper>
        <Form.FormInput
          {...register('listName')}
          id="listName"
          type="text"
          placeholder="Введите название списка"
          aria-label="Название нового списка"
          aria-invalid={errors.listName ? 'true' : 'false'}
        />
        <Button type="submit" variant="secondary" disabled={isSubmitting}>
          +
        </Button>
        {errors.listName && (
          <Form.ErrorMessage role="alert">{errors.listName.message}</Form.ErrorMessage>
        )}
      </S.InputButtonWrapper>
    </Form.FormContainer>
  );
};
