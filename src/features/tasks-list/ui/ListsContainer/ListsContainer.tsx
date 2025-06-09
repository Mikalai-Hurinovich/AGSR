'use client';

import { useTasksListStore } from '@/shared/store/store';
import { ListItem } from '@/features/tasks-list/ui/ListItem/ListItem';

export const ListsContainer = () => {
  const { lists, selectedListId, setSelectedListId } = useTasksListStore();

  return (
    <>
      {lists.map((list) => (
        <ListItem
          key={list.id}
          list={list}
          selected={selectedListId === list.id}
          onSelectAction={() => setSelectedListId(list.id)}
        />
      ))}
    </>
  );
};
