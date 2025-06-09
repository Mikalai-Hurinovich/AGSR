'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/ui/Button';
import { useTaskTimer } from '@/entity/task/lib/useTaskTimer';
import { Modal } from '@/shared/ui/Modal';
import { Heading } from '@/shared/ui/Heading';
import Form from '@/shared/ui/Form';
import { useTasksListStore } from '@/shared/store/store';
import { TaskFormModalValues, taskModalSchema } from '@/features/tasks-details/model/types';
import { Title } from '@/shared/ui/Typography';
import { Task } from '@/entity/task/types/task';

export const TaskModal = () => {
  const {
    selectedTask,
    setSelectedTask,
    editTask,
    deleteTask,
    toggleTask,
    selectedListId: currentListId,
  } = useTasksListStore();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isDirty, errors },
  } = useForm<TaskFormModalValues>({
    resolver: zodResolver(taskModalSchema),
    mode: 'onChange',
  });

  const [isEditing, setIsEditing] = useState(false);
  const dueDate = watch('dueDate');
  const timer = useTaskTimer(dueDate);
  const isCompleted = watch('completed');

  useEffect(() => {
    if (selectedTask) {
      reset({
        title: selectedTask.title,
        description: selectedTask.description || '',
        dueDate: selectedTask.dueDate || '',
        completed: selectedTask.completed || false,
        comment: selectedTask.comment || '',
      });
    }
  }, [selectedTask, reset]);

  const handleSave = handleSubmit((data) => {
    if (currentListId && selectedTask) {
      const updatedTask: Omit<Task, 'id'> = {
        title: data.title.trim(),
        description: data.description?.trim(),
        dueDate: data.dueDate,
        completed: data.completed,
        comment: data.comment?.trim(),
      };

      editTask(currentListId, selectedTask.id, updatedTask);

      setSelectedTask({
        ...selectedTask,
        ...updatedTask,
      });

      setIsEditing(false);
    }
  });

  const handleDelete = () => {
    if (currentListId && selectedTask) {
      deleteTask(currentListId, selectedTask.id);
      setSelectedTask(null);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleToggleCompleted = () => {
    if (currentListId && selectedTask) {
      const newValue = !isCompleted;
      setValue('completed', newValue, { shouldDirty: true });
      if (!isEditing) {
        toggleTask(currentListId, selectedTask.id);
      }
    }
  };

  if (!selectedTask || !currentListId) return null;

  return (
    <Modal isOpen={!!selectedTask} onClose={() => setSelectedTask(null)}>
      <Heading as={'h2'}>Детали задачи</Heading>
      <div>
        <Form.FormGroup>
          <Form.Label>Дата завершения:</Form.Label>
          <Form.FormInput
            type="datetime-local"
            {...register('dueDate')}
            readOnly={!isEditing}
            className={!isEditing ? 'read-only-style' : ''}
          />
          {errors.dueDate && <Form.ErrorMessage>{errors.dueDate.message}</Form.ErrorMessage>}
        </Form.FormGroup>
        <Form.Checkbox
          type="checkbox"
          {...register('completed')}
          disabled={!isEditing}
          onChange={handleToggleCompleted}
        />
        <Form.Label>Статус: {isCompleted ? 'Выполнена' : 'Не выполнена'}</Form.Label>
        <Form.FormGroup>
          <Form.Label>Название задачи:</Form.Label>
          <Form.FormInput
            {...register('title')}
            readOnly={!isEditing}
            className={!isEditing ? 'read-only-style' : ''}
          />
          {errors.title && <Form.ErrorMessage>{errors.title.message}</Form.ErrorMessage>}
        </Form.FormGroup>

        <Form.FormGroup>
          <Form.Label>Описание задачи:</Form.Label>
          <Form.FormInput
            {...register('description')}
            readOnly={!isEditing}
            className={!isEditing ? 'read-only-style' : ''}
          />
          {errors.description && (
            <Form.ErrorMessage>{errors.description.message}</Form.ErrorMessage>
          )}
        </Form.FormGroup>

        <Form.FormGroup>
          <Form.Label>Комментарии:</Form.Label>
          <Form.TextArea
            {...register('comment')}
            readOnly={!isEditing}
            className={!isEditing ? 'read-only-style' : ''}
          />
          {errors.comment && <Form.ErrorMessage>{errors.comment.message}</Form.ErrorMessage>}
        </Form.FormGroup>

        {dueDate && (
          <div>
            <Title>Осталось времени: </Title>
            <Title>{timer}</Title>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button variant="secondary" onClick={toggleEdit}>
          {isEditing ? '↩' : `Редактировать`}
        </Button>
        {isEditing && (
          <Button variant="secondary" onClick={handleSave} disabled={!isDirty}>
            &#128427;
          </Button>
        )}
        <Button variant="secondary" onClick={handleDelete}>
          Удалить
        </Button>
        <Button variant="secondary" onClick={() => setSelectedTask(null)}>
          Закрыть
        </Button>
      </div>
    </Modal>
  );
};
