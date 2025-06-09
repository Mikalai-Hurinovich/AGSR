import styled, { css } from 'styled-components';

export const baseStyles = css<{ $fullWidth?: boolean; $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: 0.2s ease-in-out;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  text-decoration: none;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

export const primary = css<{ $disabled?: boolean }>`
  background-color: #7aa2f7;
  color: #24283b;

  &:hover {
    background-color: ${({ $disabled }) => ($disabled ? '#7AA2F7' : '#9AADF9')};
  }
`;

export const secondary = css<{ $disabled?: boolean }>`
  background-color: transparent;
  color: #c0caf5;
  border: 1px solid #414868;

  &:hover {
    background-color: ${({ $disabled }) => ($disabled ? 'transparent' : '#24283B')};
    color: ${({ $disabled }) => ($disabled ? '#C0CAF5' : '#9AADF9')};
  }
`;

export const StyledButton = styled.button<{
  $variant?: 'primary' | 'secondary';
  $fullWidth?: boolean;
  $disabled?: boolean;
}>`
  ${baseStyles}
  ${({ $variant = 'primary' }) => ($variant === 'secondary' ? secondary : primary)}
    &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const StyledLink = styled.div<{
  $variant?: 'primary' | 'secondary';
  $fullWidth?: boolean;
  $disabled?: boolean;
}>`
  ${baseStyles}
  ${({ $variant = 'primary' }) => ($variant === 'secondary' ? secondary : primary)}
`;
