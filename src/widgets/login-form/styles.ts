'use client';
import styled from 'styled-components';
import Link from 'next/link';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  background-color: #24283b;
`;

export const LoginCard = styled.div`
  background-color: #24283b;
  padding: 3rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(122, 162, 247, 0.1);
`;

export const BackLinkWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

export const BackLink = styled(Link)`
  color: #c0caf5;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.9rem;
  transition: opacity 0.2s ease;

  &:hover {
    color: #fff;
    opacity: 0.8;
    text-decoration: underline;
  }
`;
