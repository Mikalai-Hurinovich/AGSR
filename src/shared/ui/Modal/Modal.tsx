import React, { ReactNode } from 'react';

import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <S.Backdrop onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>{children}</S.ModalContainer>
    </S.Backdrop>
  );
};
