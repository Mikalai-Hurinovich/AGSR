'use client';
import { Heading } from '@/shared/ui/Heading';
import { AddListForm } from '@/features/tasks-list/ui/AddListForm/AddListForm';
import { ListsContainer } from '@/features/tasks-list/ui/ListsContainer/ListsContainer';
import { Title } from '@/shared/ui/Typography';

import * as S from './styles';

export const TasksLists = () => {
  return (
    <S.Wrapper>
      <Heading as="h2" size="small" color="#C0CAF5">
        Списки задачи
      </Heading>
      <AddListForm />
      <Title>Мои Списки:</Title>
      <ListsContainer />
    </S.Wrapper>
  );
};
