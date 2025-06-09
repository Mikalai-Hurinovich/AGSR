export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  comment?: string;
}

export interface TasksList {
  id: string;
  name: string;
  tasks: Task[];
}
