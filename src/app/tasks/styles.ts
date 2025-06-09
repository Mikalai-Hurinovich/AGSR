'use client';
import styled from 'styled-components';

export const TasksLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  min-height: calc(100vh - 100px);
  height: 100%;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const TasksSidebar = styled.div`
  padding-right: 20px;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 1080px) {
    padding-right: 0;
    border-bottom: 1px solid #414868;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

export const TasksContent = styled.div`
  height: 100%;
  overflow-y: auto;
`;
