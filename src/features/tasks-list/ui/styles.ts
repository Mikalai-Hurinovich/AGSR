import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #24283b;
  border: 1px solid #414868;
  border-radius: 8px;
  transition: transform 0.2s;
  gap: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

export const ListTitle = styled.div<{ $selected?: boolean }>`
  font-size: 1rem;
  font-weight: ${({ $selected }) => ($selected ? '700' : '500')};
  color: ${({ $selected }) => ($selected ? '#646CFF' : '#fff')};
  cursor: pointer;
  flex: 1;

  &:hover {
    color: #646cff;
  }
`;

export const TaskCount = styled.span`
  color: #aaa;
  font-size: 0.875rem;
  margin-left: 8px;
`;

export const ListActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const EditContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
