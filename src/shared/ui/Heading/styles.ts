import styled, { css } from 'styled-components';

export interface StyledHeadingProps {
  $size?: 'small' | 'medium' | 'large';
  $color?: string;
  $center?: boolean;
}

const sizeStyles = {
  small: css`
    font-size: 1.5rem;
  `,
  medium: css`
    font-size: 2.5rem;
  `,
  large: css`
    font-size: 3.5rem;
  `,
};

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-weight: 700;
  color: ${({ $color }) => $color || '#C0CAF5'};
  ${({ $size = 'medium' }) => sizeStyles[$size]}
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
  margin-bottom: 1rem;
`;
