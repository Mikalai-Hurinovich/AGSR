'use client';
import styled from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  background-color: #24283b;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinksContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const StyledLink = styled(Link)`
  color: #c0caf5;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #9aadf9;
    text-decoration: underline;
  }
`;
