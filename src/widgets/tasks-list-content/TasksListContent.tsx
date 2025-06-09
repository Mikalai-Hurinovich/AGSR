'use client';
import React from 'react';
import { useTasksListStore } from '@/shared/store/store';
import { TaskItem } from '@/features/tasks-details/ui/TaskItem/TaskItem';
import { Heading } from '@/shared/ui/Heading';
import { TaskModal } from '@/features/tasks-details/ui/TaskModal/TaskModal';

import * as S from './styles';

export const TasksListContent = () => {
  const currentList = useTasksListStore((state) =>
    state.lists.find((list) => list.id === state.selectedListId),
  );
  const selectedTask = useTasksListStore((state) => state.selectedTask);

  return (
    <S.Wrapper>
      <Heading as="h2" size="small">
        Задачи:
      </Heading>
      {currentList?.tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      {selectedTask && <TaskModal />}
    </S.Wrapper>
  );
};
