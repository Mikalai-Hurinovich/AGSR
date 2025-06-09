'use client';
import React from 'react';
import { useTasksListStore } from '@/shared/store/store';
import { Heading } from '@/shared/ui/Heading';
import { AddTask } from '@/features/tasks-details/ui/AddTask/AddTask';

import * as S from './styles';

export const TasksDetails = () => {
  const currentList = useTasksListStore((state) =>
    state.lists.find((list) => list.id === state.selectedListId),
  );

  return (
    <S.Wrapper>
      {!currentList ? (
        <Heading as="h2" size="small">
          Список не выбран
        </Heading>
      ) : (
        <>
          <Heading as="h2" size="small">
            Детали списка задач {currentList.name}
          </Heading>
          <AddTask listId={currentList.id} />
        </>
      )}
    </S.Wrapper>
  );
};
