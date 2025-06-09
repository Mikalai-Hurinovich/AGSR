import { useTasksListStore } from '@/shared/store/store';

describe('TasksListStore', () => {
  beforeEach(() => {
    useTasksListStore.setState({
      lists: [],
      selectedListId: null,
      selectedTask: null,
    });
  });

  test('should add a new list', () => {
    const { addList } = useTasksListStore.getState();
    addList('Test List');
    const { lists } = useTasksListStore.getState();

    expect(lists.length).toBe(1);
    expect(lists[0].name).toBe('Test List');
    expect(lists[0].tasks).toEqual([]);
  });

  test('should edit a list name', () => {
    const { addList, editList } = useTasksListStore.getState();
    addList('Test List');
    const { lists } = useTasksListStore.getState();
    const listId = lists[0].id;

    editList(listId, 'Updated List');
    const updatedLists = useTasksListStore.getState().lists;

    expect(updatedLists[0].name).toBe('Updated List');
  });

  test('should delete a list', () => {
    const { addList, deleteList } = useTasksListStore.getState();
    addList('Test List');
    const { lists } = useTasksListStore.getState();
    const listId = lists[0].id;

    deleteList(listId);
    const updatedLists = useTasksListStore.getState().lists;

    expect(updatedLists.length).toBe(0);
  });
});
