'use client';

import { useState } from 'react';
import { useTasksListStore } from '@/shared/store/store';
import { TaskItemProps } from '@/features/tasks-details/model/types';
import Form from '@/shared/ui/Form';
import { Button } from '@/shared/ui/Button';
import { TaskEditForm } from '@/features/tasks-details/ui/TaskEditForm/TaskEditForm';

import * as S from './styles';

export const TaskItem = ({ task }: TaskItemProps) => {
  const { selectedListId, toggleTask, setSelectedTask, deleteTask, editTask } = useTasksListStore();

  const [editing, setEditing] = useState(false);

  const handleSave = (data: { title: string }) => {
    if (selectedListId) {
      editTask(selectedListId, task.id, { title: data.title.trim() });
      setEditing(false);
    }
  };

  const handleCancel = () => setEditing(false);
  const handleDelete = () => selectedListId && deleteTask(selectedListId, task.id);

  if (!selectedListId) return null;

  return (
    <S.TaskItemContainer>
      <Form.Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(selectedListId, task.id)}
      />

      {editing ? (
        <TaskEditForm initialTitle={task.title} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <>
          <S.TaskTitle $completed={task.completed} onClick={() => setSelectedTask(task)}>
            {task.title}
          </S.TaskTitle>
          <S.TaskActions>
            <Button variant="secondary" onClick={() => setEditing(true)}>
              &#x1F589;
            </Button>
            <Button variant="secondary" onClick={handleDelete}>
              &#x2573;
            </Button>
          </S.TaskActions>
        </>
      )}
    </S.TaskItemContainer>
  );
};
