'use client';

import { useState } from 'react';
import { TasksList } from '@/entity/task/types/task';
import { Button } from '@/shared/ui/Button';
import { useTasksListStore } from '@/shared/store/store';
import { EditListForm } from '@/features/tasks-list/ui/EditListForm/EditListForm';

import * as S from '../styles';

export const ListItem = ({
  list,
  selected,
  onSelectAction,
}: {
  list: TasksList;
  selected: boolean;
  onSelectAction: () => void;
}) => {
  const [editing, setEditing] = useState(false);
  const { editList, deleteList } = useTasksListStore();

  const handleSave = (newName: string) => {
    editList(list.id, newName);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <S.Container>
      {editing ? (
        <EditListForm initialName={list.name} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <>
          <S.ListTitle onClick={onSelectAction} $selected={selected}>
            {list.name}
            <S.TaskCount>({list.tasks.length})</S.TaskCount>
          </S.ListTitle>
          <S.ListActions>
            <Button onClick={() => setEditing(true)} variant="secondary">
              &#x1F589;
            </Button>
            <Button onClick={() => deleteList(list.id)} variant="secondary">
              &#x2573;
            </Button>
          </S.ListActions>
        </>
      )}
    </S.Container>
  );
};
