import { Task, TasksList } from '@/entity/task/types/task';
import { create } from 'zustand';

interface TasksListStore {
  lists: TasksList[];
  selectedListId: string | null;
  selectedTask: Task | null;

  setSelectedListId: (id: string | null) => void;
  addList: (name: string) => void;
  editList: (id: string, name: string) => void;
  deleteList: (id: string) => void;

  setSelectedTask: (task: Task | null) => void;
  addTask: (listId: string, taskData: Omit<Task, 'id' | 'completed'>) => void;
  toggleTask: (listId: string, taskId: string) => void;
  editTask: (listId: string, taskId: string, updates: Partial<Task>) => void;
  deleteTask: (listId: string, taskId: string) => void;

  getCurrentList: () => TasksList | undefined;
}

export const useTasksListStore = create<TasksListStore>((set, get) => ({
  lists: [],
  selectedListId: null,
  selectedTask: null,

  setSelectedListId: (id) => set({ selectedListId: id }),
  setSelectedTask: (task) => set({ selectedTask: task }),

  addList: (name) =>
    set((state) => ({
      lists: [
        ...state.lists,
        {
          id: Date.now().toString(),
          name,
          tasks: [],
        },
      ],
    })),

  editList: (id, name) =>
    set((state) => ({
      lists: state.lists.map((list) => (list.id === id ? { ...list, name } : list)),
    })),

  deleteList: (id) =>
    set((state) => ({
      lists: state.lists.filter((list) => list.id !== id),
      selectedListId: state.selectedListId === id ? null : state.selectedListId,
      selectedTask: state.selectedListId === id ? null : state.selectedTask,
    })),

  addTask: (listId, taskData) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              tasks: [
                ...list.tasks,
                {
                  id: Date.now().toString(),
                  completed: false,
                  ...taskData,
                },
              ],
            }
          : list,
      ),
    })),

  toggleTask: (listId, taskId) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task,
              ),
            }
          : list,
      ),
    })),

  editTask: (listId, taskId, updates) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === taskId ? { ...task, ...updates } : task,
              ),
            }
          : list,
      ),
    })),

  deleteTask: (listId, taskId) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              tasks: list.tasks.filter((task) => task.id !== taskId),
            }
          : list,
      ),
    })),

  getCurrentList: () => {
    const { lists, selectedListId } = get();
    return lists.find((list) => list.id === selectedListId);
  },
}));
