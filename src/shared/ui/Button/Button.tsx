'use client';
import { ReactNode } from 'react';
import Link from 'next/link';

import * as S from './styles';

interface BaseProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

type ButtonProps =
  | ({ href: string } & BaseProps)
  | ({ onClick?: () => void; type?: 'button' | 'submit' | 'reset' } & BaseProps);

export function Button(props: ButtonProps) {
  const { variant, fullWidth, className, children, disabled } = props;

  if ('href' in props) {
    return (
      <Link href={props.href}>
        <S.StyledLink
          $variant={variant}
          $fullWidth={fullWidth}
          className={className}
          $disabled={disabled}
          aria-disabled={disabled}
        >
          {children}
        </S.StyledLink>
      </Link>
    );
  }

  return (
    <S.StyledButton
      type={props.type || 'button'}
      onClick={props.onClick}
      $variant={variant}
      $fullWidth={fullWidth}
      className={className}
      disabled={disabled}
      $disabled={disabled}
    >
      {children}
    </S.StyledButton>
  );
}
