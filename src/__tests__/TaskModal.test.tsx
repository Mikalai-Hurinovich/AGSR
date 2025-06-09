import { fireEvent, render, screen } from '@testing-library/react';
import { TaskModal } from '@/features/tasks-details/ui/TaskModal/TaskModal';
import { useTasksListStore } from '@/shared/store/store';

jest.mock('@/shared/store/store', () => ({
  useTasksListStore: jest.fn(),
}));

jest.mock('@/entity/task/lib/useTaskTimer', () => ({
  useTaskTimer: jest.fn().mockReturnValue('1d 2h 30m'),
}));

describe('TaskModal Component', () => {
  const mockSetSelectedTask = jest.fn();
  const mockEditTask = jest.fn();
  const mockDeleteTask = jest.fn();
  const mockToggleTask = jest.fn();

  const mockTask = {
    id: 'task1',
    title: 'Test Task',
    description: 'Test Description',
    completed: false,
    dueDate: '2023-12-31T23:59:59.999Z',
  };

  beforeEach(() => {
    jest.clearAllMocks();

    jest.mocked(useTasksListStore).mockReturnValue({
      selectedTask: mockTask,
      selectedListId: 'list1',
      setSelectedTask: mockSetSelectedTask,
      editTask: mockEditTask,
      deleteTask: mockDeleteTask,
      toggleTask: mockToggleTask,
    });
  });

  test('renders task details when a task is selected', () => {
    render(<TaskModal />);

    expect(screen.getByDisplayValue('Test Task')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Description')).toBeInTheDocument();
    expect(screen.getByText('1d 2h 30m')).toBeInTheDocument();
  });

  test('closes modal when close button is clicked', () => {
    render(<TaskModal />);

    const closeButton = screen.getByRole('button', { name: /закрыть/i });
    fireEvent.click(closeButton);

    expect(mockSetSelectedTask).toHaveBeenCalledWith(null);
  });

  test('toggles task completion status', () => {
    render(<TaskModal />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockToggleTask).toHaveBeenCalledWith('list1', 'task1');
  });

  test('delete task when delete button is clicked', () => {
    render(<TaskModal />);

    const deleteButton = screen.getByText(/удалить/i);
    fireEvent.click(deleteButton);

    expect(mockDeleteTask).toHaveBeenCalledWith('list1', 'task1');
    expect(mockSetSelectedTask).toHaveBeenCalledWith(null);
  });
});
