import { TasksLists } from '@/widgets/tasks-lists/TasksLists';
import { TasksDetails } from '@/widgets/tasks-details/TasksDetails';
import { TasksListContent } from '@/widgets/tasks-list-content/TasksListContent';

import * as S from './styles';

export default function TasksPage() {
  return (
    <S.TasksLayout>
      <S.TasksSidebar>
        <TasksLists />
      </S.TasksSidebar>
      <S.TasksSidebar>
        <TasksDetails />
      </S.TasksSidebar>
      <S.TasksContent>
        <TasksListContent />
      </S.TasksContent>
    </S.TasksLayout>
  );
}
