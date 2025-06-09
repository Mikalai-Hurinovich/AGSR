import styled from 'styled-components';

interface TaskTitleProps {
  $completed: boolean;
}

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin-bottom: 1rem;
  background-color: #24283b;
  border: 1px solid #414868;
  border-radius: 6px;
`;

export const TaskTitle = styled.span<TaskTitleProps>`
  flex: 1;
  font-size: 16px;
  color: ${(props) => (props.$completed ? '#7AA2F7' : '#C0CAF5')};
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
  cursor: pointer;

  &:hover {
    color: #7aa2f7;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 8px;
`;
