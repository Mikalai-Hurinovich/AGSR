'use client';
import { ReactNode } from 'react';

import * as S from './styles';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  center?: boolean;
  className?: string;
  children: ReactNode;
}

export const Heading = ({
  as = 'h1',
  size = 'medium',
  color,
  center = false,
  className,
  children,
}: HeadingProps) => {
  return (
    <S.StyledHeading as={as} $size={size} $color={color} $center={center} className={className}>
      {children}
    </S.StyledHeading>
  );
};
